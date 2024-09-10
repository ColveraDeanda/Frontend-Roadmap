import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCart from '../screens/ShoppingCart';
import Banner from '../screens/Banner';
import ItemList from './ItemList';

// A continucación se define el tipo de dato que podría llegar al pasarle args de una screen a otra mediente navigation.
// Nota: Si el screen no está recibiendo params, se pondrá undefined. En caso contrario, se define el obj y su tipo de dato.


const Stack = createStackNavigator();

// Stack navigator tiene múltiples propiedades para que se vea mejor. Por ejem. 
// headerShown: false, cardStyle.. entre otras
export const Navigator = () => {
  return (
    <Stack.Navigator
      
      initialRouteName='Banner'
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Banner" component={Banner} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
    </Stack.Navigator>
  );
}


