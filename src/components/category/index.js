import React, { Component } from 'react'
import './category.css'
import '../../pages/style.css'
import { Link } from 'react-router-dom'
import { tshirt, short, jacket, pants, shoes } from '../../assets'


class Category extends Component {
	render() {
		return (
			<>
				<h2>Category</h2>
				<p className="lead text-muted">What are you currently looking for</p>
				<div className="row">
					<Link to={{
						pathname: `/search?category=1`,
						state: this.state
					}}>
						<div className="col-3 col-sm-auto col-md-3 col-lg-2 col-xl-auto rounded box" style={{ backgroundColor: '#CC0B04' }}>
							<img src={tshirt} alt="T-shirt" className="img-fluid mx-auto category-img" />
							<div className="category-text">T-shirt</div>
						</div>
					</Link>
					<Link to={{
						pathname: `/search?category=2`,
						state: this.state
					}}>
						<div className="col-3 col-sm-auto col-md-3 col-lg-2 col-xl-auto rounded box" style={{ backgroundColor: '#1C3391' }}>
							<img src={short} alt="Shorts" className="img-fluid mx-auto category-img" />
							<div className="category-text">
								Shorts
						</div>
						</div>
					</Link>

					<Link to={{
						pathname: `/search?category=3`,
						state: this.state
					}}>
						<div className="col-3 col-sm-auto col-md-3 col-lg-2 col-xl-auto rounded box" style={{ backgroundColor: '#F67B02' }}>
							<img src={jacket} alt="Jacket" className="img-fluid mx-auto category-img" />
							<div className="category-text">
								Jacket
						</div>
						</div>
					</Link>
					<Link to={{
						pathname: `/search?category=4`,
						state: this.state
					}}>
						<div className="col-3 col-sm-auto col-md-3 col-lg-2 col-xl-auto rounded box" style={{ backgroundColor: '#E31F51' }}>
							<img src={pants} alt="Pants" className="img-fluid mx-auto category-img" />
							<div className="category-text">
								Pants
						</div>
						</div>
					</Link>
					<Link to={{
						pathname: `/search?category=5`,
						state: this.state
					}}>
						<div className="col-3 col-sm-auto col-md-3 col-lg-2 col-xl-auto rounded box" style={{ backgroundColor: '#57CD9E' }}>
							<img src={shoes} alt="Shoes" className="img-fluid mx-auto category-img mt-5" />
							<div className="category-text">
								Shoes
						</div>
						</div>
					</Link>
				</div>
			</>
		)
	}
}

export default Category