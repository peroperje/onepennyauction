/**
 * Created by petar on 2/5/17.
 */

import React,{Component} from 'react';


class Cuser extends Component {

    render (){
        const {currentUser} = this.props;
        return (
            <div>
                <span className="navbar-text">
                    <i className="fa fa-user-circle-o"></i> {currentUser.username}
                </span>
                <span className="navbar-text"> | </span>
                <span className="navbar-text">
                    <i className="fa fa-usd"></i>{currentUser.account}
                </span>
            </div>
        );
    }
}

export default Cuser;