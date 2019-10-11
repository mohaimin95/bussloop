import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';
export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-default">
                <Link className="navbar-brand" to="/">Bussloop.io</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="search-bar d-none d-lg-block d-md-block">
                    <div className="input-group">
                        <input type="text" className="form-control" list="search-results" aria-label="Dollar amount (with dot and two decimal places)" />
                        <datalist id="search-results">
                            <option value="Thangavilas Maligai">Thangavilas Maligai</option>
                            <option value="Thangavilas Maligai">Thangavilas Maligai</option>
                            <option value="Thangavilas Maligai">Thangavilas Maligai</option>
                        </datalist>
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fa fa-search"></i></span>
                        </div>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/get-started"><button className="btn btn-primary" href="#">I Want My Business In</button></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );

    }
}