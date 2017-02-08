/**
 * Created by petar on 2/5/17.
 */
import React, {Component} from 'react';
import { browserHistory } from 'react-router'
import * as routePath from '../constants/Route'
import './Login.css'

class Login extends Component {
    handleClick(e){
        e.preventDefault();
        browserHistory.push(routePath.LOGIN)
    }
    render(){
        return <a href="#" onClick={this.handleClick.bind(this)} className="Login-button btn btn-primary">JOIN NOW AND GET $1000</a>;
    }
}

export default Login;