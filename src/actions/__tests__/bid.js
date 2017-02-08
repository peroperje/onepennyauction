/**
 * Created by peroperje on 16.1.17..
 */
import {ADD_BID} from '../../constants/AuctionActions';
import {bid} from '../bid';


describe('Action Auction',()=>{
    it('should create an action to make a bid',()=>{
        const auctionID = 185;
        const increaseRatePrice = 0.1;
        const increaseRateTime = 15;
        const expectedObject= {
            type : ADD_BID,
            payload : {
                auctionID:auctionID,
                increaseRatePrice:increaseRatePrice,
                increaseRateTime: increaseRateTime
            }
        }
        expect(bid(auctionID,increaseRatePrice,increaseRateTime)).toEqual(expectedObject)
    })
});