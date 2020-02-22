import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type Props = {
  todo: {
    title: string,
    id: string
  },
  onRemove: (id: string) => void,
}


export const Todo: React.FC<Props> = ({ todo, onRemove }) => {

  const handleRemove = () => {
    onRemove(todo.id);
  };

  return (
    <TouchableOpacity activeOpacity={0.5} onLongPress={handleRemove}>
      <View style={styles.root}>
        <Text style={styles.text}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
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

