import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {THEME} from '../styles/theme';
import {TTodo} from '../types';
import {AppText} from './ui/AppText';

type Props = {
  todo: TTodo;
  onRemove: (id: string) => void;
  onTouch: (id: string) => void;
}

export const Todo: React.FC<Props> = ({ todo, onRemove, onTouch }) => {

  const handleRemove = () => {
    onRemove(todo.id);
  };

  const handleTouch = () => {
    onTouch(todo.id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handleTouch}
      onLongPress={handleRemove}
    >
      <View style={styles.root}>
        <AppText style={styles.text}>{todo.title}</AppText>
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
    borderColor: THEME.COLORS_GRAY,
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  }
});

