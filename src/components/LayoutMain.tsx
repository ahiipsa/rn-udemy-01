import {AppLoading} from 'expo';
import React, {useContext, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {ScreenContext} from '../context/screen/screenContext';
import {TodoContext} from '../context/todo/todoContext';
import {MainScreen} from '../screens/MainScreen';
import {TodoScreen} from '../screens/TodoScreen';
import {THEME} from '../styles/theme';
import {NavBar} from './NavBar';

type Props = {};
export const LayoutMain: React.FC<Props> = () => {
  const {todoId} = useContext(ScreenContext);

  return (
    <View style={styles.root}>
      <NavBar title="Todo App" />
      <View style={styles.container}>
        {todoId ? <TodoScreen/> : <MainScreen />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 10,
  },
});
