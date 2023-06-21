import { useEffect } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

import ObjectivesPanel from '../Dashboard/ObjectivesPanel';

const colorDebug = false;

const styles = StyleSheet.create({
    textTitle: {
        color: '#807DC3',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.05)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    coinContainer: {
        flexDirection: 'row',
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
        verticalAlign: 'middle',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 0.4
    },
    coinIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    badgeIcon: {
        width: 75,
        height: 75,
    },
});

const cardStyle = StyleSheet.create({
    item: {
        flex: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 35,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 0.4,
    },
});

const columnFlexBoxStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: colorDebug && "azure",
        width: '100%',
        height: '100%'
    },
    item: {
        backgroundColor: colorDebug && "lightsalmon",
        marginBottom: 10,
    },
});

const rowFlexBoxStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: colorDebug && "khaki",
        width: '100%',
        height: '100%'
    },
    item: {
        backgroundColor: colorDebug && "thistle"
    },
});

function StatsPanel() {
    return (<View style={{ ...columnFlexBoxStyle.container, justifyContent: 'space-evenly', alignItems: 'center', height: 300 }}>
        <View style={columnFlexBoxStyle.item}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Articles Read</Text>
            <Text style={{ textAlign: 'center' }}>90</Text>
        </View>
        <View style={columnFlexBoxStyle.item}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Diary Entries</Text>
            <Text style={{ textAlign: 'center' }}>5</Text>
        </View>
    </View>)
}

function StatsAndCharacterPanel() {
    return (<View style={{ ...rowFlexBoxStyle.container, height: 300 }}>
        <View style={{ ...rowFlexBoxStyle.item, width: "50%" }}>
            <StatsPanel />
        </View>
        <View style={{ ...rowFlexBoxStyle.item, width: "50%" }}>
            <Image
                style={{ width: 141, height: 280, margin: 10 }}
                source={require('../../assets/profile/character.png')}
            />
        </View>
    </View>)
}

export default function ProfileScreen({ navigation }) {

    // Update Navigation Title
    useEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            title: 'James',
            headerTitleStyle: {
                color: '#C97272',
                fontSize: 20,
                fontWeight: 'bold',
                textShadowColor: 'rgba(0, 0, 0, 0.05)',
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10
            },
            headerRight: () => (
                <View style={{ ...styles.coinContainer, marginRight: 20 }}>
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
        <ImageBackground source={require('../../assets/backdrop/profile.png')} resizeMode="cover" style={styles.image}>
            <ScrollView style={{ marginTop: useHeaderHeight(), marginHorizontal: 20 }}>
                <View style={{ paddingHorizontal: 10 }}>
                    <StatsAndCharacterPanel />
                </View>
                <View style={{ ...cardStyle.item }}>
                    <ObjectivesPanel navigation={navigation} headerTitleStyle={styles.textTitle} />
                </View>
                <View style={{ ...cardStyle.item }}>
                    <Text style={{ ...styles.textTitle, textAlign: 'center' }}>Recent Badges</Text>
                    <View style={{paddingTop: 20, ...rowFlexBoxStyle.container}}>
                        <Image
                            style={styles.badgeIcon}
                            source={require('../../assets/badge.png')}
                        />
                        <Image
                            style={styles.badgeIcon}
                            source={require('../../assets/badge.png')}
                        />
                        <Image
                            style={styles.badgeIcon}
                            source={require('../../assets/badge.png')}
                        />
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};