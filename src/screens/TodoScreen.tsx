import React, {useContext, useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {AntDesign, FontAwesome} from '@expo/vector-icons';
import {ModalTodoEdit} from '../components/ModalTodoEdit';
import {AppButton} from '../components/ui/AppButton';
import {AppText} from '../components/ui/AppText';
import {Card} from '../components/ui/Card';
import {ScreenContext} from '../context/screen/screenContext';
import {TodoContext} from '../context/todo/todoContext';
import {THEME} from '../styles/theme';
import {TTodo} from '../types';

type Props = {
};
export const TodoScreen: React.FC<Props> = () => {
  const {todos, removeTodoWithAlert, updateTodo} = useContext(TodoContext);
  const {todoId, goToMainScreen} = useContext(ScreenContext);

  const todo = todos.find((item) => item.id === todoId);

  const [modal, setModal] = useState(false);
  const handleTouchGoBack = () => {
    goToMainScreen();
  };

  const handleTouchRemove = () => {
    removeTodoWithAlert(todoId);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleSave = (title) => {
    updateTodo({
      ...todo,
      title,
    });
    setModal(false);
  };

  return (
    <View>
      <ModalTodoEdit
        value={todo.title}
        visible={modal}
        onCancel={handleCloseModal}
        onSave={handleSave}
      />
      <Card style={styles.card}>
        <AppText bold style={styles.title}>{todo.title}</AppText>
        <AppButton onPress={handleOpenModal}>
          <FontAwesome name="edit" size={20} />
        </AppButton>
      </Card>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton color={THEME.COLORS_GRAY} onPress={handleTouchGoBack}>
            <AntDesign name="back" size={20} color={THEME.COLORS_WHITE} />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton color={THEME.COLORS_DANGER} onPress={handleTouchRemove}>
            <FontAwesome name="remove" size={20} color={THEME.COLORS_WHITE} />
          </AppButton>
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
    width: Dimensions.get('window').width / 3,
  },
  title: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
    padding: 10,
  }
});
