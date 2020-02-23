import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {LayoutMain} from './src/components/LayoutMain';
import {TodoState} from './src/context/todo/TodoState';
import {THEME} from './src/styles/theme';

async function loadApplication() {
  return await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })
}

const defaultTodoList = [
  {id: '1', title: 'Learn React Native'},
  {id: '2', title: 'Create Application'},
];

export default function App() {
  const [isAppReady, setAppReady] = useState(false);

  if (!isAppReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.log(err)}
        onFinish={() => setAppReady(true)}
      />
    )
  }

  return (
    <TodoState>
      <LayoutMain />
    </TodoState>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 10,
  },
  text: {
  }
});
