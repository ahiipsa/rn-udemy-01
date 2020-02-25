import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {THEME} from '../../styles/theme';

type Props = {};
export const Loader: React.FC<Props> = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator size="large" color={THEME.COLORS_MAIN} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
