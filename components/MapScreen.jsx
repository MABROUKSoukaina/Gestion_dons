import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

export default function MapScreen() {
  const [xCoordinates, setXCoordinates] = useState([]);
  const [yCoordinates, setYCoordinates] = useState([]);

  useEffect(() => {
    const fetchXCoordinates = async () => {
      try {
        const responseX = await axios.get('http://172.16.26.120:8083/Commune/getX');
        if (responseX.data && Array.isArray(responseX.data)) {
          setXCoordinates(responseX.data);
          console.log('Coordonnées Y récupérées avec succès :', responseX.data);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des coordonnées X:', error);
      }
    };

    const fetchYCoordinates = async () => {
      try {
        const responseY = await axios.get('http://172.16.26.120:8083/Commune/getY');
        if (responseY.data && Array.isArray(responseY.data)) {
          setYCoordinates(responseY.data);
          console.log('Coordonnées Y récupérées avec succès :', responseY.data);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des coordonnées Y:', error);
      }
    };

    // Appel des deux fonctions pour récupérer les données
    fetchXCoordinates();
    fetchYCoordinates();
  }, []);

  // Génération des marqueurs à partir des coordonnées X et Y
  const generateMarkersFromCoordinates = () => {
    const markers = [];
    for (let i = 0; i < Math.min(xCoordinates.length, yCoordinates.length); i++) {
      markers.push({
        title: `Marker ${i + 1}`,
        coordinates: {
          latitude: yCoordinates[i],
          longitude: xCoordinates[i],
        },
      });
    }
    return markers;
  };

  const markers = generateMarkersFromCoordinates();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
         initialRegion={{
          latitude: 31.7917, // Latitude centrée sur le Maroc
          longitude: -7.0926, // Longitude centrée sur le Maroc
          latitudeDelta: 10, // Valeur arbitraire pour afficher une région étendue du Maroc
          longitudeDelta: 10, // Valeur arbitraire pour afficher une région étendue du Maroc
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            title={marker.title}
            coordinate={marker.coordinates}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
