import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JustifyContent = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
    </View>
  )
}

// * EJEMPLO JUSTIFY-CONTENT
// ! JustifyContent describes how to align children.
/* Al usar justifyContent, su comportamiento dependerá de la dirección de los elementos, osea (flexDirection). 
      - center:  Align children of a container in the center of the container's main.
      - flex-start(default value): Align children of a container to the start of the container's main.
      - flex-end: Align children of a container to the end of the container's main axis.
      - space-evenly: Va a distribuir el mismo espacio entre sus hijos.
      - space-around: Va a distribuir el espacio, sin empezar desde el inicio.
      - space-between: Va a distribuir el espacio, empezando desde el inicio.
*/  


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        justifyContent: 'space-evenly'

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


export default JustifyContent;