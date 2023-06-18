import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { styles } from '../CareerLand/CareerLandStyle';
import image from '../../assets/image.png';


const CareerLandScreen = () => {
  return (
      <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    </ImageBackground>
      </View>
  );
};

export default CareerLandScreen;
