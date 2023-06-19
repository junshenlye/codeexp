import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RecommendationScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Header */}
      <View style={{ padding: 16 }}>
        <TouchableOpacity onPress={handleBackPress}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the new screen!</Text>
      </View>
    </View>
  );
};

export default RecommendationScreen;
