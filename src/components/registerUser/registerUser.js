import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userApi from '../../Api/userApi';


class Regestration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: false
        }

        this.userNameInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();

        let userInfo = {
            user_name: this.userNameInput.current.value,
            password: this.passwordInput.current.value
        };

        this.checUser(userInfo);

        this.userNameInput.current.value = "";
        this.passwordInput.current.value = "";
    }

    async checUser(user) {
        let userDb = await userApi.checkUserDb(user);

        let { user_name: regInput, password } = user;
        let { user_name } = userDb;

        if (user_name === regInput) {
            this.setState({ message: "such login exists" });
        } else if (user_name !== regInput && password.length) {
            userApi.createUserApi(user);
            this.setState({ message: "You are successfully registered" });
        } else {
            this.setState({ message: "some problems check your info" });
        }
    }


    render() {
        return (
            <div style={ { marginTop: 10, marginLeft: 10 } }>
                <h3>Registration</h3>
                <form onSubmit={ this.onSubmit }>
                    <div>
                        <label>User Name: </label>
                        <input type="text"
                            ref={ this.userNameInput }>
                        </input>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="text"
                            ref={ this.passwordInput }></input>
                    </div>

                    <div>
                        <input type="submit"
                            value="Register">
                        </input>
                    </div>
                </form>
                <div>{ this.state.message }</div>
            </div>
        )
    }
}

let mapStateToProps = function (store) {
    return {
        user: store.userState.user
    };
};

export default connect(mapStateToProps)(Regestration);