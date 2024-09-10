import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AlignItems = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
    </View>
  )
}

// * EJEMPLO ALIGN-ITEMS
// ! Por defecto, alignItems tiene stretch por defecto, es decir, los elementos se van a estirar hasta donde puedan.
/**
 *  flex-start: Align children of a container to the start of the container's. 
 *  flex-end: Align children of a container to the end of the container's. 
 *  center: Align children of a container in the center of the container's
 */
// * Align Items será de ayuda para ya no estirar un elemento hasta dónde se pueda, y se reduzca a su contenido.


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
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


export default AlignItems;