/**
 * >> GOOD WAY TO NAME THE ACTION TYPES <<
 * NAME_REQUEST
 * NAME_SUCCESS
 * NAME_FAILURE
 * NAME_CANCEL
 * NAME_RESET
 */

const INITIAL_STATE = {
    users: {
      isLoading: false,
      items: []
    }
  };
  
  const users = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'FETCH_USERS_REQUEST':
        return {
          ...state,
          users: {
            ...state.users,
            isLoading: true
          }
        }
  
      case 'FETCH_USERS_SUCCESS':
        return {
          ...state,
          users: {
            ...state.users,
            isLoading: false,
            items: action.users
          }
        }
  
      case 'FETCH_USERS_FAILURE':
        return {
          ...state,
          users: {
            ...state.users,
            isLoading: false
          }
        }

      case 'ADD_USER_SUCCESS':
        return {
          ...state,
          users: {
            ...state.users,
            items: state.users.items.concat(action.user)
          }
        }
      
      case 'DELETE_USER_SUCCESS':
      return {
        ...state,
        users: {
          ...state.users,
          items: state.users.items.filter(item => item.id !== action.user)
        }
      }
      
      case 'UPDATE_USER_SUCCESS':
      return {
        ...state,
        users: {          
          ...state.users,                    
          items: state.users.items.map((val) => {             
            if(val.id === action.id) {              
              return {
                ...action.user
              }
            }
            return val
          })
        }
      }

      default:
        return state;
    }
  }
  
  export default users;