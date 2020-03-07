import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
    render() {
        return (
            <p>footer will go here</p>
        );
    }
}

export default connect()(Footer);
