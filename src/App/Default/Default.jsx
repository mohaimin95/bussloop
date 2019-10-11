
import React, { Component } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Lead } from '../Lead/Lead';
import './Default.css';
export class Default extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="row">
                    <div className="col-md-3">
                        <div className="buss-filter">
                                <div className="buss-filter">
                                    <b>Location Filter</b>
                                    <div className="clearfix"></div>
                                    <div className="filter-group">
                                        <label>Select Country:</label>
                                        <select name="" id="" className="form-control">
                                            <option value="India">India</option>
                                        </select>
                                    </div>
                                    
                                    <div className="filter-group">
                                        <label>Select State:</label>
                                        <select name="" id="" className="form-control">
                                            <option value="India">Thanjavur</option>
                                        </select>
                                    </div>
                                    
                                    <div className="filter-group">
                                        <label>Select Area:</label>
                                        <select name="" id="" className="form-control">
                                            <option value="India">Madukkur</option>
                                        </select>
                                    </div>

                                </div>
                        </div>
                    </div>
                    <div className="buss-list col-md-9">
                        <div className="row">
                            <div className="col-md-4">
                                <Lead />
                            </div>
                            <div className="col-md-4">
                                <Lead />
                            </div>
                            <div className="col-md-4">
                                <Lead />
                            </div>
                            <div className="col-md-4">
                                <Lead />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}