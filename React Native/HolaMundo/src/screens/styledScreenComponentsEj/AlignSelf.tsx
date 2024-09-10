import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AlignSelf = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
    </View>
  )
}

// * EJEMPLO ALIGN-SELF
/**
 * alignSelf has the same options and effect as alignItems but instead of affecting the children 
 * within a container, you can apply this property to a single child to change its alignment within 
 * its parent. alignSelf overrides any option set by the parent with alignItems.
 */
 // * Sirve para darle un comportamiento a un elemento individual, independientemente del padre.

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        flexDirection: 'row'
    },
    box1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'flex-start'
    },
    box2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'center'
    },
    box3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'flex-end'
    }
});


export default AlignSelf;