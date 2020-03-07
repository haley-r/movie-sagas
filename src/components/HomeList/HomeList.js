import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeList extends Component {
    //on load, get movies from db
    componentDidMount=()=>{
        this.props.dispatch({ type: "GET_MOVIES" });
    }



    render() {
        return (
            <p>loop through array of GET results to display movies in the database.</p>
        );
    }
}

export default connect()(HomeList);
