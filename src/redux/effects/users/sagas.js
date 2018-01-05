import { call, put, takeEvery } from 'redux-saga/effects';
import UsersService from '../../../services/users';

function* deleteUser(action) {
    try {
        const { user } = action.payload;
        
       yield put({ type: "DELETE_USER_SUCCESS", user: user.id })

    } catch (e) {
        yield put({ type: "DELETE_USER_FAILURE", message: e.message })
    }
}

function* updateUser(action) {
    try {
        const { user } = action.payload;
        const myUser = yield call(UsersService.updateUser, user.id, user);

        yield put({ type: "UPDATE_USER_SUCCESS", user: myUser.data, id: myUser.data.id })

    } catch (e) {
        yield put({ type: "UPDATE_USER_FAILURE", message: e.message })
    }
}


function* addUser(action) {
    try {
        const { user } = action.payload;
        const myUser = yield call(UsersService.postUser, user);
        
        yield put({ type: "ADD_USER_SUCCESS", user: myUser.data })
    } catch (e) {
        yield put({ type: "ADD_USER_FAILURE", message: e.message })
    }
}

function* fetchUsers(action) {
    try {
        const users = yield call(UsersService.getUsers);
        
        yield put({ type: "FETCH_USERS_SUCCESS", users: users.data });
    } catch (e) {
        yield put({ type: "FETCH_USERS_FAILURE", message: e.message });
    }
}

// here we can pass an array of sagas to export to the rootSagas
export const userSagas = [
    takeEvery("FETCH_USERS_REQUEST", fetchUsers),
    takeEvery("ADD_USER_REQUEST", addUser),
    takeEvery("DELETE_USER_REQUEST", deleteUser),
    takeEvery("UPDATE_USER_REQUEST", updateUser)
];