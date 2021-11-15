import { Dispatch } from 'redux';
import axios from './../../axiosInstance';

interface SignupData {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const signup = (data: SignupData) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.post('/api/v1/users', data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
};
