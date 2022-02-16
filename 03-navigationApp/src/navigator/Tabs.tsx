import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import StackNavigator from './StackNavigator';
import {colors} from '../themes/appTheme';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen
        name="Tab1Screen"
        // options={{
        //   title: 'Tab1',
        //   tabBarIcon: props => <Text style={{color: props.color}}>asdf</Text>,
        // }}
        options={{title: 'Tab1', tabBarIcon: () => <Text>T1</Text>}}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={Tab2Screen}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{title: 'Tab3'}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
