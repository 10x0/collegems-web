import http from '../hooks/useAxios';
import { handleError } from '../utils/handleError';

export const sendApplication = (data) => {
  return http
    .post('/applications', data)
    .then((response) => response.data)
    .catch(handleError);
};
