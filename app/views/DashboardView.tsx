import React, {useState} from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';

const Dashboard: React.FC<{ navigation: any }> = ({ navigation }) => {
  // console.log(Dimensions.get("screen"));

  const [sensorData, setSensorData] = useState<number>(30);
  const statusBarColor = sensorData > 50? 'red': 'green';
  const cardData = Array.from({ length: 20}).map((_, index) => ({
    title: `Asset ${index + 1}`,
    status: sensorData > 50 ? 'Error': 'Normal',
  }))

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Dashboard</Text>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Top Toolbar */}
      <View style={styles.topToolbar}>
        <Text style={styles.toolbarText}>20 Assets</Text>
        <View style={styles.toolbarButtons}>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="location-sharp" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="search-sharp" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome name="filter" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Main View */}
      <View style={styles.cardListContainer}>
        <ScrollView style={styles.cardList}>
          {cardData.map((item, index) => (
            <TouchableOpacity key={index} style={styles.card} onPress={ () => navigation.navigate('DetailView') }>
              {/* status bar */}
              <View style={[styles.statusBar, { backgroundColor: statusBarColor}]} />
              {/* title and status */}
              <Text style={styles.cardTitle} >{item.title}</Text>
              <Text style={styles.cardStatus} >{`Description: ${item.status}`}</Text>

              <FontAwesome name="bell" size={24} color="grey" style={styles.bellIcon} />

              <View style={styles.sensorIcons} >
                {/* sensor status and icon */}
                <TouchableOpacity style={styles.sensorIcon}>
                  <FontAwesome5 name="thermometer-half" size={24} color="green" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.sensorIcon}>
                  <FontAwesome name="tachometer" size={22} color="yellow" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.sensorIcon}>
                  <FontAwesome name="tint" size={22} color="green" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.sensorIcon}>
                  <FontAwesome name="sun-o" size={22} color="green" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.sensorIcon}>
                  <FontAwesome name="cloud" size={22} color="green" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
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
  topToolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  cardListContainer:{
    flex:1,
    justifyContent:'center',
  },
  cardList: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    width:'92%',
    height:150,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight:15,
    alignContent:'center',
    alignItems: 'flex-start',
    elevation: 3, // Add shadow on Android
  },
  statusBar: {
    width:8,
    height: 150,
    position: 'absolute',
    left:0,
  },
  bellIcon: {
    position: 'absolute',
    top: 5,
    right: 5, 
  },
  toolbarText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  toolbarButtons: {
    flexDirection: 'row',
  },
  toolbarIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardStatus: {
    color: 'green',
  },
  sensorIcons:{
    height:30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: 2,
    right: 0,
    position: 'absolute',
  },
  sensorIcon: {
    flexDirection: 'row', // Align icons horizontally
    justifyContent: 'flex-end',
    marginRight: 10,
    marginBottom:2,
  }
});

export default Dashboard;
