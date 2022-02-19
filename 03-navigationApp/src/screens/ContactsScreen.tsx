import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../themes/appTheme';

const ContactsScreen = () => {
  const {
    authState: {isLoggedIn},
    signIn,
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactsScreen</Text>
      {!isLoggedIn && <Button title="Sign In" onPress={signIn} />}
    </View>
  );
};

export default ContactsScreen;
