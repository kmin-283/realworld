import axios, {AxiosResponse} from 'axios';
import { User } from "../types";

const API_URL = 'https://conduit.productionready.io/api';



class AuthService {
  login = (email: string, password: string) => {
    return axios
      .post(`${API_URL}/users/login`, { email, password })
      .then((response: AxiosResponse<User>) => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout = () => {
    localStorage.removeItem('user');
  }

  register = (username: string, email: string, password: string) => {
    return axios
      .post(`${API_URL}/users`, {
        username,
        email,
        password
      });
  }
}

export default new AuthService();