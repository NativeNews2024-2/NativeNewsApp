import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Linking, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewsDetails = ({ route }) => {
  const { title, description, imageUrl, newsUrl } = route.params;
  const navigation = useNavigation(); // Para navegar entre telas

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho com botão de voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
      </View>

      {/* Conteúdo da notícia */}
      <Image
        source={{ uri: imageUrl || 'https://via.placeholder.com/300' }}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        title="Leia a notícia completa"
        onPress={() => Linking.openURL(newsUrl)} // Abre o link no navegador
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007BFF',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
    color: '#555',
  },
});

export default NewsDetails;