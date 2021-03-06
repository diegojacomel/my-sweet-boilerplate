import { all } from 'redux-saga/effects';
import { userSagas } from '../effects/users/sagas';
import { authorizationSagas } from '../effects/authorization/sagas';

export default function* rootSagas() {

    // here we initialize all the sagas from different files
    yield all([
        ...userSagas,
        ...authorizationSagas
    ]);
}