import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/style';
import Card from '../shared/card';

const Home = ({ navigation }) => {
    // const pressHandler = () => {
    //     //you can also use navigation.push() also. ReviewDetails from route/homeStack
    //     navigation.navigate('ReviewDetails');
    // }

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta catch them all (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not so "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' }
    ])
    return (
        <View style={globalStyles.container}>
            <FlatList 
                data = { reviews }
                renderItem = {({ item }) => (
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('ReviewDetails', item)}
                    >
                        <Card>
                            <Text style={globalStyles.titleText}> { item.title } </Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Home;
