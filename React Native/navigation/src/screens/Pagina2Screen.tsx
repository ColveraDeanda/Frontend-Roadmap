import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

//* Otra forma de navegar entre páginas es usando un hook. Es más recomendable usar navigation desde Prop
const Pagina2Screen = () => {

    const navigator = useNavigation();
    console.log(navigator);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 2 Screen</Text>
            <Button
                title='Ir página 3'
                onPress={() => navigator.navigate('Pagina3Screen')}
            />

        </View>
    )
}

export default Pagina2Screen
