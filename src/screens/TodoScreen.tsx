import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TTodo} from '../types';

type Props = {
  todo: TTodo;
  goBack: () => void;
};
export const TodoScreen: React.FC<Props> = ({todo, goBack}) => {
  const handleTouchGoBack = () => {
    goBack();
  };

  return (
    <View>
      <Text>{todo.title}</Text>
      <Button title="Back" onPress={handleTouchGoBack} />
    </View>
  );
};

const styles = StyleSheet.create({});
