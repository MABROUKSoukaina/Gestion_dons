import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const MonBouton = () => {
  const [showModal, setShowModal] = useState(false);
  const [quantite, setQuantite] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const validerQuantite = () => {
    // Vérification si la quantité est valide (vous pouvez ajouter d'autres vérifications)
    if (quantite.trim() !== '') {
      setShowSuccessModal(true);
    } else {
      // Afficher un message d'erreur ou gérer la validation invalide
    }
    };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowModal(true)} style={styles.button}>
        <Link href={"/detail"}><Text style={styles.buttonText} >Cliquez ici</Text> </Link>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Veuillez préciser la quantité :</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Quantité"
              value={quantite}
              onChangeText={(text) => setQuantite(text)}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => setShowModal(false)} style={styles.closeButton}>
                <Text style={styles.buttonText}>Fermer</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={validerQuantite} style={styles.validateButton}>
                <Text style={styles.buttonText}>Valider</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showSuccessModal}
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={require('../../assets/images/validé.gif')} // Assurez-vous de spécifier le chemin correct
              style={styles.gifImage}
            />
            <Text style={styles.modalText}>Demande ajoutée avec succès</Text>
            <TouchableOpacity onPress={() => setShowSuccessModal(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'darkred',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 10,
    fontSize: 18,
    color: 'darkred',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'darkred',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
  closeButton: {
    backgroundColor: 'darkred',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  validateButton: {
    backgroundColor: 'darkred',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  gifImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },


})

export default MonBouton;
