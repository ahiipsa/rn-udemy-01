import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  todo: {
    title: string,
    id: string
  }
}


export const Todo: React.FC<Props> = ({ todo }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{todo.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  }
});

