  
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './home'
import Product from "./product"
import SearchPage from './search'

export default function Router() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}  />
            <Route path="/product/:id"  component={Product} />
            <Route path="/search" component={SearchPage} />
        </BrowserRouter>
    )
}