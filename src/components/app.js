import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import NavigationContainer from './navigation-container';
import Home from './pages.js/home';
import Follow from './pages.js/follow';
import Blog from './pages.js/blog';
import noMatch from './pages.js/no-match';
import { query } from 'express';

export default class App extends Component {
    constructor() {
        super();

        const isBigScreen = useMediaQuery({ query: '(min-device-width: 1224px)' })

        const isSmallScreen = useMediaQuery({ query: '(max-width: 1224px)' })

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

                <div className="mobile-response">
                    {isSmallScreen ? small=true  : query }
                </div>


            </div>
        );
    }
}