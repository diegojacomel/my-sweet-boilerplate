import { FETCH_MENU_USER } from '../types/constants';

const INITIAL_STATE = {
    menu: {
        isLoading: false,
        menu: []
    }
};

const auth = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MENU_USER.SUCCESS:
            return {
                ...state,
                menu: {
                    ...state.menu,
                    isLoading: true,
                    menu: action.menu
                }
            }
        default:
            return state;
    }
}

export default auth;