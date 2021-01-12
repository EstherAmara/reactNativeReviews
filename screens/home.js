import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/style';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';
import ReviewDetails from './reviewDetails';

const Home = ({ navigation }) => {
    // const pressHandler = () => {
    //     //you can also use navigation.push() also. ReviewDetails from route/homeStack
    //     navigation.navigate('ReviewDetails');
    // }

    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta catch them all (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not so "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' }
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews(( currentReviews ) =>  {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    };

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
                    <View style={globalStyles.modalContainer}>
                        <MaterialIcons 
                            name='close'
                            size={24}
                            style={{...globalStyles.matIcon, marginTop: 20, marginBottom: 0}}
                            onPress = { () => setModalOpen(false) }
                        />

                        <ReviewForm addReview = { addReview }/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons 
                name='add'
                size={24}
                style={globalStyles.matIcon}
                onPress = { () => setModalOpen(true) }
            />

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
