import Api from './index';

export class AuthService {
  async me() {
    return await Api.get('me');
  }

  async login(user) {
    return await Api.post('login', user);
  }

  meTemp() {
    return Api.get('me');
  }
}

const authService = new AuthService();

export default authService;