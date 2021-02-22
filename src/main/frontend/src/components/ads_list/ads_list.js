import React, { Component } from 'react';
import AdsItem from "../ads_item/ads_item";
import APIService from "../../services/APIService";

export default class AdsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ads: [],
            status: this.props.status
        }
    }

    componentDidMount(){
        this.setState({ ads: APIService.getAds()})
    }

    render() {
        const ads = this.state.ads.map(el => {
            return <AdsItem onApproved={this.props.onApproved}  onRejected={this.props.onRejected} key={el.id} id={el.id} name={el.name} date={el.date} src={el.image} status={this.state.status[el.id - 1]}/>;
        });
        return ads;
    }
}