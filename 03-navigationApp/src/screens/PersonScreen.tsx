import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../themes/appTheme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigator/StackNavigator';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'PersonScreen'> {
  name: string;
}

const PersonScreen = ({route, navigation}: Props) => {
  const params = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonScreen;
