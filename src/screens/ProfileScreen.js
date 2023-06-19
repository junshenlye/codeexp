import { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

import ObjectivesPanel from '../Dashboard/ObjectivesPanel';

const colorDebug = false;

const cardStyle = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
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
        <View style={{ ...rowFlexBoxStyle.item, width: "50%"}}>
                <Image
                    style={{width: 141, height: 280, margin: 10}}
                    source={require('../../assets/skinnyMan.png')}
                />
        </View>
    </View>)
}

export default function ProfileScreen({ navigation }) {

    // Update Navigation Title
    useEffect(() => {
        navigation.setOptions({
            title: 'James',
            headerStyle: {
                backgroundColor: '#92B0FF',
            },
        });
    }, []);

    return (
        <ScrollView style={{ margin: 20 }}>
            <View style={{ paddingHorizontal: 10 }}>
                <StatsAndCharacterPanel />
            </View>
            <View style={{ ...cardStyle.item }}>
                <ObjectivesPanel />
            </View>
            <View style={{ ...cardStyle.item }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Recent Badges</Text>
                <Text> </Text>
                <Text>2 NO</Text>
                <Text>2 NO</Text>
                <Text>2 NO</Text>
                <Text>2 NO</Text>
                <Text>2 NO</Text>
            </View>
        </ScrollView>
    );
};