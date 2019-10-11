import React,{Component} from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import { Navbar } from './Navbar/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import { Homepage } from './Homepage/Homepage';
import { Login } from './Login/Login';
import { Default } from './Default/Default';
import { Profile } from './Profile/Profile';
export class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Default} />
                <Route path="/get-started" exact component={Homepage} />
                <Route path="/login" exact component={Login} />
                <Route path="/profile" exact component={Profile} />
            </Router>
        )
    }
}