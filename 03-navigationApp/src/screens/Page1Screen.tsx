import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../navigator/StackNavigator';
import {styles} from '../themes/appTheme';

interface Props extends NativeStackScreenProps<RootStackParamList> {}

const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Go to page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text style={{marginTop: 20, fontSize: 18}}>Navigate with Arguments</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.bigButton, backgroundColor: '#5856d6'}}
          onPress={() => {
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Pedro',
            } as any);
          }}>
          <Text style={styles.bigButtonText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.bigButton, backgroundColor: '#FF9427'}}
          onPress={() => {
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'María',
            } as any);
          }}>
          <Text style={styles.bigButtonText}>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page1Screen;
