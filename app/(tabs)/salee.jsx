import React, { useState } from 'react';
import { TextInput, FlatList, Text, View } from 'react-native';
import axios from 'axios';

const AutocompleteExample = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const fetchSuggestions = async (text) => {
        setSearchTerm(text);
        try {
            const response = await axios.get(`http://localhost:8083/communes/autocomplete`, {
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
