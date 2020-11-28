import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
// import Category from '../../components/body/Category';
// import New from '../../components/body/New';
// import Popular from '../../components/body/Popular';
import Navbar from '../../components/navbar';




class Home extends Component {
    render() {
        return(
            <>
                <Navbar />
                <Carousel />
            </>
        )
    }
}


export default Home;