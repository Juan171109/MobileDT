// Import necessary modules and types
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, query, orderByChild, limitToLast, onValue, push } from 'firebase/database';
import { firebaseConfig } from '../../firebaseConfig';
import SensorModel from '../models/SensorModel';

// Define a function to read raw sensor data
export const readSensorData = () => {
  const [sensorData, setSensorData] = useState<SensorModel[]>([]);

  useEffect(() => {
    // Initialize Firebase with your configuration
    const firebaseApp = initializeApp(firebaseConfig);
    const db = getDatabase(firebaseApp);

    // Define the path to the data you want to read
    const dataRef = ref(db, 'sensors');
    const dataQuery = query(dataRef, orderByChild('timestamp'), limitToLast(1));

    // Attach an event listener to read the data
    onValue(dataQuery, (snapshot) => {
      if (snapshot.exists()) {
        const latestData = snapshot.val();
        const sensorValues = latestData[Object.keys(latestData)[0]];

        // Check if the temperature is higher than 25°C
        const temperature = parseFloat(sensorValues.temperature);
        if (temperature > 28) {
          // Send an event to Firebase
          const eventsRef = ref(db, 'events');
          const timestamp = new Date().toISOString();

          const eventObject = {
            sensorType: 'Temperature',
            sensorValue: temperature,
            timestamp: timestamp,
          };

          push(eventsRef, eventObject)    
          .then(() => {
            console.log('Event added to Firebase:', eventObject);
          })
          .catch((error) => {
            console.error('Error adding event data:', error);
          });
        }

        // Transform sensor values into the desired format
        const transformedData: SensorModel[] = Object.keys(sensorValues).map((key) => {
          let icon = '';
          let unit = '';

          switch (key) {
            case 'temperature':
              icon = 'thermometer-half';
              unit = '°C';
              break;
            case 'pressure':
              icon = 'tachometer';
              unit = 'hPa';
              break;
            case 'humidity':
              icon = 'tint';
              unit = '%';
              break;
            case 'light':
              icon = 'sun-o';
              unit = 'Lux';
              break;
            case 'co2':
              icon = 'cloud';
              unit = 'ppm';
              break;
            default:
              icon = 'question-circle'; // Default icon
              break;
          }

          // Format the sensor reading
          const formattedValue = `${sensorValues[key]} ${unit}`;

          return {
            name: key.charAt(0).toUpperCase() + key.slice(1), 
            icon: icon, 
            value: formattedValue, 
          };
        });

        setSensorData(transformedData);
      } else {
        console.log('No data available');
      }
    }, (error) => {
      console.error('Error reading data:', error);
    });
  }, []); 

  return {
    sensorData,
  };
};

export default readSensorData;
