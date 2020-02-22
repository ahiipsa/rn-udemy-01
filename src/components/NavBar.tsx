import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {THEME} from '../styles/theme';


type Props = {title: string};
export const NavBar: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
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
