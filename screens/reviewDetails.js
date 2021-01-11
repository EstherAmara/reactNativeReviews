import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/style';

const ReviewDetails = ( {navigation} ) => {
    const pressHandler = () => {
        //can also use navigation.pop() I guess
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Text> { navigation.getParam('title') } </Text>
            <Text> { navigation.getParam('body') } </Text>
            <Text> { navigation.getParam('rating') } </Text>
        </View>
    );
};

export default ReviewDetails;