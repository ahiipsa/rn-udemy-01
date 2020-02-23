import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, View, Dimensions} from 'react-native';
import {THEME} from '../styles/theme';
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
  const [deviceWidth, setDeviceWidth] = useState(
    );

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
        renderItem={({item}) => <Todo todo={item} onRemove={onRemoveTodo} onTouch={onTouchTodo} />}
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
