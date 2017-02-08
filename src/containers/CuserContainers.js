/**
 * Created by peroperje on 15.1.17..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserByID} from '../selectors/users'
import Cuser from'../components/Cuser'
import Login from '../components/Login';

class CuserContainers extends Component {


    render() {

        const {currentUser} = this.props;
        let cUser =  <Login/>
        if(currentUser){
            cUser = <Cuser currentUser={currentUser}/>
        }
        return cUser;
    }
}

function mapStateToProps(state) {
    const {cUser, users} = state;
    return {
        currentUser : cUser?getUserByID()(users,cUser):null
    }
}

export default connect(mapStateToProps)(CuserContainers);

