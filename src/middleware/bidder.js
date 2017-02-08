/**
 * Created by peroperje on 28.1.17..
 */
import {ADD_BID} from '../constants/AuctionActions';
import {makeBid} from '../actions';

const autoBid = (store,action)=>{
   const { cUser,users} = store.getState();
   const nextBidder = ((users,cUser)=>{
       let usersWitoutCuser = users.filter(u=>u.userID !== cUser);
       let  nextBidder = usersWitoutCuser[Math.floor(Math.random()*usersWitoutCuser.length)];
       return nextBidder;
   })(users,cUser);
    let dellay = (Math.floor(Math.random() * 10) + 1)*1000;
    setTimeout(()=>{
        store.dispatch(
            makeBid(
                action.payload.auctionID,
                action.payload.increaseRatePrice,
                action.payload.increaseRateTime,
                nextBidder.userID
            )
        );
    }, dellay);


}

const bidder = store=> next => action => {

    if(action.type !== ADD_BID){
        return next(action);
    }
    autoBid(store,action);
    return next(action);
}

export default bidder;