import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';

const ListeMots = () => {
  const motsPredefinis = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig'];
  const [mots, setMots] = useState(motsPredefinis);
  const [recherche, setRecherche] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const chercherMots = (texteRecherche) => {
    setRecherche(texteRecherche);
    const suggestionsFiltrees = mots.filter(mot =>
      mot.toLowerCase().startsWith(texteRecherche.toLowerCase())
    );
    setSuggestions(suggestionsFiltrees);
  };

  const choisirMot = (mot) => {
    setRecherche(mot);
    setSuggestions([]); // Effacer les suggestions une fois que le mot est choisi
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
        placeholder="Rechercher un mot..."
        onChangeText={chercherMots}
        value={recherche}
      />
      <FlatList
        data={suggestions}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => choisirMot(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
};

export default ListeMots;
