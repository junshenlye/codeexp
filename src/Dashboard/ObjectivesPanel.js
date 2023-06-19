import { Text, StyleSheet, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const colorDebug = false;
const paddingTopSpacer = 10;

// Updated by Endpoint (This is Template Data)
const ObjectivesArray = [{
    name: "Touch Grass",
    current: 2,
    max: 4,
}, {
    name: "Read Articles",
    current: 1,
    max: 3,
}, {
    name: "Diary Entry",
    current: 1,
    max: 1,
}]

const ObjectiveStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: colorDebug && "#7CA1B4",
    },
    item: {
        backgroundColor: colorDebug && "#7cb48f",
    },
});

function Objective({ item }) {
    const fill = Math.round((item.current / item.max) * 100);
    return (
        <>
            <View style={ObjectiveStyle.container}>
                <View style={ObjectiveStyle.item}>
                    <AnimatedCircularProgress
                        // Todo Size based on Screen Size
                        size={65}
                        width={8}
                        fill={fill % 25 == 0 ? fill - 1 : fill} // Bug spacing of 25 will not have a flat linecap on one of the ends
                        tintColor="#3399FF"
                        backgroundColor="#999"
                        rotation={fill % 25 == 0 ? 1 : 0}
                        lineCap="round"
                        fillLineCap="round"
                        duration={2000}
                        >
                        {
                            () => (
                                <Text style={{fontWeight: 'bold'}}>{item.current}/{item.max}</Text>
                            )
                        }
                    </AnimatedCircularProgress>
                </View>
                <View style={ObjectiveStyle.item}>
                    <Text style={{ paddingTop: paddingTopSpacer }}>{item.name}</Text>
                </View>
            </View>
        </>
    );

}

const PanelTitleStyle = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colorDebug && 'blue',
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: colorDebug && 'green'
    },
    centerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colorDebug && 'yellow'
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: colorDebug && 'red',
    }
});

const PanelStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: colorDebug && "pink"
    },
    item: {
        backgroundColor: colorDebug && "yellow",
    },
});

export default function ObjectivesPanel() {
    return (
        <>
            {/* Objective Panel Title and Money */}
            <>
                <View style={PanelTitleStyle.titleContainer}>
                    <View style={PanelTitleStyle.leftContainer}>
                        {/* Left empty for alignment */}
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}>My Daily Progress</Text>
                    </View>
                    <View style={PanelTitleStyle.rightContainer}>
                        <Text>100 Points</Text>
                    </View>
                </View>
            </>
            <View style={{ paddingTop: paddingTopSpacer }} />
            {/* Objective List */}
            <>
                <View style={PanelStyle.container}>
                    {ObjectivesArray.map((objectiveItem) => (
                        <View key={objectiveItem.name} style={PanelStyle.item}>
                            <Objective item={objectiveItem} />
                        </View>
                    ))}
                </View>
            </>
        </>
    );
};