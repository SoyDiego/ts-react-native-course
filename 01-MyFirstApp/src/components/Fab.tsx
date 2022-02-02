import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

interface FabProps {
  title: string;
  onPress: () => void;
  position?: 'bl' | 'br';
}

const Fab = ({title, position = 'br', onPress}: FabProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.fabLocation,
        position === 'br' ? styles.right : styles.left,
      ]}
      onPress={onPress}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Fab;

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabLocation: {
    position: 'absolute',
    bottom: 30,
  },
  left: {
    left: 30,
  },
  right: {
    right: 30,
  },

  fabText: {
    fontSize: 30,
    color: '#fff',
    alignSelf: 'center',
  },
});
