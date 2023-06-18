import { View, Text, Linking } from 'react-native';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import NewScreen from '../screens/NewScreen';
import LoginScreen from '../screens/LoginScreen';
import CareerLandScreen from '../screens/CareerLandScreen';

const DrawerTabs = [{
  name: "News Feed",
  component: NewScreen
},
{
  name: "Career Land",
  component: CareerLandScreen
},
{
  name: "Diary",
  component: LoginScreen
},
{
  name: "Profile",
  component: LoginScreen
},
{
  name: "Reward Shop",
  component: LoginScreen
}]

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Text style={{ textAlign: "center", fontWeight:"bold", textDecorationLine: 'underline', padding: 25 }}>
        Navigation Menu
      </Text>
      <DrawerItemList {...props} />
      <DrawerItem
      label=''
      icon={({ focused, color, size }) => (<View style={{ width: '100%' }}><Text style={{ textAlign: 'center', fontWeight:"bold", padding: 25 }}>Logout</Text></View>)}
        onPress={() => Linking.openURL('https://www.google.com/')}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function NavigationDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#FFFFFFF8',
          overlayColor: 'transparent'
        },
        headerTitleAlign: 'center',
      }}
      useLegacyImplementation>
      {DrawerTabs.map((screen) => (<Drawer.Screen name={screen.name} key={screen} options={{
        drawerLabel: '',
        drawerIcon: ({ focused, color, size }) => (<View style={{ width: '100%' }}><Text style={{ color, textAlign: 'center' }}>{screen.name}</Text></View>)
      }} component={screen.component} />))}
    </Drawer.Navigator>
  );
}

export default NavigationDrawer;