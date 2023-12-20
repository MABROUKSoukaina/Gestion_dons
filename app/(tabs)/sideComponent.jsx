import React, { useState } from 'react';
import { View, Text, Picker, TouchableOpacity } from 'react-native';

const sideComponent = () => {
  const [commune, setCommune] = useState('');
  const [province, setProvince] = useState('');
  const [region, setRegion] = useState('');

  // Fonction de gestion pour récupérer les données sélectionnées
  const handleFilter = () => {
    // Ici, vous pouvez utiliser les valeurs sélectionnées pour effectuer des actions comme la récupération des données associées
    console.log('Commune sélectionnée :', commune);
    console.log('Province sélectionnée :', province);
    console.log('Région sélectionnée :', region);
    // Vous pouvez appeler une fonction ou faire d'autres actions ici
  };

  return (
    <View>
      <View style={{ backgroundColor: 'lightgray', width: '70%' }}>
        {/* Dropdown pour la commune */}
        <Picker
          selectedValue={commune}
          onValueChange={(itemValue) => setCommune(itemValue)}
        >
          {/* Ajoutez des éléments Picker.Item pour les options de la commune */}
          {/* Exemple : <Picker.Item label="Option" value="valeur" /> */}
        </Picker>

        {/* Dropdown pour la province */}
        <Picker
          selectedValue={province}
          onValueChange={(itemValue) => setProvince(itemValue)}
        >
          {/* Ajoutez des éléments Picker.Item pour les options de la province */}
        </Picker>

        {/* Dropdown pour la région */}
        <Picker
          selectedValue={region}
          onValueChange={(itemValue) => setRegion(itemValue)}
        >
          {/* Ajoutez des éléments Picker.Item pour les options de la région */}
        </Picker>
      </View>

      {/* Bouton "Filtrer" */}
      <TouchableOpacity onPress={handleFilter} style={{ marginTop: 20, backgroundColor: 'blue', padding: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Filtrer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default sideComponent;
