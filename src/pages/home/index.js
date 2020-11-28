import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import Category from '../../components/category';
// import New from '../../components/body/New';
// import Popular from '../../components/body/Popular';
import Navbar from '../../components/navbar';
import Card from '../../components/card';




class Home extends Component {
    render() {
        return(
            <>
                <Navbar />
                <Carousel />
                <Category />
                <div className='container'>
                <h2>New</h2>
                <p className="lead text-muted">You've never seen it before</p>
                </div>
                <Card />
                <div className='container'>
                <h2>Popular</h2>
                <p className="lead text-muted">Find clothes that are trending recently</p>
                </div>
                <Card />
            </>
        )
    }
}


export default Home;