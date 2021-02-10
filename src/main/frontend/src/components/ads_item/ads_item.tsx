import React from "react";
import "./ads_item.css";

export default class AdsItem extends React.Component {

    // @ts-ignore
    constructor(props) {
        super(props);

        this.state = {
            status: "pending"
        }
    }

    onApproved = () => {
        this.setState({status: "approved"});
        // @ts-ignore
        let buttons = document.getElementById(this.props.id).querySelectorAll("button");
        buttons.forEach(el => {
            el.setAttribute("disabled", "true");
        });
    }

    onRejected = () => {
        this.setState({status: "rejected"});
        // @ts-ignore
        let buttons = document.getElementById(this.props.id).querySelectorAll("button");
        buttons.forEach(el => {
            el.setAttribute("disabled", "true");
        });
    }

    // @ts-ignore
    render() {
        // @ts-ignore
        const {src, id, name, date} = this.props;
        // @ts-ignore
        const status = this.state.status;
        return (
            <div className="ads-item">
                <img src={src.toString()} className="img-fluid" alt="ads-image" />
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-6">
                            Id
                        </div>
                        <div className="col-6">
                            {id}
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-6">
                            Name
                        </div>
                        <div className="col-6">
                            {name}
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-6">
                            Date
                        </div>
                        <div className="col-6">
                            {date}
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-6">
                            Status
                        </div>
                        <div className="col-6">
                            {status}
                        </div>
                    </div>
                </div>
                <div id={id} className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button onClick={this.onApproved} type="button" className="btn btn-success">Approve</button>
                    <button onClick={this.onRejected} type="button" className="btn btn-danger">Reject</button>
                </div>
            </div>
        );
    }
}