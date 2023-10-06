import { initializeApp } from 'firebase/app';
import { getDatabase, ref, limitToLast, orderByChild, query, onValue } from 'firebase/database';
import { firebaseConfig } from './firebaseConfig';

// Initialize Firebase with your config
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

// Define the path to the data you want to read
const dataRef = ref(db, 'sensors');
const dataQuery = query(dataRef, orderByChild('timestamp'), limitToLast(1));

// Attach an event listener to read the data
onValue(dataQuery, (snapshot) => {
  if (snapshot.exists()) {
    const latestData = snapshot.val();
    console.log('Latest Data:', latestData);
  } else {
    console.log('No data available');
  }
}, (error) => {
  console.error('Error reading data:', error);
});
