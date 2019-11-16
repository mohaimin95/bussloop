import React,{Component} from 'react';

export default class Features extends Component {
    render() {
        return (
            <section id="features">
                <div className="card">
                    <div className="card-header">
                        Features
                    </div>
                    <div className="card-body">
                        <div className="row text-center">
                            <div className="col-md-2 col-sm-3 col-xs-4">
                                <i className="fa fa-wifi fa-2x"></i><br/>
                                <small>Wifi</small>
                            </div>
                            <div className="col-md-2 col-sm-3 col-xs-4">
                                <i className="fa fa-automobile fa-2x"></i><br/>
                                <small>Parking</small>
                            </div>
                            <div className="col-md-2 col-sm-3 col-xs-4">
                                <i className="fa fa-ban fa-2x"></i><br/>
                                <small>Smoke Free</small>
                            </div>
                            <div className="col-md-2 col-sm-3 col-xs-4">
                                <i className="fa fa-bolt fa-2x"></i><br/>
                                <small>Backup</small>
                            </div>
                            <div className="col-md-2 col-sm-3 col-xs-4">
                                <i className="fa fa-cog fa-2x"></i><br/>
                                <small>Service</small>
                            </div>
                            <div className="col-md-2 col-sm-3 col-xs-4">
                                <i className="fa fa-credit-card fa-2x"></i><br/>
                                <small>Cards</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}