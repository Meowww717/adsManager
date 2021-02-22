import React from "react";
import "./ads_item.css";

export default class AdsItem extends React.Component {

    render() {
        const {src, id, name, date, status} = this.props;
        const className = status === 'Approved' ? 'hide' : 'ads-item';
        
        return (
            <div className={className}>
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
                    <button onClick={() => {this.props.onApproved(id)}} disabled={status !== 'pending'} type="button" className="btn btn-success">Approve</button>
                    <button onClick={() => {this.props.onRejected(id)}} disabled={status !== 'pending'} type="button" className="btn btn-danger">Reject</button>
                </div>
            </div>
        );
    }
}