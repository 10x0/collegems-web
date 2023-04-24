import http from '../hooks/useAxios';
import { handleError } from '../utils/handleError';

export const fetchAllModules = () => {
  return http
    .get('/modules')
    .then((response) => response.data)
    .catch(handleError);
};

export const addModule = (module) => {
  return http
    .post('/modules', module)
    .then((response) => response.data)
    .catch(handleError);
};

export const editModule = (module) => {
  return http
    .put(`/modules/${module._id}`, module)
    .then((response) => response.data)
    .catch(handleError);
};

export const deleteModule = (id) => {
  return http
    .delete(`/modules/${id}`)
    .then((response) => response.data)
    .catch(handleError);
};
