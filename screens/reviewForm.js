import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from '../styles/style';
import { Formik } from 'formik';
import * as yup from 'yup';
import Flat from '../shared/flatButton';

const ReviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(10),
    rating: yup.string().required().test('checkRating', 'Rating must be a number between 1 and 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
});

const ReviewForm = ({ addReview }) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title: '', body: '', rating: ''}}
                validationSchema={ ReviewSchema }
                onSubmit = {(values, actions) => {
                    //removes values from the form
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            //this brings out the error message once you leave the input field
                            onBlur = { props.handleBlur('title') }
                        />
                        <Text style={ globalStyles.errorText }> { props.touched.title && props.errors.title} </Text>

                        <TextInput
                            multiline
                            minHeight={100}
                            style={globalStyles.input}
                            placeholder='Review Description'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur = { props.handleBlur('body') }
                        />
                        <Text style={ globalStyles.errorText }> { props.touched.body && props.errors.body} </Text>

                        <TextInput
                            keyboardType='numeric'
                            style={globalStyles.input}
                            placeholder='Review Rating (1 - 5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            onBlur = { props.handleBlur('rating') }
                        />
                        <Text style={ globalStyles.errorText }> { props.touched.rating && props.errors.rating} </Text>

                        {/* <FlatButton text='submit' onPress = { props.handleSubmit } /> */}
                        <Flat text='Submit' onPress = { props.handleSubmit } />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm;