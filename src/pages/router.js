  
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
        </BrowserRouter>
    )
}