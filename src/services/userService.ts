import axios from 'axios';
import authHeader from "./authHeader";
import { User, Profile } from "../types";

const API_URL = 'https://conduit.productionready.io/api';

class UserService {
  getCurrentUser = () => {
    return axios.get<User>(`${API_URL}/user`);
  }
  getProfile = (username: string) => {
    return axios.get<Profile>(`${API_URL}/profiles/${username}`
      , { headers: authHeader() })
  }
  // getArticles = () => {
  //
  // }
}

export default new UserService();