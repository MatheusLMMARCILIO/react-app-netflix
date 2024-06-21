import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from '/PAGES/inicio/index.js'

import './App.css'

import Home from './PAGES/inicio/index.js'

const PageHome = () => {

    return (<>

        <section className="Menu">
            <div className="LogoMenu" >
                <img src="./IMAGE/NetflixLogo.webp" alt="logo" />
            </div>

            <div className="linkMenu" >
<Router>
    <Route path="/" element={<Home />}></Route>
</Router>

            </div>


        </section>


    </>)
}
export default PageHome