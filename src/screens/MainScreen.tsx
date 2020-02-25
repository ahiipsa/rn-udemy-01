import React, {useCallback, useContext, useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, View, Dimensions} from 'react-native';
import {AppButton} from '../components/ui/AppButton';
import {AppText} from '../components/ui/AppText';
import {Loader} from '../components/ui/Loader';
import {ScreenContext} from '../context/screen/screenContext';
import {TodoContext} from '../context/todo/todoContext';
import {THEME} from '../styles/theme';
import {TTodo} from '../types';
import {AddTodo} from '../components/AddTodo';
import {Todo} from '../components/Todo';

const toItemsPng = require('../../assets/no-items.png');
type Props = {};
export const MainScreen: React.FC<Props> = ({}) => {
  const {todos, addTodo, removeTodoWithAlert, fetchTodoList, loading, error} = useContext(TodoContext);
  const {changeScreen} = useContext(ScreenContext);
  const [deviceWidth, setDeviceWidth] = useState();

  const loadTodos = useCallback(async () => {
    return await fetchTodoList();
  }, []);

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    const update = () => {
      const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
      setDeviceWidth(width);
    };

    Dimensions.addEventListener('change', update);
    return () => {
      Dimensions.removeEventListener('change', update)
    };
  });



  let content = (
    <View style={{width: deviceWidth}}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Todo
            todo={item}
            onRemove={removeTodoWithAlert}
            onTouch={() => changeScreen(item.id)}
          />
          )
        }
      />
    </View>
  );



  if (!todos.length) {
    content = (
      <View style={styles.imageWrap}>
        <Image style={styles.image} source={toItemsPng} />
      </View>
    );
  }

  if (loading) {
    return (<Loader />);
  }

  if (error) {
    return (
      <View style={styles.center}>
        <AppText style={styles.error}>
          {error}
        </AppText>
        <AppButton onPress={loadTodos}>
          Retry
        </AppButton>
      </View>
    );
  }

  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  )
};

const styles = StyleSheet.create({
  imageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: THEME.COLORS_DANGER,
    fontSize: 20,
  }
});
