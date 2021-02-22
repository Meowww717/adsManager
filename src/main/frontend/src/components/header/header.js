import React, { Component } from "react";
import './header.css';

export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    handleLogout() {
        console.log(window.location.search);
        localStorage.clear();
        window.location.href = "/login";
    }

    render() {
        const { approved, rejected } = this.props;
        return (
            <div className="header">
                <div className="statusCount">Approved: {approved} </div>
                <div className="statusCount">Rejected: {rejected} </div>
                {/*<div>Username</div>*/}
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-person" viewBox="0 0 16 16">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    </svg>
                </div>
                <button onClick={this.handleLogout} className="btn btn-outline-secondary" type="button">Log Out</button>
            </div>
        );
    }
}