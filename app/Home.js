import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Logout from './Logout';


class Home extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.isLoggedin === "false" ? <Login /> : <Logout />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { home } = state;
    return {
        isLoggedin: home.isLoggedin
    }
}

export default connect(mapStateToProps)(Home)