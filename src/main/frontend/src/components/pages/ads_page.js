import React, { Component } from 'react';
import './ads_page.css';
import Header from "../header/header";
import AdsList from "../ads_list/ads_list";

export default class AdsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            approved: 0,
            rejected: 0,
            id: 1,
            status: ["pending", "pending", "pending", "pending", "pending", "pending", "pending", "pending", "pending", "pending"]
        }
    }

    onApproved = (id) => {
        console.log(this.state.status);
        const newStatus = this.state.status;
        newStatus[id - 1] = "Approved";
        this.setState((state) => {
            return {
                approved: state.approved + 1,
                id: id,
                status: newStatus
            };
        });
        console.log(this.state.status);
        //let buttons = document.getElementById(this.props.id).querySelectorAll("button");
        // buttons.forEach(el => {
        //     el.setAttribute("disabled", "true");
        // });
    }

    onRejected = (id) => {
        const newStatus = this.state.status;
        newStatus[id - 1] = "Rejected";
        this.setState((state) => {
            return {
                rejected: state.rejected + 1,
                id: id,
                status: newStatus
            };
        });
        console.log(this.state.status);
        // let buttons = document.getElementById(this.props.id).querySelectorAll("button");
        // buttons.forEach(el => {
        //     el.setAttribute("disabled", "true");
        // });
    }


    render() {
        return (
            <>
                <Header approved={this.state.approved} rejected={this.state.rejected} />
                <div className="adsList">
                    <AdsList onApproved={this.onApproved}  onRejected={this.onRejected} status={this.state.status}/>
                </div>
            </>
        );
    }

}