import { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, Linking } from 'react-native';

import { getArticles } from '../Dashboard/Dashboard';
import { styles } from '../Dashboard/DashboardStyles';

import ObjectivesPanel from '../Dashboard/ObjectivesPanel';


const DashboardScreen = ({ navigation }) => {

  // Update Navigation Title
  useEffect(() => {
    navigation.setOptions({
      title: 'Welcome back, James!',
      headerStyle: {
        backgroundColor: '#92B0FF',
      },
    });
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    getArticles()
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  }, []);

  const handleNewsPress = (url) => {
    Linking.openURL(url);
  };
  return (
    <>
      <View style={{ margin: 20  }}>
        <ScrollView>
          <View style={styles.dashboardcontainer}>
            <View style={styles.cardContainer}>
              <ObjectivesPanel />
            </View>
          </View>
          {Object.keys(data).length > 0 && (
            <View style={styles.container}>
              {data.articles.map((article, index) => (
                <TouchableOpacity key={index} onPress={() => handleNewsPress(article.url)}>
                  <View style={styles.cardContainer}>
                    <Text style={styles.title}>{article.title}</Text>
                    <Image
                      source={{ uri: article.urlToImage }}
                      style={styles.image}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default DashboardScreen;
