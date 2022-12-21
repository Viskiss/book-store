import type { AutReqType } from '../models/UserType';
import api from './api';

const createUserPath = '/api/login/sing-up';

// const fetchTodos = (filter = FilterTodoENUM.ACTIVE) => {
//   return api.get<TodoType[]>(todosPath, { params: { filter } });
// };

const createUser = (email: string, password: string) => {
  return api.post<AutReqType>(createUserPath, { email, password });
};

// const updateTodo = (_id: number, fields: Omit<TodoType, '_id'>) => {
// eslint-disable-next-line max-len
//   return api.patch<TodoType>(`${todosPath}/${_id}`, { title: fields.title, completed: fields.completed });
// };

// const deleteTodo = (_id: number) => {
//   return api.delete<TodoType>(`${todosPath}/${_id}`);
// };

export default {
  createUser,
};
