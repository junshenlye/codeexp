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
    image: require('../../assets/courses/courseimage1.jpg'),
    title: 'Enhance your influence and impact',
    courseDate: 'June 27, 2023',
    url: 'https://www.myskillsfuture.gov.sg/content/portal/en/training-exchange/course-directory/course-detail.html?courseReferenceNumber=TGS-2022016729',
  },

  {
    image: require('../../assets/courses/courseimage2.jpg'),
    title: 'Bounce Back Fast with Problem Solving',
    courseDate: 'Nov 14, 2023',
    url: 'https://www.myskillsfuture.gov.sg/content/portal/en/training-exchange/course-directory/course-detail.html?courseReferenceNumber=TGS-2023018869',
  },

  {
    image: require('../../assets/courses/courseimage3.jpg'),
    title: 'Lead with Passion',
    courseDate: 'June 27, 2023',
    url: 'https://www.myskillsfuture.gov.sg/content/portal/en/training-exchange/course-directory/course-detail.html?courseReferenceNumber=TGS-2023018454',
  },

  {
    image: require('../../assets/courses/courseimage4.jpg'),
    title: 'Presenting with Influence',
    courseDate: 'June 23, 2023',
    url: 'https://www.myskillsfuture.gov.sg/content/portal/en/training-exchange/course-directory/course-detail.html?courseReferenceNumber=TGS-2023017953',
  },
];

export default RecommendationScreen;
