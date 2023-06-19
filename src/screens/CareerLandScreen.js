import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { styles } from '../CareerLand/CareerLandStyle';
import image from '../../assets/image.png';
import { handleCheckpointPress } from '../CareerLand/CareerLand';
import image1 from '../../assets/image1.png';

const CareerLandScreen = () => {
  const renderCheckpoints = () => {
    const checkpoints = [
      { id: 1, image: image1, heading: 'Checkpoint 1' },
      { id: 2, image: image1, heading: 'Checkpoint 2' },
      { id: 3, image: image1, heading: 'Checkpoint 3' }
    ]; // Example checkpoints

    return checkpoints.map((checkpoint) => (
      <TouchableOpacity
        key={checkpoint.id}
        style={styles.checkpoint}
        onPress={() => handleCheckpointPress(checkpoint.id)}
      >
        <Image source={checkpoint.image} style={styles.checkpointImage} />
        <Text style={styles.checkpointHeading}>{checkpoint.heading}</Text>
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
