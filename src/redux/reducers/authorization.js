/**
 * >> GOOD WAY TO NAME THE ACTION TYPES <<
 * NAME_REQUEST
 * NAME_SUCCESS
 * NAME_FAILURE
 * NAME_CANCEL
 * NAME_RESET
 */

const INITIAL_STATE = {
    menu: {
        isLoading: false,
        menu: []
    }
};

const auth = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_MENU_USER_SUCCESS':
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