import React from "react"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Home"
import Privacy from "./Privacy"
import Contact from "./components/Contact/Contact"



export default function App() {
  return (
    <Router>
      <div className="app">
        
        {/* <Hero />
        <About />
        <Architect />
        <CTA />
        <BeforeAfter />
        <Information />*/}
        
      
      <div className="content">
        <Switch>
          <Route exact path="/">
          <Nav />
            <Home />
          </Route>
          <Route exact path="/privacy">
          <Nav />
            <Privacy />
            </Route>
            <Route exact path="/contact">
              <div className="contactbg">
              <Nav />
              <Contact />
                </div>
            </Route>
        </Switch>
        </div>
      </div>
      <Footer /> 
    </Router>
  )
}