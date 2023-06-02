import { toast } from 'react-hot-toast';

export const handleError = (error) => {
  toast.error(
    error?.response?.data?.message ?? error?.message ?? 'INTERNAL SERVER ERROR'
  );
  throw new Error(error?.response?.data?.message);
};
