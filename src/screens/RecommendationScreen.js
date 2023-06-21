import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import styles from '../CareerLand/RecommendationStyle'; // Import the styles object from styles.js

const RecommendationScreen = ({ navigation }) => {
  const handleURLPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Description:</Text>
        </View>

        
        <View style={styles.coursecontainer}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleURLPress(item.url)}
              style={styles.itemContainer}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>Next Course Available on:</Text>
              <Text style={styles.courseDate}>{item.courseDate}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const data = [
  {
    image: require('../../assets/courseimage1.jpg'),
    title: 'Course 1',
    courseDate: 'June 1, 2023',
    url: 'https://www.google.com',
  },

  {
    image: require('../../assets/courseimage1.jpg'),
    title: 'Course 1',
    courseDate: 'June 1, 2023',
    url: 'https://www.google.com',
  },

  {
    image: require('../../assets/courseimage1.jpg'),
    title: 'Course 1',
    courseDate: 'June 1, 2023',
    url: 'https://www.google.com',
  },

  {
    image: require('../../assets/courseimage1.jpg'),
    title: 'Course 1',
    courseDate: 'June 1, 2023',
    url: 'https://www.google.com',
  },
];

export default RecommendationScreen;
