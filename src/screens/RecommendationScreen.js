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
          <Text style={styles.title}>Description:</Text>
          <Text style={styles.text}>As an accountancy and audit manager at CCS, your role is to manage clients effectively by identifying new ideas and business solutions for their needs.</Text>
          <Text></Text>
          <Text style={styles.text}>You also focus on expanding and retaining the client base through innovative approaches. By fostering strong relationships, providing excellent service, and staying updated with industry trends, you contribute to the growth and success of the firm.</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Key Pointers:</Text>
            <View style={styles.container2}>
        <Text style={styles.text2}>
          <Text style={styles.bullet}>&#8226; </Text>
          <Text style={styles.tabText}>Identify new ideas and business solutions to existing clients</Text>{'\n\n'}
        </Text>
        <Text style={styles.text2}>
          <Text style={styles.bullet}>&#8226; </Text>
          <Text style={styles.tabText}>Identify new ways to expand and retain client base</Text>{'\n\n'}
        </Text>
        <Text style={styles.text2}>
          <Text style={styles.bullet}>&#8226; </Text>
          <Text style={styles.tabText}>Manage client expectations and project timelines</Text>{'\n\n'}
        </Text>
        <Text style={styles.text2}>
          <Text style={styles.bullet}>&#8226; </Text>
          <Text style={styles.tabText}>Support and develop trusted business adviser relationships</Text>{'\n\n'}
        </Text>
    </View>
        </View>
        <View style={styles.recommendationcontainer}>
          <Text style={styles.recommendation}>Course Recommendation</Text>
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
