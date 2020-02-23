import React, {useState} from 'react';
import {Alert, Button, Modal, StyleSheet, TextInput, View} from 'react-native';
import {THEME} from '../styles/theme';
import {AppButton} from './ui/AppButton';

type Props = {
  visible: boolean;
  onCancel: () => void;
  value: string;
  onSave: (title: string) => void;
};
export const ModalTodoEdit: React.FC<Props> = ({visible, onCancel, value, onSave}) => {
  const [title, setTitle] = useState(value);

  const handleSave = () => {
    if (title.trim().length < 3) {
      Alert.alert('Error', 'Minimum 3 characters');
      return;
    }

    onSave(title);
  };

  const cancelHandler = () => {
    setTitle(value);
    onCancel();
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder="Type todo name..."
          autoCapitalize="none"
          value={title}
          onChangeText={setTitle}
          autoCorrect={false}
        />
        <View style={styles.buttons}>
          <AppButton onPress={cancelHandler} color={THEME.COLORS_DANGER}>
            Cancel
          </AppButton>
          <AppButton onPress={handleSave}>
            Save
          </AppButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.COLORS_MAIN,
    borderBottomWidth: 2,
    width: '80%',
    fontSize: 18,
    color: 'black',
  },
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
