import {StyleSheet, Text, View, ScrollView } from 'react-native';

const colorDebug = true;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    fontSize: 18
  },
  shopCard: {
    margin: '2%',
    aspectRatio: 1,  
    height: '100%',
    width: '44%',
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.02)'
  }
});

const sectionData = [
    { 
      title: 'Hats',
      data: ['Cowboy', 'Crown', 'Drone']
    }, {
        title: 'Earings',
        data: ['Gold Earrings', 'Silver Earrings', 'Bronze Earrings'],
    }, {
        title: 'Shirts',
        data: ['Pollo Shirt', 'Junshen Ugly Winter Vest', 'Fisherman\'s Vest', 'Spring Classic'],
    }, {
        title: 'Pants',
        data: ['Brown Pants', 'Black Pants', 'Boxers', 'Pink Shorts'],
    },
];

const rowFlexBoxStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        width: '100%',
        height: '100%',
        flexWrap: 'wrap'
    }
});

export default function RewardShop() {
    return (
        <ScrollView style={styles.container}>
            {sectionData.map((section) => (<>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              <View style={{...rowFlexBoxStyle.container, padding:10}}>
                {section.data.map((item) => (<View style={styles.shopCard}><Text style={styles.item}>{item}</Text></View>))}
              </View>
            </>))}
        </ScrollView>
    );
}
