import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigator/MenuLateral';
import { Authprovider } from './src/context/AuthContext';

// https://reactnavigation.org/docs/getting-started
/**
    Para utilizar navigation en react-native, es necesario usar un paquete de tercero (link anterior).
    se tiene que seguir la doc para la instalación de las cosas necesarias, así mismo en el caso de 
    android se copio un código. Finalmente se envuelve la app con la etiqueta <NavigatorContainer></NavigatorContainer>
    y listo. Con eso ya se puede usar los diferentes tipos de navegación.
 */

const App = () => {
  return (
      <NavigationContainer>
        <AppState>
            {/* <StackNavigator/> */}
            {/* <MenuLateralBasico/> */}
            <MenuLateral/>
            {/* <Tabs/> */}
        </AppState>
      </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
    return (
        <Authprovider>
            {children}
        </Authprovider>
    );
};


export default App;
