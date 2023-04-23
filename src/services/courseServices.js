import { toast } from 'react-hot-toast';
import http from '../hooks/useAxios';

export const fetchAllCourses = () => {
  return http
    .get('/courses')
    .then((response) => response.data)
    .catch((error) => {
      toast.error(error?.message);
      throw new Error(error?.message);
    });
};
