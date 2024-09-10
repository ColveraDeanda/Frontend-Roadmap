import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {  SafeAreaView} from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fontAwesomeLibreary } from './src/icons/FontAwesomeIcons';
import TareaScreen from './src/screens/TareaScreen';


library.add(...fontAwesomeLibreary);


/* rafc = Snippet component*/

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <ContadorScreen/> */}
        {/* <HolaMundoScreen/> */}
        {/* <BoxObjectModelScreen></BoxObjectModelScreen> */}
        {/* <DimensionsScreen/> */}
        {/* <PositionScreenRelative></PositionScreenRelative> */}
        {/* <PositionScreenAbsolute></PositionScreenAbsolute> */}
        {/* <FlexScreen></FlexScreen> */}
        {/* <FlexDirection></FlexDirection> */}
        {/* <JustifyContent></JustifyContent> */}
        {/* <AlignItems></AlignItems> */}
        {/* <AlignSelf></AlignSelf> */}
        {/* <FlexWrap></FlexWrap> */}
        <TareaScreen></TareaScreen>
        {/* <Navigator/> */}
        {/* Sample data List */}
       
      </SafeAreaView>
    </NavigationContainer>

  );
};




export default App;
