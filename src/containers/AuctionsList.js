/**
 * Created by peroperje on 13.1.17..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Auction from '../components/Auction';
import {makeBid} from '../actions';
import {getRule} from '../selectors/auction'
import {getUserByID} from '../selectors/users'
import {browserHistory} from 'react-router';

class AuctionsList extends Component {


    handleBid(auctionID, increaseRatePrice, increaseRateTime, cUser) {
        if (!cUser) {
            return browserHistory.push('/login');
        }
        const {dispatch} = this.props;
        const lastBidTime = new Date().getTime();
        dispatch(makeBid(auctionID, increaseRatePrice, increaseRateTime, cUser, lastBidTime));
    }

    render() {
        const {auctions, rules, cUser, users} = this.props;
        return (
            <div className="row">
                {
                    auctions.map((auction, i) => {
                        const rule = getRule()(rules, auction.ruleID);
                        const lastBidder = getUserByID()(users, auction.lastBidder)
                        return <Auction
                            key={auction.auctionID}
                            onBid={
                                this.handleBid.bind(
                                    this, auction.auctionID,
                                    rule.increaseRatePrice,
                                    rule.increaseRateTime,
                                    cUser
                                )
                            }
                            auctionID={auction.auctionID}
                            image={auction.image}
                            title={auction.title}
                            regularPrice={auction.regularPrice}
                            totalBids={auction.totalBids}
                            desc={auction.desc}
                            endTime={auction.endTime}
                            increaseRatePrice={rule.increaseRatePrice}
                            increaseRateTime={rule.increaseRateTime}
                            lastBidder={lastBidder ? lastBidder.username : '-'}

                        />
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {auctions, rules, cUser, users} = state;

    return {
        auctions,
        rules,
        cUser,
        users
    }

}

//export default AuctionsList;

export default connect(mapStateToProps)(AuctionsList);

