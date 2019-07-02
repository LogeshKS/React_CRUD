import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Index from './index';
import Create from './create';
import Edit from './edit';

export default class Home extends Component {
    render() {
        return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/create'} className="nav-link">Create</Link>
                            </li>                           
                        </ul>
                    </div>
                </nav> <br />
                <Switch>

                    <Route exact path ="/create" component={ Create } />
                    <Route path ="/edit/:id" component={ Edit } />                   
                    <Route path ="/" component={ Index } />                   
                </Switch>
            </div>
            </Router>
        )
    }
}