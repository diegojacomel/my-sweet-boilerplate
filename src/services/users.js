import Api from '../utils/api';

class UsersService {
    static getUsers() {
        return Api.get('/users');
    }

    static postUser(data) {
        return Api.post('/users/', data)
    }
}

export default UsersService;