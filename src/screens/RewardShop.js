import { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        flex: 1,
    },
    sectionHeader: {
        color: '#8590C8',
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,0.2)',
    },
    item: {
        fontSize: 18
    },
    shopCard: {
        margin: '2%',
        aspectRatio: 1,
        height: '100%',
        width: '44%',
        borderRadius: 35,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: 0.4,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    shopIcon: {
        maxHeight: 110,
        maxWidth: 110
    },
    coinContainer: {
        flexDirection: 'row',
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
        verticalAlign: 'middle',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: 0.4
    },
    coinIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    }
});

const sectionData = [
    {
        title: 'Background Items',
        data: [
            {
                name: 'Drone',
                price: 1100,
                icon: require('../../assets/shop/drone.png')
            }, {
                name: 'Boombox',
                price: 600,
                icon: require('../../assets/shop/boombox.png')
            }
        ]
    }, {
        title: 'Hand',
        data: [
            {
                name: 'Handphone',
                price: 550,
                icon: require('../../assets/shop/phone.png')
            }
        ],
    }, {
        title: 'Clothing',
        data: [
            {
                name: 'Hat',
                price: 200,
                icon: require('../../assets/shop/hat.png')
            }, {
                name: 'Blue Shirt',
                price: 150,
                icon: require('../../assets/shop/shirt.png')
            }, {
                name: 'Blue Shoe',
                price: 150,
                icon: require('../../assets/shop/shoe.png')
            }
        ],
    }
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

export default function RewardShop({ navigation }) {
    // Update Navigation Title
    useEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerRight: () => (
                <View style={{...styles.coinContainer, marginRight: 20}}>
                    <Image
                        style={styles.coinIcon}
                        source={require('../../assets/coin.png')}
                    />
                    <Text
                        style={{
                            fontWeight: 'bold',
                        }}>
                        100
                    </Text>
                </View>
            )
        });
    }, []);

    return (
        <ImageBackground source={require('../../assets/backdrop/shop.png')} resizeMode="cover" style={styles.image}>
            <ScrollView style={{ ...styles.container, marginTop: useHeaderHeight() }}>
                {sectionData.map((section) => (<View key={section.title}>
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                    <View style={{ ...rowFlexBoxStyle.container, padding: 10 }}>
                        {section.data.map((item) => (
                            <TouchableOpacity key={item.name} style={styles.shopCard}>
                                <Image style={styles.shopIcon} source={item.icon} />
                                <View style={styles.coinContainer}>
                                    <Image
                                        style={styles.coinIcon}
                                        source={require('../../assets/coin.png')}
                                    />
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                        }}>
                                        {item.price}
                                    </Text>
                                </View>
                            </TouchableOpacity>))}
                    </View>
                </View>))}
            </ScrollView>
        </ImageBackground>
    );
}
