import React from 'react';
import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

const roundDimensions = (dim: number):number => {
    return Number(dim.toFixed(3));
}

const DimensionsScreen = () => {

    //* Tener en cuenta que todos los elementos tienen un position: relative por defecto.
    // ? teniendo el height y width, podemos hacer ciertos cálculos en caso de ser necsario.
    const { width, height } = useWindowDimensions(); // Éste hook traerá las dimensiones cada vez que detecte un cambio.

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.purpleBox,
                    width: width * 0.5
                }} />
                <View style={styles.orangeBox} />
            </View>
            <Text style={styles.title}>
                W: {roundDimensions(width)}, H: {roundDimensions(height)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        height: '50%',
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
});

export default DimensionsScreen;
