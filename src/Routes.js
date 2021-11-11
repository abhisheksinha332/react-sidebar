import React from 'react'
import { Switch, Route } from 'react-router'

import Home from './component/Body/Home/Home'
import About from './component/Body/About/About'
import Destination from './component/Body/Destination/Destination'
import Country from './component/Body/Destination/Country/Country'
import Blog from './component/Body/Blog/Blog'
import Services from './component/Body/Services/Services'
import Contacts from './component/Body/Contacts/Contacts'


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/destination' component={Destination} />
            <Route exact path='/destination/:country' component={Country}/>
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/contacts' component={Contacts} />
        </Switch>
    )
}

export default Routes
