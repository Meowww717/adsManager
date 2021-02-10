import React, { Component } from 'react';
import AdsItem from "../ads_item/ads_item";
import APIService from "../../services/APIService";

export default class AdsList extends Component {
    // @ts-ignore
    constructor(props) {
        super(props);

        this.state = {
            ads: []
        }
    }

    componentDidMount(){
        APIService.getAds().then((resp) => {
            this.setState({ ads: resp.data.ads })
            // @ts-ignore
            console.log(this.state.ads);
        })
            .catch(function (ex) {
                console.log('Response parsing failed. Error: ', ex);
            });
    }

    render() {
        // @ts-ignore
        const ads = this.state.ads.map(el => {
            // @ts-ignore
            return <AdsItem key={el.id} id={el.id} name={el.name} date={el.date} src={el.image}/>;
        });
        return ads;
    }
}