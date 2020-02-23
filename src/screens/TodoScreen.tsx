import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {ModalTodoEdit} from '../components/ModalTodoEdit';
import {Card} from '../components/ui/Card';
import {THEME} from '../styles/theme';
import {TTodo} from '../types';

type Props = {
  todo: TTodo;
  goBack: () => void;
  onRemove: (id: string) => void;
};
export const TodoScreen: React.FC<Props> = ({todo, goBack, onRemove}) => {

  const [modal, setModal] = useState(false);
  const handleTouchGoBack = () => {
    goBack();
  };

  const handleTouchRemove = () => {
    onRemove(todo.id);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenModal = () => {
    setModal(true);
  };

  return (
    <View>
      <ModalTodoEdit visible={modal} onCancel={handleCloseModal} />
      <Card style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Edit" onPress={handleOpenModal} />
      </Card>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Back" color={THEME.COLORS_GRAY} onPress={handleTouchGoBack} />
        </View>
        <View style={styles.button}>
          <Button title="Remove" color={THEME.COLORS_DANGER} onPress={handleTouchRemove} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%'
  },
  title: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
    padding: 10,
  }
});
