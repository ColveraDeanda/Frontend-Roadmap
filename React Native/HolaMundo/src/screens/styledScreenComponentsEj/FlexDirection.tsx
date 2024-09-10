import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexDirection = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
    </View>
  )
}

// * EJEMPLO FLEX-DIRECTION
// ! flexDirection controls the direction in which the children of a node are laid out.
/* Por defecto, ya se tiene un flex-direction: 'column'.
   - column: Align children from top to bottom.
   - row: Align children from left to right.
   - column-reverse:  Align children from bottom to top.
   - row-reverse:  Align children from right to left
*/

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28C4D9',
        flexDirection: 'row'
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


export default FlexDirection;