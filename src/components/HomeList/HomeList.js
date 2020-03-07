import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeList extends Component {
    render() {
        return (
            <p>home list will go here</p>
        );
    }
}

export default connect()(HomeList);
