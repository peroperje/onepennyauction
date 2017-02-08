/**
 * Created by peroperje on 13.1.17..
 */

import React, {Component} from 'react';
import  moment from 'moment';
import logo from '../logo.svg';
import './Auction.css'


class Auction extends Component {
    /**
     * Auction constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            duration: moment.duration(this.props.endTime),
            bidEffect: 0
        }
    }

    /**
     *
     */
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    /**
     *
     */
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    /**
     *
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        if (nextProps.endTime !== this.props.endTime) {
            this.setState((prevState, props) => {
                return {
                    duration: prevState.duration.add(props.increaseRateTime, 'seconds'),
                    bidEffect: 1
                }
            });
            setTimeout(() => {
                this.setState({
                    bidEffect: 0
                });
            }, 150);
        }
    }

    /**
     *
     */
    tick() {
        this.setState((prevState, props) => ({
            duration: prevState.duration.subtract(1, 'seconds')
        }));
    }

    /**
     *
     * @param auctionID
     */
    handleBid(e) {
        e.preventDefault();
        this.props.onBid();
    }

    render() {
        return (
            <div className="col-sm-3">
                <div
                    className={"Auction card card-inverse card-warning mb-3 text-center" + (this.state.bidEffect ? ' bidEffect' : '')}>
                    <h4 className="card-header text-left">
                        <img src={logo} className="Auction-logo float-left" alt="logo"/>
                        {this.state.duration.days()}d {this.state.duration.hours()}h:
                        {this.state.duration.minutes()}m:
                        {this.state.duration.seconds()}s

                    </h4>
                    <div className="imageHolder">
                        <img className="card-img-top img-fluid" src={this.props.image} alt="Some products"/>
                    </div>
                    <div className="card-block">
                        <h4 className="card-title">{this.props.title}</h4>
                        <h5 className="card-subtitle mb-2 text-muted">
                            Regular price ${this.props.regularPrice}
                        </h5>
                        <h5 className="card-subtitle mb-2 text-muted">
                            Bided price ${this.props.totalBids}
                        </h5>
                        <h5 className="card-subtitle mb-2 text-muted">
                            by {this.props.lastBidder}
                        </h5>

                        <h5>
                            <span className="badge badge-pill badge-info">
                                <i>Bid :</i>
                                <i className="fa fa-usd"></i>
                                <i>{this.props.increaseRatePrice}</i>
                                <i> | </i>
                                 <i className="fa fa-clock-o"></i>
                                <i> {this.props.increaseRateTime} sec. </i>
                            </span>
                        </h5>


                        {/*<p className="card-text">{this.props.desc}</p>*/}

                        <a href="#"
                           onClick={this.handleBid.bind(this)}
                           className="btn btn-success btn-block">BID</a>
                    </div>
                </div>
            </div>
        );
    }
}

Auction.propTypes = {
    onBid: React.PropTypes.func.isRequired,
    auctionID: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    regularPrice: React.PropTypes.number.isRequired,
    totalBids: React.PropTypes.number.isRequired,
    desc: React.PropTypes.string,
    endTime: React.PropTypes.number.isRequired


}

export default Auction;