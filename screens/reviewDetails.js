import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { globalStyles } from '../styles/style';
import { images } from '../styles/images';
import Card from '../shared/card';

const ReviewDetails = ( {navigation} ) => {
    const rating = navigation.getParam('rating');
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text> { navigation.getParam('title') } </Text>
                <Text> { navigation.getParam('body') } </Text>
                <View style={globalStyles.rating}>
                    <Text> ReviewZone rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    );
};

export default ReviewDetails;