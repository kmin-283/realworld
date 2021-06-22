import { User } from "../types";

const authHeader: () => HeadersInit = () => {
  const user: User = JSON.parse(localStorage.getItem('user') || '{ token: "" }');

  if (user && user.token) {
    return { 'Authorization' : 'Bearer ' + user.token };
  }
  return {'Authorization' : ''};
}

export default authHeader;