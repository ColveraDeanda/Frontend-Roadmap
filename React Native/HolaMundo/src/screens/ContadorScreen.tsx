import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Fab from '../components/Fab';

// Flex: 1 = Sieve para abarcar todo el espacio que tiene disponible.
// Valor por defecto de los elementos: 'relative'.

/**
 * Los siguientes elementos son botones pero con pequeñas diferencias (solo cambian en la opacidad)
 *  - TouchableHighlight.
 *  - TouchableOpacity = Este se usa normalmente.
 *  - TouchableWithoutFeedback
 *  - Button (No permite styles como inline)
 *
 */
const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>

      <Fab title='+1' onPress={() => setContador(contador + 1)} ></Fab>
      <Fab title='-1' onPress={() => setContador(contador - 1)} position='bl'></Fab>

      {/* <TouchableOpacity style={styles.fabLocationBL} onPress={() => setContador(contador - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 45,
    top: -15,
  }
});

export default ContadorScreen;
