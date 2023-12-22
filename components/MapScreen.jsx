import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import axios from 'axios';

export default function MapScreen() {
  const [communeData, setCommuneData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://172.16.220.122:8083/Commune/affannonce');
        if (response.data && Array.isArray(response.data)) {
          setCommuneData(response.data);
          console.log('Données de commune récupérées avec succès :', response.data);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données de commune :', error);
      }
    };

    // Appel de la fonction pour récupérer les données de commune
    fetchData();
  }, []);

  // Génération des marqueurs à partir des données de commune
  const generateMarkersFromCommuneData = () => {
    return communeData.map((commune, index) => ({
      key: index.toString(),
      title: commune[0], // Nom de la commune
      coordinate: {
        latitude: commune[2], // Coordonnée Y (latitude)
        longitude: commune[1], // Coordonnée X (longitude)
      },
      nbrAnnonce: commune[3], // Nombre d'annonces
    }));
  };

  const markers = generateMarkersFromCommuneData();

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
        {markers.map((marker) => (
          <Marker
            key={marker.key}
            title={marker.title}
            coordinate={marker.coordinate}
          >
            <Callout>
              <View>
                <Text>{marker.title}</Text>
                <Text>{`Nombre d'annonces : ${marker.nbrAnnonce}`}</Text>
              </View>
            </Callout>
          </Marker>
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
