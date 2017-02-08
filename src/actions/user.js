/**
 * Created by peroperje on 16.1.17..
 */
import {ACCONT_DECREASE,ADD_USER} from '../constants/UserAction'
import {SET_CUSER} from '../constants/cUserActions'


export function accountDecrease(userID, amount) {
    return {
        type : ACCONT_DECREASE,
        payload: {
            userID: userID,
            amount: amount
        }
    }
}

/**
 * Add  new users
 * @param username
 * @param userID
 * @param account
 * @returns {{type, payload: {username: *, userID: *, account: *}}}
 */
export function addUser(username,userID,account) {
    return {
        type : ADD_USER,
        payload: {
            username:username,
            userID:userID,
            account:account
        }
    }
}

export function setCuser(userID) {
    return {
        type : SET_CUSER,
        payload: {
            cUser:userID
        }
    }
}
