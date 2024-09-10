import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/Settings';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
        screenOptions={{
            drawerPosition: 'left', // position del drawer
           // headerShown: false,      // Hamburguesa en false
            drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        }}
        >
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="Settings" options={{ title: 'Settings' }} component={Settings} />
        </Drawer.Navigator>
    );
}