import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

// ! Aquí se define el tipo de dato que recibirá cada screen.
// * Para ello se pone nuestra type que se defininó. Y se pone la screen en la que nos encontramos.
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { }

/*  interface RouterParams {
    id: number,
    nombre: string
} */


const PersonaScreen = ({ navigation, route }: Props) => {
    console.log(JSON.stringify(route, null, 3))

      const params = route.params;
      console.log(params);




    // * Ésta es una forma de controlar el tipo de dato de los params que están llegando
    /* const params = route.params as RouterParams;
    console.log(params); */


    // * El siguiente useEffect solo es para ios:
    useEffect(() => {
        if(params) {
            navigation.setOptions({
                title: params.nombre
            });
        }
    })

    return (
        <View>
            <Text style={styles.title}>Persona Screen</Text>

            <View style={styles.containerButtons}>

                <View style={styles.button}>
                    <Button
                        title='Regresar página 1'
                        onPress={() => navigation.pop()}
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        title='Ir página 2'
                        onPress={() => navigation.navigate('Pagina2Screen')}
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        title='Ir página 3'
                        onPress={() => navigation.navigate('Pagina3Screen')}
                    />
                </View>

                {
                    (params != undefined) &&
                    <View style={styles.dataContainer}>
                        <Text style={styles.data}>ID: {params.id}</Text>
                        <Text style={styles.data}>Nombre: {params.nombre}</Text>
                    </View>
                }
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerButtons: {
        margin: 15
    },
    button: {
        margin: 10
    },
    title: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginBottom: 15
    },
    dataContainer: {
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    data: {
        marginVertical: 10,
        fontSize: 30,
        color: 'black'
    }
})

export default PersonaScreen

