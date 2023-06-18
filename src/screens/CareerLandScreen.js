import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { styles } from '../CareerLand/CareerLandStyle';
import image from '../../assets/image.png';

const CareerLandScreen = () => {
  const handleCheckpointPress = (checkpoint) => {
    // Code to handle checkpoint press
    console.log(`Checkpoint ${checkpoint} pressed!`);
  };

  const renderCheckpoints = () => {
    const checkpoints = [1, 2, 3]; // Example checkpoints

    return checkpoints.map((checkpoint) => (
      <View key={checkpoint} style={styles.checkpoint}>
        <Text style={styles.checkpointText}>{checkpoint}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay} />
        <View style={styles.content}>
          <View style={styles.checkpointContainer}>{renderCheckpoints()}</View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CareerLandScreen;
