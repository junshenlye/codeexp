import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import { Card } from "react-native-paper";

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
      <View>
        {Object.keys(data).length > 0 && (
          <ScrollView>
            <View style={styles.dashboardcontainer}>
              <View style={styles.cardContainer}>
                <ObjectivesPanel />
              </View>
            </View>
            <View style={styles.container}>
              {data.articles.map((article, index) => (
                <Card key={index}>
                  <TouchableOpacity onPress={() => handleNewsPress(article.url)}>
                    <View style={styles.cardContainer}>
                      <Text style={styles.title}>{article.title}</Text>
                      <Image
                        source={{ uri: article.urlToImage }}
                        style={styles.image}
                      />
                    </View>
                  </TouchableOpacity>
                </Card>
              ))}
            </View>
            <View style={styles.bottomBar}></View>
          </ScrollView>
        )}
      </View>
    </>
  );
};

export default DashboardScreen;
