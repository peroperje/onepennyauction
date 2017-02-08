/**
 * Created by peroperje on 16.1.17..
 */

import auctions from '../auctions'
import {bid} from '../../actions/bid'


describe('Auction reducer',()=>{
    it('test non_exist action type',()=>{
        expect(auctions([],{
            type :'NON_EXIST'
        })).toEqual([]);
    });

    it('Test auctions state are not exist ',()=>{
        let action = bid(15,0.1,15);

        expect(auctions([],action)).toEqual([]);
    });

    /*it('Test add bid ',()=>{

        const oldState = [{
            auctionID:15,
            totalBids:0,
            lastBidder:0,
            endTime: 0

        }];

        let action = bid(15,0.1,15);

        const nextState = [{
            auctionID:15,
            totalBids:0.1,
            lastBidder:0,
            endTime: 15000

        }];
        expect(auctions(oldState,action)).toEqual(nextState);
    });*/
});