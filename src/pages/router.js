  
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import PostProduct from './PageAddProduct'
import Add_Stock from './PageAddStock'
import UpdateProduct from './PageListProduct'
import Home from './Homepage'
import Product from "./PageProductDetails"
import SearchPage from './PageSearch'
import DeleteProduct from './PageDeleteItems'
import UpdateData from './PageFormUpdate'

//auth
import Login from './auth/login'
import SignUp from './auth/signup'
import Resset from './auth/reset'
import Confirm from './auth/confirm'

export default function Router() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}  />
            <Route path="/product/:id"  component={Product} />
            <Route path="/search" component={SearchPage} />
            <Route path="/product/postProduct" component={PostProduct} />
            <Route path="/product/addStock" component={Add_Stock} />
            <Route path="/product/listStock" component={UpdateProduct} />
            <Route path="/product/delete/:id" component={DeleteProduct} />
            <Route path ="/product/update/:id" component={UpdateData} />
            <Route path ="/signup" component={SignUp} />
            <Route path ="/login" component={Login} />
            <Route path ="/reset" component={Resset} />
            <Route path ="/confirm" component={Confirm} />
        </BrowserRouter>
    )
}