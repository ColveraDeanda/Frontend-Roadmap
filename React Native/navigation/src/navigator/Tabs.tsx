import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Tab2Screen from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';

// Se retorna el tab de ios por que se ve más bonito :)
export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsIOS />
}



const Tab = createMaterialBottomTabNavigator();

function TabsAndroid() {
    return (
        <Tab.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colores.primary

            }}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    borderTopColor: colores.secondary, // Esta opción solo aparece si no tiene las props de abajo.
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 20
                },
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon({ color }) {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1';
                            break;
                        case 'Tab2Screen':
                            iconName = 'T2';
                            break;
                        case 'StackNavigator':
                            iconName = 'T3';
                            break;

                    }
                    return <Text style={{ color }}>{iconName}</Text>
                },
            })}
        >
            <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <Tab.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={Tab2Screen} />
            <Tab.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </Tab.Navigator>
    );
}





const BottonTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <BottonTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: colores.primary,
                    borderTopColor: colores.secondary, // Esta opción solo aparece si no tiene las props de abajo.
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 20
                },
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon({ color }) {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1';
                            break;
                        case 'Tab2Screen':
                            iconName = 'T2';
                            break;
                        case 'StackNavigator':
                            iconName = 'T3';
                            break;

                    }
                    return <Text style={{ color }}>{iconName}</Text>
                },
            })}

        >
            <BottonTabIOS.Screen name="Tab1Screen" options={{
                title: 'Tab1', tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="layers" color={color} size={15} />
                )
            }} component={Tab1Screen} />

            <BottonTabIOS.Screen name="Tab2Screen" options={{
                title: 'Tab2', tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="microsoft" color={color} size={15} />
                )
            }} component={TopTabNavigator} />
            
            <BottonTabIOS.Screen name="StackNavigator" options={{
                title: 'Stack', tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="pipe" color={color} size={15} />
                )
            }} component={StackNavigator} />
            
        </BottonTabIOS.Navigator>
    );
}

