import http from '../hooks/useAxios';
import { handleError } from '../utils/handleError';

export const fetchAllCourses = () => {
  return http
    .get('/courses')
    .then((response) => response.data)
    .catch(handleError);
};

export const fetchCourseWithId = (id) => {
  return http
    .get(`/courses/${id}`)
    .then((response) => response.data)
    .catch(handleError);
};

export const addCourse = (course) => {
  return http
    .post('/courses', course)
    .then((response) => response.data)
    .catch(handleError);
};

export const editCourse = (course) => {
  return http
    .put(`/courses/${course._id}`, course)
    .then((response) => response.data)
    .catch(handleError);
};

export const deleteCourse = (id) => {
  return http
    .delete(`/courses/${id}`)
    .then((response) => response.data)
    .catch(handleError);
};
