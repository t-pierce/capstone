import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import NavigationContainer from './navigation-container';
import Home from './pages.js/home';
import Follow from './pages.js/follow';
import Blog from './pages.js/blog';
import noMatch from './pages.js/no-match';
import Mobile from './mobile';

export default class App extends Component {
    constructor() {
        super();


        const axios = require('axios');

        const config = {
        method: 'get',
        url: 'localhost:3000',
        headers: { }
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });

    }


    render() {
        return ( 
            <div className = 'app' >

                <Router>
                    <div>
                        <NavigationContainer />

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/follow-me" component={Follow} />
                            <Route path="/blog" component={Blog} />
                            <Route component={noMatch} />
                        </Switch>

                    </div>
                </Router>

                <Mobile />

            </div>
        );
    }
}