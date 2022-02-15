import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from '../themes/appTheme';
import Tabs from './Tabs';

const LateralMenu = () => {
  const Drawer = createDrawerNavigator();

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
      drawerContent={props => <InternalMenu {...props} />}
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const InternalMenu = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar place */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Options Menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.textMenu}>Navigation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.textMenu}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default LateralMenu;
