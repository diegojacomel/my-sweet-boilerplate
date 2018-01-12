import { FETCH_USERS, ADD_USER, UPDATE_USER, DELETE_USER } from '../types/constants';

const INITIAL_STATE = {
    users: {
      isLoading: false,
      items: []
    }
  };
  
  const users = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_USERS.REQUEST:
        return {
          ...state,
          users: {
            ...state.users,
            isLoading: true
          }
        }
  
      case FETCH_USERS.SUCCESS:
        return {
          ...state,
          users: {
            ...state.users,
            isLoading: false,
            items: action.users
          }
        }
  
      case FETCH_USERS.FAILURE:
        return {
          ...state,
          users: {
            ...state.users,
            isLoading: false
          }
        }

      case ADD_USER.SUCCESS:
        return {
          ...state,
          users: {
            ...state.users,
            items: state.users.items.concat(action.user)
          }
        }
      
      case DELETE_USER.SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          items: state.users.items.filter(item => item.id !== action.user)
        }
      }
      
      case UPDATE_USER.SUCCESS:
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