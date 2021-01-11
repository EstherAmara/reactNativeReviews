import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/style';
import Card from '../shared/card';

const ReviewDetails = ( {navigation} ) => {
    const pressHandler = () => {
        //can also use navigation.pop() I guess
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text> { navigation.getParam('title') } </Text>
                <Text> { navigation.getParam('body') } </Text>
                <Text> { navigation.getParam('rating') } </Text>
            </Card>
        </View>
    );
};

export default ReviewDetails;