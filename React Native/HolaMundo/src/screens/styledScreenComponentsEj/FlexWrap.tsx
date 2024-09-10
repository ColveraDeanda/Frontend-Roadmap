import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexWrap = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
    </View>
  )
}

// * EJEMPLO FLEX-WRAP
/**
 * La propiedad flexWrap servirá para controlar el comportamiento de los children cuando se desborden
 * del container
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    box1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    box2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    box3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    }
});


export default FlexWrap;