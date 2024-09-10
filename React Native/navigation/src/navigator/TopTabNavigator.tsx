import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { colores } from '../theme/appTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    //const { top } = useSafeAreaInsets(); // Esto es para el uso de ios.

    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={() => ({
               // tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary,
                },
                tabBarStyle: {
                    //en ios es shadowColor:"transparent"
                    elevation: 0,
                },
            })}
        >
            <Tab.Screen name="Chat" options={{
                title: 'Tab1', tabBarIcon: () => (
                    <MaterialCommunityIcons name="layers" size={15} />
                )
            }} component={ChatScreen} />

            <Tab.Screen name="Contacts"  options={{
                title: 'Tab2', tabBarIcon: () => (
                    <MaterialCommunityIcons name="microsoft" size={15} />
                )
            }} component={ContactsScreen} />

            <Tab.Screen name="Album" options={{
                title: 'Stack', tabBarIcon: () => (
                    <MaterialCommunityIcons name="pipe" size={15} />
                )
            }} component={AlbumsScreen} />
            
        </Tab.Navigator>
    );
}