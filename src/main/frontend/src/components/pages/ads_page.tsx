import React, { Component } from 'react';
import './ads_page.css';
import Header from "../header/header";
import AdsList from "../ads_list/ads_list";

export default class AdsPage extends Component {

    render() {
        return (
            <>
                <Header/>
                <div className="adsList">
                    <AdsList/>
                </div>
            </>
        );
    }

}