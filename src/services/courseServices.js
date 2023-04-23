import { toast } from 'react-hot-toast';
import http from '../hooks/useAxios';

export const fetchAllCourses = () => {
  return http
    .get('/courses')
    .then((response) => response.data)
    .catch((error) => {
      toast.error(error?.response?.data?.message);
      throw new Error(error?.response?.data?.message);
    });
};

export const addCourse = (course) => {
  return http
    .post('/courses', course)
    .then((response) => response.data)
    .catch((error) => {
      toast.error(error?.response?.data?.message);
      throw new Error(error?.response?.data?.message);
    });
};

export const editCourse = (course) => {
  return http
    .put(`/courses/${course._id}`, course)
    .then((response) => response.data)
    .catch((error) => {
      toast.error(error?.response?.data?.message);
      throw new Error(error?.response?.data?.message);
    });
};

export const deleteCourse = (id) => {
  return http
    .delete(`/courses/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      toast.error(error?.response?.data?.message);
      throw new Error(error?.response?.data?.message);
    });
};
