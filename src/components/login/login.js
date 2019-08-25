import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userApi from '../../Api/userApi';
import * as authApi from '../../Api/authApi';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: false
        }
        
        this.userLoginInput = React.createRef();
        this.passwordInput = React.createRef();
    };


    onSubmit = (e) => {
        e.preventDefault();

        let user = {
            user_name: this.userLoginInput.current.value,
            password: this.passwordInput.current.value
        }
        this.checkUser(user);
    }


    async checkUser(user) {
        let userDb = await userApi.checkUserDb(user);

        let { user_name: loginInput, password: passwordInput } = user;
        let { user_name, password } = userDb;

        if (user_name === loginInput && password === passwordInput) {
            this.setState({ message: "successfully" });
            authApi.setAuthApi(userDb);
            userApi.getAllUsers();
            setTimeout(() => {
                this.props.history.push('/projects');
            }, 2000);
        } else {
            this.setState({ message: "wrong login or password" });
        }
    }

    render() {
        return (
            <div style={ { marginTop: 10, marginLeft: 10 } }>
                <h3>LOGIN</h3>
                <form onSubmit={ this.onSubmit }>
                    <div>
                        <label>Login:</label>
                        <input type="text"
                            ref={ this.userLoginInput }>
                        </input>
                    </div>

                    <div>
                        <label>Password:</label>
                        <input type="text"
                            ref={ this.passwordInput }>
                        </input>
                    </div>

                    <div>
                        <input type="submit"
                            value="Login">
                        </input>
                    </div>
                </form>
                <div>
                    { this.state.message  }
                </div>
            </div>
        )
    }
};

let MapStateToProps = function (store) {
    return {
        user: store.authenticationState
    };
};
export default connect(MapStateToProps)(Login);
