import { toast } from 'react-hot-toast';
import http from '../hooks/useAxios';

export const fetchAllModules = () => {
  return http
    .get('/modules')
    .then((response) => response.data)
    .catch((error) => {
      toast.error(error?.response?.data?.message);
      throw new Error(error?.response?.data?.message);
    });
};

export const addModule = (module) => {
  return http
    .post('/modules', module)
    .then((response) => response.data)
    .catch((error) => {
      toast.error(error?.response?.data?.message);
      throw new Error(error?.response?.data?.message);
    });
};

export const editModule = (module) => {
  return http
    .put(`/modules/${module._id}`, module)
    .then((response) => response.data)
    .catch((error) => {
      toast.error(error?.response?.data?.message);
      throw new Error(error?.response?.data?.message);
    });
};

export const deleteModule = (id) => {
  return http
    .delete(`/modules/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      toast.error(error?.response?.data?.message);
      throw new Error(error?.response?.data?.message);
    });
};
