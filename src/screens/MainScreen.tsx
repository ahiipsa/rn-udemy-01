import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {TTodo} from '../types';
import {AddTodo} from '../components/AddTodo';
import {Todo} from '../components/Todo';

const toItemsPng = require('../../assets/no-items.png');
type Props = {
  todos: TTodo[];
  addTodo: (title: string) => void;
  onRemoveTodo: (id: string) => void;
  onTouchTodo: (id: string) => void;
}
export const MainScreen: React.FC<Props> = ({addTodo, todos, onRemoveTodo, onTouchTodo}) => {
  let content = (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Todo todo={item} onRemove={onRemoveTodo} onTouch={onTouchTodo} />}
    />
  );

  if (!todos.length) {
    content = (
      <View style={styles.imageWrap}>
        <Image style={styles.image} source={toItemsPng} />
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
  }
});
