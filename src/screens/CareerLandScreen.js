import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { styles } from '../CareerLand/CareerLandStyle';
import image from '../../assets/image.png';
import image1 from '../../assets/image1.png';

const checkpoints = [
  { id: 1, image: image1, heading: 'Client Management', top: 80, left: 43 },
  { id: 2, image: image1, heading: 'Team Engagement', top: 80, left: 78 },
  { id: 3, image: image1, heading: 'Assurance', top: -125, left: -20 }
]; // Example checkpoints

const CareerLandScreen = ({ navigation }) => {
  const renderCheckpoints = () => {
    const handleCheckpointPress = (checkpoint) => { 
      navigation.navigate('Recommendations');
      // Code to handle checkpoint press
      console.log(`Checkpoint ${checkpoint} pressed!`);
    };

    return checkpoints.map((checkpoint) => (
      <TouchableOpacity
        key={checkpoint.id}
        style={[
          styles.checkpoint,
          { top: checkpoint.top, left: checkpoint.left }
        ]}
        onPress={() => handleCheckpointPress(checkpoint.id)}
      >
        <Text style={styles.checkpointHeading}>{checkpoint.heading}</Text>
        <Image source={checkpoint.image} style={styles.checkpointImage} />
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
