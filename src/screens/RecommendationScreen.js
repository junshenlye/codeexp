import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../CareerLand/RecommendationStyle'; // Import the styles object from styles.js

const RecommendationScreen = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Text>Back</Text>
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




