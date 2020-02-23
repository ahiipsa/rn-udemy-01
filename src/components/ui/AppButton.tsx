import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {THEME} from '../../styles/theme';
import {AppText} from './AppText';

type Props = {
  onPress: () => void;
  color?: string;
};
export const AppButton: React.FC<Props> = ({children, onPress, color = THEME.COLORS_MAIN}) => {

  const rootStyles = {
    ...styles.root,
    backgroundColor: color,
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={rootStyles}>
        <AppText bold style={styles.buttonText}>
          {children}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: THEME.COLORS_WHITE,
  }
});
