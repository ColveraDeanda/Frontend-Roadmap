import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> { }

// * Pagina1Screen está recibiendo Props de StackNavigator.tsx
// * Con la propiedad navigation.navigate, se puede navegar a otra screen.
const Pagina1Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 1 Screen</Text>

            <View style={styles.marginButton}>
                <Button
                    title="Ir página 2"
                    onPress={() => navigation.navigate('Pagina2Screen')}
                />
            </View>

            <View style={styles.marginButton}>
                <Button
                    title="Ir página persona"
                    onPress={() => navigation.navigate('PersonaScreen')}
                />
            </View>

            <View style={styles.marginButton}>
                <Button
                    title="Abrir menú lateral"
                    onPress={() => navigation.toggleDrawer()}
                />
            </View>

            {/* Supongamos un escenario dónde tengo que pasarla data a otra screen. 
            Se haría de la siguiente manera: */}
            <View style={stylesLocal.buttonsConstainer}>
                <TouchableOpacity
                    style={{
                        ...stylesLocal.navButton,
                        backgroundColor: '#5856D6',
                    }}
                    onPress={() =>
                        navigation.navigate('PersonaScreen', {
                            id: 24324234,
                            nombre: 'Pedro',
                        })
                    }>
                    <Text style={stylesLocal.navWithArgsButton}>Navegación Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ ...stylesLocal.navButton, backgroundColor: '#FF9427' }}
                    onPress={() =>
                        navigation.navigate('PersonaScreen', {
                            id: 24324234,
                            nombre: 'María',
                        })
                    }>
                    <Text style={stylesLocal.navWithArgsButton}>Navegación María</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const stylesLocal = StyleSheet.create({
    navWithArgsButton: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonsConstainer: {
        height: 250,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    navButton: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 50,
    },
});

export default Pagina1Screen;
