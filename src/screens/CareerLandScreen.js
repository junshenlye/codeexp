import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from '../CareerLand/CareerLandStyle';
import image from '../../assets/image.png';

const CareerLandScreen = () => {
  const handleCheckpointPress = (checkpoint) => {
    console.log(`Checkpoint ${checkpoint} pressed!`);
  };

  const renderCheckpoints = () => {
    const checkpoints = [1, 2, 3]; // Example checkpoints

    return checkpoints.map((checkpoint) => (
      <TouchableOpacity
        key={checkpoint}
        style={styles.checkpoint}
        onPress={() => handleCheckpointPress(checkpoint)}
      >
        <Text style={styles.checkpointText}>{checkpoint}</Text>
      </TouchableOpacity>
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
