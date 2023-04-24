import http from '../hooks/useAxios';
import { handleError } from '../utils/handleError';

export const sendApplication = (data) => {
  return http
    .post('/applications', data)
    .then((response) => response.data)
    .catch(handleError);
};

export const deleteApplication = (id) => {
  return http
    .delete(`/applications/${id}`)
    .then((response) => response.data)
    .catch(handleError);
};

export const fetchAllApplications = () => {
  return http
    .get('/applications')
    .then((response) => response.data)
    .catch(handleError);
};
