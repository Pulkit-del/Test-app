import React from 'react';
import { bindActionCreators } from 'redux';
import { homeActions } from './homeActions';
import { connect } from 'react-redux';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    }

    handleClick = () => {
        this.props.isLoggedin('true');
    }

    handleChangeUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }


    render() {
        return (
            <div>
                <label>User Name:</label>
               <input type='text'
                onChange={this.handleChangeUserName} 
                value={this.state.userName} />
                <br />
                <label>Password:</label>
                <input type='text'
                onChange={this.handleChangePassword} 
                value={this.state.password} />
                <br />
                <button type='submit' value = 'submit'
                onClick= {this.handleClick}> Login </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(homeActions, dispatch)
const mapStateToProps = (state) => {
    let { home } = state;
    return {
        isLoggedin: home.isLoggedin
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)