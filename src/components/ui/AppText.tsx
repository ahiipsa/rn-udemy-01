import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

type Props = {
  bold?: boolean;
  style: StyleProp<TextStyle>;
};
export const AppText: React.FC<Props> = ({style, bold = false, children}) => {
  const mainStyle = bold ? styles.bold : styles.default;
  const rootStyles = StyleSheet.compose<TextStyle>(mainStyle, style);
  return (
    <Text style={rootStyles} >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-regular',
  },
  bold: {
    fontFamily: 'roboto-bold',
  }
});
