import React, { Component } from "react";
import { NavLink } from 'react-router-dom';


export default class NavigationComponent extends Component {
    constructor() {
        super();
    }



  render() {
    return (
      <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/follow-me" activeClassName="nav-link-active">Follow Me</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/Blog" activeClassName="nav-link-active">Blog</NavLink>
                </div>
                
            </div>

            <div className="title">
                <h1> Borahae Forever </h1> 
            </div>


        </div>
    );
  }
}
