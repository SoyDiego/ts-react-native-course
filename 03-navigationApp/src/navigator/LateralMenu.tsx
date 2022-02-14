import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import {Image, useWindowDimensions, View} from 'react-native';
import {styles} from '../themes/appTheme';

const LateralMenu = () => {
  const Drawer = createDrawerNavigator();

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="StackNavigator"
      drawerContent={props => <InternalMenu {...props} />}
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const InternalMenu = (
  props: DrawerContentComponentProps<{}>,
): React.ReactElement => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default LateralMenu;
