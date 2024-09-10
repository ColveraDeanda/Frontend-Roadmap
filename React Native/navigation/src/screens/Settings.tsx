import { Text, View } from 'react-native';
import React, { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

const Settings = () => {

  // El siguiente hook es para lograr que se vea bien solo en ios.
  const insets = useSafeAreaInsets();

  const { authState } = useContext(AuthContext);

  return (
    // En vez de usar un SafeArea, se puede usar de la siguiente manera:
    <View style={{ ...styles.globalMargin, marginTop: insets.top }}>
      <Text>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
};

export default Settings;

