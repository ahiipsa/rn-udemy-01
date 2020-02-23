import React from 'react';
import {View, StyleSheet} from 'react-native';
import {THEME} from '../styles/theme';
import {AppText} from './ui/AppText';


type Props = {title: string};
export const NavBar: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.navbar}>
      <AppText style={styles.text}>{title}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: THEME.COLORS_MAIN,
    paddingBottom: 10
  },
  text: {
    color: THEME.COLORS_WHITE,
    fontSize: 20,
  }
});
