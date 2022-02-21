import {View, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {styles} from '../themes/appTheme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigator/StackNavigator';
import {AuthContext} from '../context/AuthContext';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'PersonScreen'> {
  name: string;
}

const PersonScreen = ({route, navigation}: Props) => {
  const {changeUserName} = useContext(AuthContext);
  const params = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params]);

  useEffect(() => {
    changeUserName(params.name);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonScreen;
