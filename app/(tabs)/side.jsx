// import React, { useState } from 'react';
// import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   searchBar: {
//     height: 40,
//     borderColor: 'maroon',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   listItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: 'maroon',
//   },
//   listContainer: {
//     borderColor: 'maroon',
//     borderWidth: 1,
//   },
// });

// const ListeMots = () => {
//   const motsPredefinis = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig'];
//   const [mots, setMots] = useState(motsPredefinis);
//   const [recherche, setRecherche] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   const chercherMots = (texteRecherche) => {
//     setRecherche(texteRecherche);
//     const suggestionsFiltrees = mots.filter(mot =>
//       mot.toLowerCase().startsWith(texteRecherche.toLowerCase())
//     );
//     setSuggestions(suggestionsFiltrees);
//   };

//   const choisirMot = (mot) => {
//     setRecherche(mot);
//     setSuggestions([]); // Effacer les suggestions une fois que le mot est choisi
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Rechercher un mot..."
//         onChangeText={chercherMots}
//         value={recherche}
//       />
//       <FlatList
//         style={styles.listContainer}
//         data={suggestions}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => choisirMot(item)}>
//             <Text style={styles.listItem}>{item}</Text>
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.toString()}
//       />
//     </View>
//   );
// };

// export default ListeMots;
import React, { useState } from 'react';
import { TextInput, FlatList, Text, View } from 'react-native';
import axios from 'axios';

const AutocompleteExample = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const fetchSuggestions = async (text) => {
        setSearchTerm(text);
        try {
            const response = await axios.get(`http://localhost:8081/Communes/autocomplete`, {
                params: {
                    searchTerm: text
                }
            });
            setSuggestions(response.data);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Search Communes..."
                value={searchTerm}
                onChangeText={fetchSuggestions}
            />
            <FlatList
                data={suggestions}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={(item) => item.toString()}
            />
        </View>
    );
};

export default AutocompleteExample;
