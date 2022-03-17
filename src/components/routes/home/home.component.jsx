import React from "react";
import Directory from "../../directory/directory.component";
import './homepage.styles.scss'
import { Outlet } from "react-router-dom";


export const Home = () => {

    return (
        <div className="homepage">
            <Directory />
        </div>
    )
}