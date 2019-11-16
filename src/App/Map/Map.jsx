import React, { Component } from 'react';
import "./Map.css";

export default class Map extends Component {
    render() {
        return (
            <section id="map">
                <div className="card">
                    <div className="card-header">
                        <h3>Map Location</h3>
                    </div>
                    <div className="card-body">
                        <div className="profile-map" className="row">
                            <iframe width="100%" height="350" frameborder="0" style={{ border: 0 }}
                                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJl68-vSZVVToRNafgSZjwIUA&key=AIzaSyArCExdBiR2Xxvsj6jhwuw1BxGsG1Tt6p0" allowfullscreen></iframe>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}