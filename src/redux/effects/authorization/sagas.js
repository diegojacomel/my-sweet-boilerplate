import { call, put, takeEvery } from 'redux-saga/effects';
import AuthorizationService from '../../../services/authorization';

function* fetchMenu(action) {
    try {
        const menu = yield call(AuthorizationService.getMenu);
        
        yield put({ type: "FETCH_MENU_SUCCESS", menu: menu.data });
    } catch (e) {
        yield put({ type: "FETCH_MENU_FAILURE", message: e.message });
    }
}

// here we can pass an array of sagas to export to the rootSagas
export const authorizationSagas = [
    takeEvery("FETCH_MENU_USER", fetchMenu)
];