/**
 * Created by peroperje on 28.1.17..
 */

import {createSelector} from 'reselect';

const getUsers = (users, userID)=>users;
const getUserID = (users, userID)=>userID;


export const getUserByID = ()=> {
    return createSelector([getUsers, getUserID], (users, userID)=> {
        return users.find(u=>u.userID === userID);
    });
}
