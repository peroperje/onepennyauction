/**
 * Created by peroperje on 15.1.17..
 */
/**
 * Created by peroperje on 13.1.17..
 */
import {ADD_BID} from '../constants/AuctionActions';

export function bid(auctionID,increaseRatePrice,increaseRateTime,userID,lastBidTime) {
    return {
        type: ADD_BID,
        payload : {
            auctionID:auctionID,
            increaseRatePrice:increaseRatePrice,
            increaseRateTime: increaseRateTime,
            lastBidder : userID,
            lastBidTime:lastBidTime
        }
    }
}


