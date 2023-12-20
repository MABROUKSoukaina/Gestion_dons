import React from 'react';
import { View } from 'react-native';
import MapScreen from '../../components/MapScreen'; // Assurez-vous de l'importer correctement depuis le chemin approprié

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapScreen />
    </View>
  );
};

export default App;
