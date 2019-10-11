import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="login-comp">
                    <div className="clearfix"></div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12"></div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h4 className="text-center"><Link to="/">Bussloop.io</Link></h4>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Login</h4>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal">
                                        <div className="form-element">
                                            <label>Email</label>
                                            <input type="text" className="form-control" />
                                        </div>

                                        <div className="form-element">
                                            <label>Password</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="form-element">
                                            <input type="checkbox" />&nbsp;Remember Password
                                        </div>

                                        <div className="clearfix"></div>
                                        <div className="form-element">
                                            <button className="btn btn-primary">Login</button>
                                        </div>

                                    </form>
                                </div>
                                <div className="card-footer">
                                    <div className="text-right">
                                        <p>Forgot Password ? <Link to="/">click here</Link></p>
                                        <p>No Account ? <Link to="/"><button className="btn btn-primary">Register</button></Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12"></div>
                    </div>
                </div>
            </div>
        )
    }
}