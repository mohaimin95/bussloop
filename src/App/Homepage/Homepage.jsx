import React, { Component } from 'react';
import { Navbar } from '../Navbar/Navbar';
import './Homepage.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';
export class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <section id="banner">
                    <div className="banner">
                        <div className="container">
                            <div className="jumbotron banner-jumbotron">
                                <h4 className="tagline">ALL ABOUT BUSINESS</h4>
                                <div className="row">
                                    <div className="col-md-6 d-none d-lg-block d-md-block">
                                        <p className="text-justify">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                        <p>
                                            <button className="btn-primary btn">Learn More&nbsp;<i className="fa fa-chevron-right"></i></button>
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <form className="form-horizontal">
                                            <div className="form-element">
                                                <label>Business Name :</label>
                                                <input type="text" className="form-control" />
                                            </div>

                                            <div className="form-element">
                                                <label>Contact Name :</label>
                                                <input type="text" className="form-control" />
                                            </div>

                                            <div className="form-element">
                                                <label>Contact Email :</label>
                                                <input type="text" className="form-control" />
                                            </div>

                                            <div className="form-element">
                                                <label>Password :</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-element">
                                                <label>Confirm Password :</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="form-element">
                                                <button className="btn btn-primary">Register</button>&nbsp;&nbsp;<span>Already have account ? <Link to="/login">login</Link></span>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                    {/* <section id="main">
                        <div className="container">
                            Hi
                        </div>
                    </section> */}
            </div>
        )
    }
}