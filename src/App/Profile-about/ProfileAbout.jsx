import React, { Component } from 'react';
import "./ProfileAbout.css";
export default class ProfileAbout extends Component {
    render() {
        return (
            <section id="profile-about">
                <div className="card">
                    <div className="card-header">
                        <h3>About Thangavilas Maligai</h3>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <th>Owner</th>
                                    <td>Nasar Mohamed A</td>
                                </tr>

                                <tr>
                                    <th>Contact No.</th>
                                    <td>91 780-680-7793</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>nasar@thangavilamaligai.com</td>
                                </tr>

                                <tr>
                                    <th>Address</th>
                                    <td>Marketline Road,Madukkur,Thanjavur Dt -614903.</td>
                                </tr>
                                <tr>
                                    <th>Landmark</th>
                                    <td>Opp to MSM Motors</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}