/**
 * Created by peroperje on 16.1.17..
 */
import {ADD_BID} from '../constants/AuctionActions'
const auction = (state, action) => {
    switch (action.type) {
        case ADD_BID :
            let totalBid = Math.round((state.totalBids + action.payload.increaseRatePrice) * 100) / 100;
            let endTime = (state.endTime + action.payload.increaseRateTime * 1000);
            return {
                ...state,
                ...{
                    totalBids: totalBid,
                    endTime: endTime,
                    lastBidder: action.payload.lastBidder,
                    lastBidTime: action.payload.lastBidTime
                }
            };
        default :
            return state;
    }
}

const auctions = (state = [], action) => {
    switch (action.type) {
        case ADD_BID:
            return state.map(a => {
                if (a.auctionID === action.payload.auctionID) {
                    return auction(a, action);
                }
                return a;
            });
        default:
            return state
    }
}

export default auctions;