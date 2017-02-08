import {bid} from './bid';
import {accountDecrease, addUser,setCuser} from './user'

function makeBid(auctionID, increaseRatePrice, increaseRateTime, userID, lastBidTime) {
    return (dispatch, getState) => {
        dispatch(bid(auctionID, increaseRatePrice, increaseRateTime, userID, lastBidTime));

        dispatch(accountDecrease(userID, increaseRatePrice));
    }
}
const createUser = (username, userID, account) => {
    return (dispatch, getState) => {
        dispatch(addUser(username, userID, account));
        dispatch(setCuser(userID));
    }
}
export {
    makeBid,
    createUser
}