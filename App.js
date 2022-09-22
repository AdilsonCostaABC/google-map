import { StatusBar } from 'expo-status-bar';
import *as React from 'react';
import *as Location from 'expo-location';
import { StyleSheet, Text, View } from 'react-native';
import MapView,{Marker,Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_KEY} from '@env';
const carImage=require('./assets/images/car.png')


export default function App() {
  const [origen,setOrigen]=React.useState({
      latitude:33.640411,
      longitude:-84.419853,
      // latitude:42.3601,
      // longitude:71.0942,
  });
  const [destination,setDestination]=React.useState({
      latitude:33.753746,
     
      longitude:-84.386330,
     
  });
  // React.useEffect(()=>{
  //   getLocationPermission();
  // },[]);
  // async function getLocationPermission(){
  //     let {status}= await Location.requestForegroundPermissionsAsync();
  //     if (status!=='granted'){
  //        alert ('Permission denied');
  //         return;
  //     }
  //     let location= await Location.getCurrentPositionAsync({});

  //     const current={
  //          latitude:location.coords.latitude,
  //          longitude:location.coords.longitude
  //     }
  //     setOrigen(current);
  // }
    
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map}
      initialRegion={{
        latitude:origen.latitude,
        longitude:origen.longitude,
        latitudeDelta:0.09,
        longitudeDelta:0.04,

      }}

      >
        <Marker  
          draggable={true}
          coordinate={origen}
          image={carImage}
          onDragEnd={(direction)=>setOrigen(direction.nativeEvent.coordinate)}
        />
        <Marker 
           draggable={true}
          coordinate={destination}
          onDragEnd={(direction)=>setDestination(direction.nativeEvent.coordinate)}
        />

        <MapViewDirections
          origin={origen}
          destination={destination}
          apikey={GOOGLE_MAPS_KEY}
          strokeColor="pink"
          strokeW idth={5}
          
        />
          {/* <Polyline
            coordinates={[origen,destination]}
            strokeColor="white"
            strokeWidth={8}
          /> */}
     </MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map:{
    width:'100%',
    height:'100%'
  }
});
