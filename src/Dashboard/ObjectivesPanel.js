import { useState, useEffect } from 'react';

import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { getStats, updateStats } from '../_Tracking/Stats';

// Updated by Endpoint (This is Template Data)
import ObjectivesArray from '../_Tracking/Goals';

const colorDebug = false;
const paddingTopSpacer = 10;


const ObjectiveStyle = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		backgroundColor: colorDebug && '#7CA1B4',
		width: '100%',
		height: '100%',
	},
	item: {
		backgroundColor: colorDebug && '#7cb48f',
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

	const fill = Math.round((statsCount / item.max) * 100);

	const tintColor = fill == 100 ? '#4C5EB7' : '#8590C8';
	return (
		<>
			<View style={ObjectiveStyle.container}>
				<View style={ObjectiveStyle.item}>
					<AnimatedCircularProgress
						// Todo Size based on Screen Size
						size={65}
						width={8}
						fill={fill % 25 == 0 ? fill - 1 : fill} // Bug spacing of 25 will not have a flat linecap on one of the ends
						tintColor={tintColor}
						backgroundColor="#C2CAF2"
						rotation={fill % 25 == 0 ? 1 : 0}
						lineCap="round"
						fillLineCap="round"
						duration={2000}>
						{() => (
							<Text style={{ fontWeight: 'bold' }}>
								{statsCount}/{item.max}
							</Text>
						)}
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
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colorDebug && 'blue',
	},
	leftContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		backgroundColor: colorDebug && 'green',
	},
	centerContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: colorDebug && 'yellow',
	},
	rightContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		verticalAlign: 'middle',
		backgroundColor: colorDebug && 'red',
	},
	coinContainer: {
		flexDirection: 'row',
		borderRadius: 25,
		paddingHorizontal: 10,
		paddingVertical: 5,
		verticalAlign: 'middle',
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: '#ECECEC',
	},
	coinIcon: {
		width: 20,
		height: 20,
		marginRight: 5,
	},
});

const PanelStyle = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		flexDirection: 'row',
		backgroundColor: colorDebug && 'pink',
	},
	item: {
		backgroundColor: colorDebug && 'yellow',
	},
});

export default function ObjectivesPanel({ navigation, showBalance = false, headerTitleStyle }) {
	return (
		<View style={{ width: '100%', height: '100%', paddingHorizontal: 10 }}>
			{/* Objective Panel Title and Money */}
			<>
				<View style={PanelTitleStyle.titleContainer}>
					<View style={PanelTitleStyle.leftContainer}>
						{/* Left empty for alignment */}
					</View>
					<View>
						<Text
							style={{
								fontSize: 16,
								...headerTitleStyle,
								fontWeight: 'bold',
							}}>
							Daily Goals
						</Text>
					</View>
					{showBalance &&
						(<View style={PanelTitleStyle.rightContainer}>
							<TouchableOpacity
								style={PanelTitleStyle.coinContainer}
								onPress={() => navigation.navigate('Reward Shop')}>
								<Image
									style={PanelTitleStyle.coinIcon}
									source={require('../../assets/coin.png')}
								/>
								<Text style={{ fontWeight: 'bold' }}>100</Text>
							</TouchableOpacity>
						</View>) ||
						(<View style={PanelTitleStyle.rightContainer}>
							{/* Left empty for alignment */}
						</View>)
					}
				</View>
			</>
			<View style={{ paddingTop: paddingTopSpacer }} />
			{/* Objective List */}
			<>
				<TouchableOpacity style={PanelStyle.container} onPress={() => navigation.navigate('Challenges')}>
					{ObjectivesArray.map((objectiveItem) => (
						<View key={objectiveItem.name} style={PanelStyle.item}>
							<Objective item={objectiveItem} />
						</View>
					))}
				</TouchableOpacity>
			</>
		</View>
	);
}
