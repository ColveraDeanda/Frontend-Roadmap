import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { DATA } from '../data/items';

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const ItemList = () => {
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ItemList

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#787A91',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});