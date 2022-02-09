import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../themes/appTheme';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigator/StackNavigator';

const Page2Screen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    navigation.setOptions({
      title: 'Hello from Page 2',
      headerBackTitle: 'Go back!',
    });
  }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2Screen</Text>
      <Button
        title="Go to page 3"
        onPress={() => navigation.navigate('Page3Screen')}
      />
    </View>
  );
};

export default Page2Screen;
