import React, {useCallback, useState} from 'react';
import {View, StyleSheet, TextInput, Keyboard, Alert} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {THEME} from '../styles/theme';

type Props = {
  onSubmit: (title: string) => void,
}


export const AddTodo: React.FC<Props> = ({ onSubmit }) => {

  const [value, setValue] = useState();

  const handleOnPress = useCallback(() => {
    if (!value) {
      Alert.alert('Todo can\'t be empty');
      return;
    }

    onSubmit(value);
    setValue('');
    Keyboard.dismiss();
  }, [value]);

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Type todo name..."
        autoCorrect={false}
        autoCapitalize="none"
      />
      <AntDesign.Button onPress={handleOnPress} name="pluscircleo">
        Add
      </AntDesign.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '60%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.COLORS_MAIN,
    padding: 10
  }
});

