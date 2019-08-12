import {userActionType} from './user.type'
export const setCurrentUser = (user) => {
    return ({
        payload: user,
        type: userActionType.setCurrentUser
    })
}
