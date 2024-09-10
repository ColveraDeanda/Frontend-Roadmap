import React from 'react';
import { View, StyleSheet } from 'react-native';

const PositionScreenAbsolute = () => {
  return (
    <View style={styles.container}>
        <View style={styles.redBox}></View>
        <View style={styles.purpleBox}></View>
        <View style={styles.orangeBox}></View>
        <View style={styles.greenBox}></View>
    </View>
  )
}

// ! Los elementos tienen una posición relativa por defecto.
// * Los elementos con position absolute,  al momento de que son modificados con left, right etc,
// * su posición cambiará en base al padre.

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /* justifyContent: 'center',
        alignItems: 'center', */
        backgroundColor: '#28C4D9'
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0
    },
    orangeBox: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    greenBox: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
    },
    redBox: {
        /* width: 100,
        height: 100, */
        backgroundColor: 'red',
        borderWidth: 10,
        borderColor: 'white',
        /* position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0 */
        ...StyleSheet.absoluteFillObject
    }
});

// * Nota: position: 'absolute' todos sus lados en 0, es lo mismo que usar ...StyleSheet.absoluteFillObject. (sirve como shorcut).

export default PositionScreenAbsolute;