/**
 * Created by peroperje on 27.1.17..
 */

import React from 'react';
import {shallow} from 'enzyme'
import sinon from 'sinon'
import Auction from '../Auction'

describe('Test for Auction commponent', ()=> {

    it('Test for auctions Bid button press ', ()=> {
        const bid = sinon.spy();
        const wrapper = shallow(<Auction
            onBid={bid}
            auctionID="sdfsdfsfdss"
            image="sdfsdfsfdss"
            title="sdfsdfsfdss"
            regularPrice={400}
            totalBids={1}
            desc="ddd"
            endTime={new Date().getTime()}
        />);
        wrapper.find('.btn-success').simulate('click', {
            preventDefault() {
            }
        });
        expect(bid.callCount).toEqual(1);
    });

    it('test watch icon',()=>{
        expect(null).toEqual(null);
    });
});