import React from "react";
import { NavLink } from 'react-router-dom';

export default function() {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">      
                <NavLink to={route} activeClassName="nav-link-active">{linkText}</NavLink> 
            </div>
        );
    };


    return (
        <div className="nav-wrapper">
            
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink> 
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/about" activeClassName="nav-link-active">About</NavLink>
                </div>

                <div className="nav-link-wrapper">   
                    <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>  
                </div>

                <div className="nav-link-wrapper">      
                    <NavLink to="/photo-gallery" activeClassName="nav-link-active">PhotoGallery</NavLink> 
                </div>                

            </div>

            <div className="right-side">
                Tiara Pierce Rodgers
            </div>   
                
        </div>    
    );

}
