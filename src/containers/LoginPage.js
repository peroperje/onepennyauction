/**
 * Created by petar on 2/5/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import uuid from 'uuid/v1'
import {createUser} from '../actions'
import * as routePath from '../constants/Route'

class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            hasError: false
        }

        if(this.props.cUser){
            browserHistory.push(routePath.HOME);
        }

    }

    handleOnchange(e) {
        this.setState({
            username: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const {users, login} = this.props;
        const username = this.state.username;
        let isExist = users.find(u => u.username === username);
        if (isExist) {
            this.setState({
                hasError: true
            });
            return;
        }

        login(username, uuid(), 1000);
        browserHistory.push('/');
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col">
                        <br />
                        <h1>JOIN NOW AND GET $1000</h1>
                        <br />
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className={!this.state.hasError ? "form-group row " : "form-group row has-danger"}>
                                <label className="col-4 col-form-label">Choose username</label>
                                <div className="col">
                                    <input
                                        className={!this.state.hasError ? "form-control " : "form-control form-control-danger"}
                                        type="text"
                                        onChange={this.handleOnchange.bind(this)}
                                        value={this.state.username}
                                    />
                                    {!this.state.hasError ||
                                    <div class="form-control-feedback">Sorry, that username's taken. Try another?</div>}
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-4"></div>
                                <div className="col">
                                    <button type="submit" className="btn btn-primary btn-block">JOIN NOW</button>
                                </div>
                                <div className="col-4"></div>
                            </div>

                        </form>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        );
    }
}
const mapStateTProps = (state) => {
    const {users,cUser} = state;
    return {
        users,
        cUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, userID, account) => {
            dispatch(createUser(username, userID, account));
        }
    }
}
export default connect(mapStateTProps, mapDispatchToProps)(LoginPage);