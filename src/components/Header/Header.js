import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <h1>SAGA MOVIE DATABASE</h1>
            </header>
        );
    }
}

export default connect()(Header);
