import React, { Component } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import ProfileAbout from '../Profile-about/ProfileAbout'
import './Profile.css'
import Timings from '../Timings/Timings';
import Features from '../Features/Features';
import Map from '../Map/Map';
export class Profile extends Component {
    render() {
        return (
            <section id="profile">
                <Navbar />
                <div className="container">
                    <div className="buss-profile">
                        <div className="card buss-card">
                            <div className="card-body">
                                <span className="buss-name">Thangavilas Maligai <span className="buss-wish"><i className="fa fa-heart buss-like"></i>&nbsp;<i className="fa fa-bookmark buss-bookmark"></i></span></span><br />
                                <span className="buss-location"><i className="fa fa-map-marker"></i>&nbsp;Madukkur, Thanjavur</span>
                                <span className="buss-ratings"><br />
                                    <i className="fa fa-star buss-star"></i>
                                    <i className="fa fa-star buss-star"></i>
                                    <i className="fa fa-star buss-star"></i>
                                    <i className="fa fa-star buss-star"></i>
                                    <i className="fa fa-star buss-star"></i>
                                </span><br />
                                <span className="buss-description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </span>
                                <hr />
                                <div className="clearfix"></div>
                                <div className="row">
                                    <div className="col">
                                        <Map />
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="row">
                                    <div className="col-md-5">
                                        <Timings />
                                    </div>
                                    <div className="col-md-7">
                                        <ProfileAbout />
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="row">
                                    <div className="col">
                                    <Features/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}