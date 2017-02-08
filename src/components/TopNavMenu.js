/**
 * Created by petar on 2/6/17.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import Cuser from '../containers/CuserContainers'

class TopNavMenu extends Component {

    render(){
        let navCssClass=`navbar navbar-toggleable-md navbar-inverse bg-inverse ${this.props.hideHeader?'fixed-top':''}`;
        return (
            <nav className={navCssClass}>
                <button className="navbar-toggler navbar-toggler-right" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">

                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <Cuser/>
                </div>
            </nav>
        );
    }
}

export default TopNavMenu;