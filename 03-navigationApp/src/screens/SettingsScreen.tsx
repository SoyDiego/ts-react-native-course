import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../themes/appTheme';
import {AuthContext} from '../context/AuthContext';

const SettingsScreen = () => {
  const insets = useSafeAreaInsets();
  const {authState} = useContext(AuthContext);
  return (
    <View style={{...styles.globalMargin, marginTop: insets.top}}>
      <Text style={styles.title}>SettingsScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
};

export default SettingsScreen;
