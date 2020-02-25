import config from '../config';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

export const createTodo = ({title}: {title: string}) => {
  return fetch(`${config.apiHost}/todos.json`, {
    method: 'POST',
    headers: {...defaultHeaders},
    body: JSON.stringify({title}),
  }).then((response) => response.json());
};

export const fetchTodoList = () => {
  return fetch(`${config.apiHost}/todos.json`, {
    method: 'GET',
    headers: {...defaultHeaders}
  }).then((response) => response.json());
};

export const updateTodo = ({todo}) => {
  return fetch(`${config.apiHost}/todos/${todo.id}`, {
    method: 'PUT',
    headers: {...defaultHeaders},
    body: JSON.stringify({...todo}),
  });
};
