import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../CareerLand/RecommendationStyle'; // Import the styles object from styles.js
import image from '../../assets/back.png';
import { ScrollView } from 'react-native-gesture-handler';

const RecommendationScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentContainer}>
                    <Text style={styles.text}>Description:</Text>
                </View>
            </ScrollView>
        </View>
    );
};

// const data = [
//     {
//         image: require('./path/to/image1.jpg'),
//         title: 'Course 1',
//         courseDate: 'June 1, 2023',
//         url: 'https://example.com/course1',
//     },
//     {
//         image: require('./path/to/image2.jpg'),
//         title: 'Course 2',
//         courseDate: 'June 15, 2023',
//         url: 'https://example.com/course2',
//     },
// ];

export default RecommendationScreen;
