import { createDrawerNavigator } from '@react-navigation/drawer';

import NewScreen from '../screens/NewScreen';
import LoginScreen from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();

function NavigationDrawer() {
    return (
        <Drawer.Navigator useLegacyImplementation>
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="News" component={NewScreen} />
        </Drawer.Navigator>
    );
}

export default NavigationDrawer;