/**
 * >> GOOD WAY TO NAME THE ACTION TYPES <<
 * NAME_REQUEST
 * NAME_SUCCESS
 * NAME_FAILURE
 * NAME_CANCEL
 * NAME_RESET
 */

const INITIAL_STATE = {
    auth: {
        isLoading: false,
        menu: []
    }
  };
  
  const auth = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'FETCH_MENU_USER':
        return {
          ...state,
          users: {
            ...state.menu,
            isLoading: true
          }
        }   
      default:
        return state;
    }
  }
  
  export default auth;