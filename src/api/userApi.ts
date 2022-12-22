import type { AutReqType } from '../types/UserType';
import api from './api';

const createUserPath = '/api/login/sing-up';
const logInUserPath = '/api/login/sing-in';
const currentUserPath = '/api/auth/user/me';

// const fetchTodos = (filter = FilterTodoENUM.ACTIVE) => {
//   return api.get<TodoType[]>(todosPath, { params: { filter } });
// };

const createUser = (email: string, password: string) => {
  return api.post<AutReqType>(createUserPath, { email, password });
};

const logInUser = (email: string, password: string) => {
  return api.post<AutReqType>(logInUserPath, { email, password });
};

const currentUser = () => {
  return api.get<AutReqType>(currentUserPath);
};

// const updateTodo = (_id: number, fields: Omit<TodoType, '_id'>) => {
// eslint-disable-next-line max-len
//   return api.patch<TodoType>(`${todosPath}/${_id}`, { title: fields.title, completed: fields.completed });
// };

// const deleteTodo = (_id: number) => {
//   return api.delete<TodoType>(`${todosPath}/${_id}`);
// };

export default {
  createUser, logInUser, currentUser,
};
