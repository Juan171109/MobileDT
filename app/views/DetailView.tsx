// DetailViewScreen.tsx
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import readSensorData from "../viewModels/SensorViewModel";

const DetailViewScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  // const sensorData = [
  //   { name: 'Temperature', icon: 'thermometer-half', value: '25°C' },
  //   { name: 'Pressure', icon: 'tachometer', value: '1013 hPa' },
  //   { name: 'Humidity', icon: 'tint', value: '55%' },
  //   { name: 'Light', icon: 'sun-o', value: '300 Lux' },
  //   { name: 'CO2', icon: 'cloud', value: '450 ppm' }, 
  // ];

  const { sensorData } = readSensorData();
  console.log(sensorData);
  
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.icon}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" onPress={() => navigation.navigate('Dashboard')}/>
        </TouchableOpacity>
        <Text style={styles.title}>DetailView</Text>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Asset Info View */}
      <View style={styles.assetInfo}>
        {/* <FontAwesome name="image" size={80} color="blue" /> */}
        <Image source={require('../images/asset.png')} style={styles.assetImage} />
        <View style={styles.assetText}>
          <Text style={styles.assetName}>Asset Name</Text>
          <Text style={styles.assetDescription}>Asset Description: This is a test machine. We will monitor the real-time sensor data.</Text>
          <Text style={styles.assetDescription}>Location: 55 Wellesley Street{'\n'}East Auckland City{'\n'}New Zealand </Text>
        </View>
      </View>
      {/* Sensor Data View */}
      <ScrollView style={styles.sensorList}>
        {sensorData.map((sensor, index) => (
          <View key={index} style={styles.sensorItem}>
            <FontAwesome name={sensor.icon} size={25} color="green" style={styles.sensorIcon} />
            <Text style={styles.sensorName}>{sensor.name}</Text>
            <Text style={styles.sensorValue}>{sensor.value}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top:20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    paddingHorizontal: 3,
    marginLeft:1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  assetInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    height: 300,
  },
  assetImage:{
    width: 150,
    height: 180,
  },
  assetText: {
    marginLeft: 20,
    width: 280,
  },
  assetName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  assetDescription: {
    fontSize: 16,
    marginRight:10,
    // marginLeft: 6,
  },
  sensorList: {
    flex: 1,
  },
  sensorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sensorIcon:{
    marginLeft: 10,
    width:25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sensorName: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  sensorValue: {
    marginLeft: 'auto',
    marginRight: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default DetailViewScreen;
