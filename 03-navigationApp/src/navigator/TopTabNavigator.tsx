import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatsScreen from '../screens/ChatsScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreens from '../screens/AlbumsScreens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../themes/appTheme';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          //en ios es shadowColor:"transparent"
          elevation: 0,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chats':
              iconName = 'Ch';
              break;

            case 'Contacts':
              iconName = 'Co';
              break;

            case 'Albums':
              iconName = 'Al';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreens} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
