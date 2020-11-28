import React, { Component } from 'react'
import './category.css'
import '../../pages/style.css'
import {tshirt,short,jacket,pants,shoes} from '../../assets'
// import product from "../../assets/product/gez-xavier.png"
// import rating from "../../assets/icons/rating-stars.png"


class Category extends Component {
    render() {
        return (
            <div className="container">
				<h2>Category</h2>
				<p className="lead text-muted">What are you currently looking for</p>
				<div className="row">
					<div className="col-3 col-sm-auto col-md-3 col-lg-2 col-xl-auto rounded box" style={{backgroundColor: '#CC0B04'}}>
						<img src={tshirt} alt="T-shirt" className="img-fluid mx-auto category-img" />
						<div className="category-text">
							T-shirt
						</div>
					</div>
					<div className="col-3 col-sm-auto col-md-3 col-lg-2 col-xl-auto rounded box" style={{backgroundColor: '#1C3391'}}>
						<img src={short} alt="Shorts" className="img-fluid mx-auto category-img" />
						<div className="category-text">
							Shorts
						</div>
					</div>
					<div className="col-3 col-sm-auto col-md-3 col-lg-2 col-xl-auto rounded box" style={{backgroundColor: '#F67B02'}}>
						<img src={jacket} alt="Jacket" className="img-fluid mx-auto category-img" />
						<div className="category-text">
							Jacket
						</div>
					</div>
					<div className="col-3 col-sm-auto col-md-3 col-lg-2 col-xl-auto rounded box" style={{backgroundColor: '#E31F51'}}>
						<img src={pants} alt="Pants" className="img-fluid mx-auto category-img" />
						<div className="category-text">
							Pants
						</div>
					</div>
					<div className="col-3 col-sm-auto col-md-3 col-lg-2 col-xl-auto rounded box" style={{backgroundColor: '#57CD9E'}}>
						<img src={shoes} alt="Shoes" className="img-fluid mx-auto category-img mt-5" />
						<div className="category-text">
							Shoes
						</div>
					</div>
				</div>
			</div>
        )
    }
}

export default Category