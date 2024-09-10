import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import PersonaScreen from '../screens/PersonaScreen';

// A continucación se define el tipo de dato que podría llegar al pasarle args de una screen a otra mediente navigation.
// Nota: Si el screen no está recibiendo params, se pondrá undefined. En caso contrario, se define el obj y su tipo de dato.
export type RootStackParams = {
  Pagina1Screen: undefined,
  Pagina2Screen: undefined,
  Pagina3Screen: undefined,
  PersonaScreen: {id: number, nombre: string}
}

const Stack = createStackNavigator();

// Stack navigator tiene múltiples propiedades para que se vea mejor. Por ejem. 
// headerShown: false, cardStyle.. entre otras
export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Pagina1Screen'
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}

    >
      <Stack.Screen name="Pagina1Screen" options={{ title: 'Página 1' }} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{ title: 'Página 2' }} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{ title: 'Página 3' }} component={Pagina3Screen} />
      <Stack.Screen name="PersonaScreen" options={{ title: 'PersonaScreen' }} component={PersonaScreen} />
    </Stack.Navigator>
  );
}