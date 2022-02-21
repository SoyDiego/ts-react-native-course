import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../themes/appTheme';

const AlbumsScreens = () => {
  const {
    authState: {isLoggedIn},
    signOut,
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumsScreen</Text>
      {isLoggedIn && <Button title="Sign Out" onPress={signOut} />}
    </View>
  );
};

export default AlbumsScreens;
