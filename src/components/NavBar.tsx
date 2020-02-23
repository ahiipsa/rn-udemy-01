import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {THEME} from '../styles/theme';
import {AppText} from './ui/AppText';


type Props = {title: string};
export const NavBar: React.FC<Props> = ({title}) => {

  const rootStyles = {
    ...styles.navbar,
    ...Platform.select({
      android: styles.navBarAndroid,
      ios: styles.navBarIOS,
    })
  }

  return (
    <View style={rootStyles}>
      <AppText style={styles.text}>{title}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10
  },
  navBarAndroid: {
    backgroundColor: THEME.COLORS_MAIN,
    borderBottomColor: null,
    borderBottomWidth: 0,
  },
  navBarIOS: {
    backgroundColor: null,
    borderBottomColor: THEME.COLORS_MAIN,
    borderBottomWidth: 1,
  },
  text: {
    color: Platform.OS === 'ios' ? THEME.COLORS_MAIN : THEME.COLORS_WHITE,
    fontSize: 20,
  }
});
