/**
 * Created by peroperje on 26.1.17..
 */
import {ACCONT_DECREASE,ADD_USER} from  '../constants/UserAction'


const userReducer = (user, action)=> {
    switch (action.type) {
        case ACCONT_DECREASE:
            return {...user, ...{account: (user.account - action.payload.amount).toFixed(2)}};
        default:
            return user;

    }
};

const users = (state = [], action)=> {
    switch (action.type) {
        case ADD_USER:
            return [...state,{
                userID: action.payload.userID,
                username: action.payload.username,
                account:action.payload.account
    }];
        case ACCONT_DECREASE:
            return state.map((user)=> {
                if (user.userID === action.payload.userID) {
                    return userReducer(user, action);
                }
                return user;
            });
        default :
            return state;
        }
};

export default users;