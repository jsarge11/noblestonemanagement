import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

export default (
  <div>
    <Header />
    <Switch>
       <Route path="/" component={Body}/>
       {/* <Route path="/location" component={}/> */}
       {/* <Route path="/why" component={} /> */}
       {/* <Route path="/contact" component={} /> */}
    </Switch>
    <Footer />
  </div>
 
)