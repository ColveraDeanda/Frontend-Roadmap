import React from 'react';
import { View, StyleSheet } from 'react-native';

const PositionScreenRelative = () => {
  return (
    <View style={styles.container}>
        <View style={styles.purpleBox}></View>
        <View style={styles.orangeBox}></View>
    </View>
  )
}

// ! Los elementos tienen una posición relativa por defecto.
//* Los elementos con position relative, al momento de que son modificados con left, right etc, 
//* su posición cambiará en base a su posicionamiento original.

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#28C4D9'
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        left: 100
    },
    orangeBox: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        right: 100
    }
});

export default PositionScreenRelative;