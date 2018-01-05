import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import usersReducer from './users'
import authorizationReducer from './authorization'

// all the reducers in one place
const rootReducers = combineReducers({
    users: usersReducer,
    authorization: authorizationReducer,
    form: formReducer
})

export default rootReducers