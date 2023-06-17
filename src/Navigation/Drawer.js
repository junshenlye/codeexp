import { View, Text } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import NewScreen from '../screens/NewScreen';
import LoginScreen from '../screens/LoginScreen';

const DrawerTabs = [{
  name: "News",
  component: NewScreen
},
{
  name: "Login",
  component: LoginScreen
}]

const Drawer = createDrawerNavigator();

function NavigationDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#FFFFFFF8',
          overlayColor: 'transparent'
        },
        headerTitleAlign: 'center',
      }}
      useLegacyImplementation>
      {DrawerTabs.map((screen) => (<Drawer.Screen name={screen.name} key={screen} options={{
        drawerIcon: ({ focused, color, size }) => (<View style={{ width: '100%' }}><Text style={{ color, textAlign: 'center' }}>{screen.name}</Text></View>)
      }} component={screen.component} />))}
    </Drawer.Navigator>
  );
}

export default NavigationDrawer;