import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; 
import { Link } from 'expo-router';

const MonFormulaire = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [tel, setTel] = useState('');
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedImage, setSelectedImage] = useState(null)
  const handleChooseImage = async () => {
    // Demande d'autorisation d'accès à la galerie de photos
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission refusée', 'Vous devez autoriser l\'accès à la galerie pour choisir une image.');
      return;
    }

    // Sélection de l'image depuis la galerie
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      setSelectedImage(pickerResult.uri); // Mise à jour de l'état avec l'URI de l'image sélectionnée
    }
  };

  const handleModifier = () => {
    // Handle modification logic here
  };

  const Sidebar = ({ showSidebar }) => {
    if (!showSidebar) {
      return null;
    }

    return (
      <TouchableOpacity style={styles.sidebar} onPress={toggleSidebar}>
        <Text style={styles.sidebarText}>Sidebar Content</Text>
      </TouchableOpacity>
    );
  };

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
     <View style={styles.container}>
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Nom *</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre nom"
          value={nom}
          onChangeText={(text) => setNom(text)}
        />

        <Text style={styles.label}>Prénom *</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre prénom"
          value={prenom}
          onChangeText={(text) => setPrenom(text)}
        />

        <Text style={styles.label}>Téléphone *</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre numéro de téléphone"
          value={tel}
          onChangeText={(text) => setTel(text)}
        />

        <Text style={styles.label}>Gmail *</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre adresse Gmail"
          value={gmail}
          onChangeText={(text) => setGmail(text)}
        />

        <Text style={styles.label}>Mot de passe *</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre mot de passe"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Text style={styles.label}>Photo</Text>
        {/* Add logic for handling photo selection */}
        <TouchableOpacity style={styles.imageButton} onPress={handleChooseImage}>
          <Text style={[styles.buttonText, styles.buttonTextRed]}>Choisir une photo</Text>
        </TouchableOpacity>
         {selectedImage && (
          <View style={styles.imagePreview}>
          <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
          </View>
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleModifier}>
            <Text style={styles.buttonText}>Modifier</Text>
            </TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={toggleSidebar}>
          <Text style={styles.buttonText}>Annuler</Text>
        </TouchableOpacity>
      
           
        </View>
      </View>
      
      </ScrollView>
      <Sidebar showSidebar={isSidebarVisible} />
      
     </View>
  );
};

const styles = StyleSheet.create({
 container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#ffffff',
  },
  headerImage: {
    width: '100%', // Ajustez la largeur de l'image selon vos besoins
    height: 200, // Ajustez la hauteur de l'image selon vos besoins
    resizeMode: 'cover', // Ajustez le mode de redimensionnement
    marginBottom: 10,
    // Autres styles pour l'image si nécessaire
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#8B0000', // Couleur grenat
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  androidPickerStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  fileInputContainer: {
    marginBottom: 10,
  },
  fileInput: {
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    color: '#007bff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#8B0000', // Couleur grenat
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: '48%', // Ajustement de la largeur pour les boutons
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
   imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  imageText: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000000',
  },
  numberInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  
  galleryButton: {
    backgroundColor: '#FFC0CB', // Couleur rose clair pour le bouton de la galerie
    marginRight: 10,
  },
  cameraButton: {
    backgroundColor: '#FFC0CB', // Couleur rose clair pour le bouton de la caméra
  },
  imageButton: {
    borderWidth: 1,
    borderColor: '#8B0000', // Contour en couleur grenat
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%', // Largeur étendue à 100%
    marginBottom: 10, // Marge en bas pour séparer les boutons
    marginBottom: 10,
  },
buttonTextRed: {
  fontSize: 16,
  color: '#8B0000'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#8B0000', // Couleur grenat pour le texte
  },
  closeButton: {
    backgroundColor: '#8B0000', // Couleur grenat pour le bouton "Fermer"
    padding: 6,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  imageTitleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  gifImage: {
    width: 100,
    height: 100,
    marginBottom: 20, // Éloignement du texte
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#8B0000', // Grenat color
  },
  input: {
    borderWidth: 1,
    borderColor: '#8B0000', // Grenat border color
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },

 label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#8B0000',
  },
  imageButton: {
    borderWidth: 1,
    borderColor: '#8B0000',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  imagePreview: {
    alignItems: 'center',
    marginTop: 10,
  },
  selectedImage: {
    width: 200,
    height: 200,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    opacity: 1,
  },
  sidebarText: {
    fontSize: 24, // Augmenter la taille du texte ici (par exemple, à 24)
    fontWeight: 'bold',
  },
});
export default MonFormulaire;
