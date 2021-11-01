import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationContainer from './navigation-container';
import Home from './pages.js/home';
import Follow from './pages.js/follow';
import Blog from './pages.js/blog';
import noMatch from './pages.js/no-match';


export default class App extends Component {
    constructor() {
        super();

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
     
            </div>
        );
    }
}

