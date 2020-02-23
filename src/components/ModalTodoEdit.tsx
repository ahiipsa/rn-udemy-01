import React from 'react';
import {Button, Modal, StyleSheet, TextInput, View} from 'react-native';
import {THEME} from '../styles/theme';

type Props = {
  visible: boolean;
  onCancel: () => void;
};
export const ModalTodoEdit: React.FC<Props> = ({visible, onCancel}) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.wrap}>
        <TextInput style={styles.input} placeholder="Type todo name..." autoCapitalize="none" autoCorrect={false} />
        <View style={styles.buttons}>
          <Button title="Cancel" onPress={onCancel} color={THEME.COLORS_DANGER} />
          <Button title="Save" onPress={() => false} />
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
  },
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
