import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    text: string;
    color?: string;
    wider?: boolean;
    action: ( number: string ) => void;
}

const StyledButton = ({ text, color = '#2D2D2D', wider = false, action }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => action(text)}
        >
            <View style={[
                styles.button,
                {backgroundColor: color},
                {width: (wider) ? 180 : 80}
            ]}>
                <Text style={[
                    styles.buttonText,
                    { color: (color === '#9B9B9B') ? 'black' : 'white' }
                ]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300',
    },
});

export default StyledButton;
