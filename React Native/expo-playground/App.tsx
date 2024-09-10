import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fontAwesomeLibreary } from './src/icons/FontAwesomeIcons';
import Banner from './src/screens/Banner';

library.add(...fontAwesomeLibreary);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Banner/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
