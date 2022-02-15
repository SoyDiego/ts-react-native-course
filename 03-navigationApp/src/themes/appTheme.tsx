import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#5856d6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
  },
  bigButton: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 20,
  },
  bigButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
  },

  menuContainer: {
    marginVertical: 50,
    marginHorizontal: 50,
    alignItems: 'center',
  },

  buttonMenu: {
    width: '100%',
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textMenu: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },
});
