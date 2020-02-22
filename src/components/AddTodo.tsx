import React, {useCallback, useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

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
      <Button title="Add" onPress={handleOnPress} />
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
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
    padding: 10
  }
});

