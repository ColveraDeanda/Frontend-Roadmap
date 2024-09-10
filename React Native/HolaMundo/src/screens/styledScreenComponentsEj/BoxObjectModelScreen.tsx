import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model Ejercice</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Se le está diciendo que se estiré todo lo posible del padre (SafeArea)
    backgroundColor: 'blue',
    alignSelf: 'flex-start', // AlignSelf = El background se alinea bien con el texto.
    borderRadius: 10, // Para que el borderRadius tome efecto, es necesario poner el overflow: hidden.
    overflow: 'hidden',
  },
  title: {
    paddingHorizontal: 40,
    marginVertical: 300,
    fontSize: 20,
    borderWidth: 5,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BoxObjectModelScreen;
