import {userActionType} from './user.type'
const INIT_STATE = {
    currentUser: null
}
const userReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case (userActionType.setCurrentUser) :{
            return ({
                ...state,
                currentUser: action.payload
            })
        }
        default: {
            return state
        }
    }
}
export default userReducer