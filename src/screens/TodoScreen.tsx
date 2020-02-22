import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Card} from '../components/ui/Card';
import {THEME} from '../styles/theme';
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
      <Card style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
      </Card>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Back" color={THEME.COLORS_GRAY} onPress={handleTouchGoBack} />
        </View>
        <View style={styles.button}>
          <Button title="Remove" color={THEME.COLORS_DANGER} onPress={handleTouchGoBack} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%'
  },
  title: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
    padding: 10,
  }
});
