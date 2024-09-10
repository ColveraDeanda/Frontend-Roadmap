import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import Settings from '../screens/Settings';
import { Text, View, Image } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    return (
        <Drawer.Navigator
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
    );
}

//* Gracias a drawerContent ahora podemos hacer un menú lateral personalizado. Al componente se le pasan las props
//* adecuadas para que pueda hacer la navegación sin problema
const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones de munú */}
            {/* La navegación a la respectiva screen tiene que estar definida en Drawer.Navigator */}
            <View style={styles.menuContainer}>
                <TouchableOpacity 
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Text style={styles.menuTexto}>Tabs</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('Settings')}
                >
                    <Text style={styles.menuTexto}>Settings</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    )
}
