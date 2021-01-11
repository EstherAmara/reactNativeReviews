import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    )
};

export default Card;

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        //how much the element comes off the screen
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20
    }
})