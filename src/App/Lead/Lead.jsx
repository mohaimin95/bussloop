import React, { Component } from 'react';
import './Lead.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';
export class Lead extends Component {
    render() {
        return (
            <div className="card buss-card">
                <div className="card-title">
                    <span className="buss-name">Thangavilas Maligai <span className="buss-wish"><i className="fa fa-heart buss-like"></i>&nbsp;<i className="fa fa-bookmark buss-bookmark"></i></span></span><br />
                    <span className="buss-location"><i className="fa fa-map-marker"></i>&nbsp;Madukkur, Thanjavur</span>
                    <span className="buss-ratings"><br/>
                        <i className="fa fa-star buss-star"></i>
                        <i className="fa fa-star buss-star"></i>
                        <i className="fa fa-star buss-star"></i>
                        <i className="fa fa-star buss-star"></i>
                        <i className="fa fa-star buss-star"></i>
                    </span><br/>
                    <span>
                        <Link to="/profile"><button className="btn btn-sm btn-default">Explore</button></Link>
                    </span>
                </div>
            </div>
        )
    }
}