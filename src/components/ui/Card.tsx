import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {THEME} from '../../styles/theme';

type Props = {
  style?: StyleProp<ViewStyle>;
};
export const Card: React.FC<Props> = ({children, style = {}}) => {
  const rootStyles = StyleSheet.compose<ViewStyle>(styles.root, style);
  return (
    <View style={rootStyles}>
      {children}
    </View>
  );
};


const styles = StyleSheet.create({
  root: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    backgroundColor: THEME.COLORS_WHITE,
    borderRadius: 10,
    elevation: 8,
  }
});
