import React from 'react';
import { bindActionCreators } from 'redux';
import { homeActions } from './homeActions';
import { connect } from 'react-redux';

class Logout extends React.Component {
    constructor(props){
        super(props)
    }

    handleClick = () => {
        this.props.isLoggedin('false');
    }

    render() {
        return (
            <div>
              <button type='submit' value = 'submit'
                onClick= {this.handleClick}> Logout </button>
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


export default connect(mapStateToProps, mapDispatchToProps)(Logout)