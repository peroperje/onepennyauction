/**
 * Created by peroperje on 13.1.17..
 */
import {combineReducers} from 'redux'
import auctions from './auctions';
import users from './users';
import cUser from './cuser'



const rules = (state = [], action)=> {
    return state;
}



const rootReducer = combineReducers({
    auctions,
    rules,
    users,
    cUser
});

export default rootReducer