  
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import PostProduct from './PostProduct'
import Add_Stock from './addStock'
import UpdateProduct from './updateProduk'
import Home from './home'
import Product from "./product"
import SearchPage from './search'
import DeleteProduct from './deleteItems'

export default function Router() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}  />
            <Route path="/product/:id"  component={Product} />
            <Route path="/search" component={SearchPage} />
            <Route path="/product/postProduct" component={PostProduct} />
            <Route path="/product/addStock" component={Add_Stock} />
            <Route path="/product/updateStock" component={UpdateProduct} />
            <Route path="/products/delete" component={DeleteProduct} />
        </BrowserRouter>
    )
}