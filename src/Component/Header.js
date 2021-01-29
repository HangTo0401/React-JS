import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="display-3 text-center">Admin dashboard</h1>
                <p className="lead">Jumbo helper text</p>
                <hr className="my-2" />
            </div>
        );
    }
}

export default Header;