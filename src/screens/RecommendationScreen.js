import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../CareerLand/RecommendationStyle'; // Import the styles object from styles.js
import image from '../../assets/back.png';

const RecommendationScreen = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Image source={image}/>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.text}>This is the new screen!</Text>
      </View>
    </View>
  );
};

export default RecommendationScreen;




