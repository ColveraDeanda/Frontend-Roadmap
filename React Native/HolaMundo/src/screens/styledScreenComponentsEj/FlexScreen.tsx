import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
    </View>
  )
}

// * EJEMPLO DE PROPIEDAD 'Flex'.

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9'
    },
    box1: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    box2: {
        flex: 2,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    box3: {
        flex: 7,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    }
});

// !Nota Propiedad Flex: 
// * Para el caso de Flex, se están sumando los valores y en base a eso se sacará el 100%. (1 + 2 + 7 = 10). 
// * 10 sería el 100%. En el ejercicio se tiene: 1 (10%), 2 (20%), 7 (70%).

export default FlexScreen;