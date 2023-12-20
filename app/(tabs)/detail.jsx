import React, { useState } from 'react';
import { Button, Modal, Text, View, StyleSheet } from 'react-native';

const InfoPopup = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // Variables arbitraires pour tester
  const title = 'Titre';
  const nCategorie = 'Catégorie';
  const qte = 'Quantité';
  const commune = 'Commune';
  const date = 'Date';
  const tel = 'Contact';
  const desc = 'Description';

  return (
    <View style={styles.container}>
      <Button title="Afficher les informations" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.item}><Text style={styles.label}>Catégorie:</Text> {nCategorie}</Text>
            <Text style={styles.item}><Text style={styles.label}>Quantité:</Text> {qte}</Text>
            <Text style={styles.item}><Text style={styles.label}>Commune:</Text> {commune}</Text>
            <Text style={styles.item}><Text style={styles.label}>Date de poste:</Text> {date}</Text>
            <Text style={styles.item}><Text style={styles.label}>Contact:</Text> {tel}</Text>
            <Text style={styles.item}><Text style={styles.label}>Description:</Text> {desc}</Text>
            <Button title="Fermer" onPress={() => setModalVisible(false)} />
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
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    width: '60%',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default InfoPopup;
