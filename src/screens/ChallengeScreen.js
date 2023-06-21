import { useState, useEffect } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

import { Bar as ProgressBar } from 'react-native-progress';

import { getStats, updateStats } from '../_Tracking/Stats';

// Updated by Endpoint (This is Template Data)
import ObjectivesArray from '../_Tracking/Goals';

const paddingTopSpacer = 10;

const styles = StyleSheet.create({
    textTitle: {
        color: '#B6A2CD',
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
    container: {
        flex: 1,
    },
    card: {
        flex: 1,
        padding: 10,
        borderRadius: 35,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 0.4,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bigCoinContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        verticalAlign: 'middle',
        alignItems: 'center',
    },
    bigCoinIcon: {
        width: 50,
        height: 50,
        marginRight: 5,
    },
    coinContainer: {
        flexDirection: 'row',
        verticalAlign: 'middle',
        alignItems: 'center',
    },
    coinIcon: {
        width: 20,
        height: 20,
        marginLeft: 1,
    },
    challengeContainer: {
        flexDirection: 'row',
        verticalAlign: 'middle',
        alignItems: 'center',
        width: '100%'
    },
    challengeIcon: {
        width: 50,
        height: 50,
        borderRadius: 15,
        marginRight: 5,
    },
    challengeText: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold'
    }
});

const objectiveStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});

function Objective({ item }) {
    const [statsCount, setStatsCount] = useState(item.default);

    useEffect(() => {
        async function resetGoals() {
            await updateStats(item.name, item.default);
        }
        // resetGoals();

        async function updatePanel() {
            setStatsCount(
                Math.min(await getStats(item.name, item.default), item.max)
            );
        }

        const refreshInterval = setInterval(updatePanel, 500);

        return () => {
            clearInterval(refreshInterval);
        };
    }, [item.default, item.name, statsCount, item.max]);

    const progress = statsCount / item.max;


    const color = progress == 1 ? '#4C5EB7' : '#8590C8';

    return (
        <>
            <View style={objectiveStyle.container}>
                <View style={objectiveStyle.leftContainer}>
                    <Text style={{ paddingTop: paddingTopSpacer, fontWeight: 'bold' }}>{item.fullDetail}</Text>
                </View>
                <View style={objectiveStyle.rightContainer}>
                    <Text style={{ paddingTop: paddingTopSpacer, fontWeight: 'bold' }}>{statsCount}/{item.max}</Text>
                </View>
            </View>
            <View>
                <ProgressBar progress={progress} color={color} width={null} />
            </View>
            <View style={objectiveStyle.container}>
                <View style={{...objectiveStyle.rightContainer, flex: 1}}>
                    <View style={styles.coinContainer} >
                        <Text style={{ fontWeight: 'bold' }}>+{item.reward}</Text>
                        <Image
                            style={styles.coinIcon}
                            source={require('../../assets/coin.png')}
                        />
                    </View>
                </View>
            </View>
        </>
    );
}

export default function ChallengeScreen({ navigation }) {
    // Update Navigation Title
    useEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitleStyle: {
                color: '#B6A2CD',
                fontSize: 20,
                fontWeight: 'bold',
                textShadowColor: 'rgba(0, 0, 0, 0.05)',
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10
            }
        });
    }, []);

    return (
        <ImageBackground source={require('../../assets/backdrop/challenge.png')} resizeMode="cover" style={styles.image}>
            <ScrollView style={{ ...styles.container, marginTop: useHeaderHeight() + 20, paddingHorizontal: 20, paddingBottom: 20 }}>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Reward Shop')}>
                    <Text style={{ ...styles.textTitle }}>My Wallet</Text>
                    <View style={{ ...styles.bigCoinContainer, marginRight: 20, paddingTop: 10 }}>
                        <Image
                            style={styles.bigCoinIcon}
                            source={require('../../assets/coin.png')}
                        />
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>100</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ ...styles.card, marginTop: 20 }}>
                    <Text style={{ ...styles.textTitle }}>Daily Goals</Text>
                    <View style={{ width: '100%', paddingHorizontal: 20, paddingBottom: 10 }}>
                        {ObjectivesArray.map((objectiveItem) => (
                            <View key={objectiveItem.name}>
                                <Objective item={objectiveItem} />
                            </View>
                        ))}
                    </View>
                </View>
                <Text style={{ ...styles.textTitle, textAlign: 'center', marginVertical: 20 }}>Challenges</Text>
                <View style={{ ...styles.card, marginBottom: 20 }}>
                    <View style={styles.challengeContainer}>
                        <Image
                            style={styles.challengeIcon}
                            source={require('../../assets/challenge/threat.png')}
                        />
                        <Text style={styles.challengeText}>Explore Career Threat Intelligence</Text>
                    </View>
                </View>
                <View style={{ ...styles.card, marginBottom: 20  }}>
                    <View style={styles.challengeContainer}>
                        <Image
                            style={styles.challengeIcon}
                            source={require('../../assets/challenge/zerotrust.png')}
                        />
                        <Text style={styles.challengeText}>Check out “Zero Trust Security Strategy” by Dr. Zhao</Text>
                    </View>
                </View>
                <View style={{ ...styles.card }}>
                    <View style={styles.challengeContainer}>
                        <Image
                            style={styles.challengeIcon}
                            source={require('../../assets/challenge/diary.png')}
                        />
                        <Text style={styles.challengeText}>Write a Diary about “Dangers of Cyber Attacks”</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}
