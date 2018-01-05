import Api from '../utils/api';

class UsersService {
    static getUsers() {
        return Api.get('/users');
    }

    static postUser(data) {
        return Api.post('/users/', data)
    }

    static updateUser(id, data) {
        return Api.put(`/users/${id}`, data)
    }

    static deleteUser(id){
        return Api.delete(`/users/${id}`)
    }
}

export default UsersService;