import React, { Component } from 'react';
import "./Timings.css";
export default class Timings extends Component {
    render() {
        return (
            <section id="timings">
                <div className="card">
                    <div className="card-header">
                        <h3>Timings</h3>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <td>Monday</td>
                                    <td>9:00 AM</td>
                                    <td>9:30 PM</td>
                                </tr>

                                <tr>
                                    <td>Tuesday</td>
                                    <td>9:00 AM</td>
                                    <td>9:30 PM</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>9:00 AM</td>
                                    <td>9:30 PM</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>9:00 AM</td>
                                    <td>9:30 PM</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>9:00 AM</td>
                                    <td>9:30 PM</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>CLOSED</td>
                                    <td>CLOSED</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>CLOSED</td>
                                    <td>CLOSED</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}