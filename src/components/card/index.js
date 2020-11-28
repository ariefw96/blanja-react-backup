import React, { Component } from 'react'
import './card.css'
import '../../pages/style.css'
import product from "../../assets/product/gez-xavier.png"
import rating from "../../assets/icons/rating-stars.png"

class Card extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card">
                        <img src={product} alt="Suit" className="card-img-top img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title">Men's formal suit - Black & White</h5>
                            <h5 className="price-txt">$ 40.0</h5>
                            <p className="text-muted">Zalora Cloth</p>
                            <img className="img-fluid" src={rating} alt="Rating" />
                        </div>
                    </div>
                    <div className="card">
                        <img src={product} alt="Suit" className="card-img-top img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title">Men's formal suit - Black & White</h5>
                            <h5 className="price-txt">$ 40.0</h5>
                            <p className="text-muted">Zalora Cloth</p>
                            <img className="img-fluid" src={rating} alt="Rating" />
                        </div>
                    </div>
                    <div className="card">
                        <img src={product} alt="Suit" className="card-img-top img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title">Men's formal suit - Black & White</h5>
                            <h5 className="price-txt">$ 40.0</h5>
                            <p className="text-muted">Zalora Cloth</p>
                            <img className="img-fluid" src={rating} alt="Rating" />
                        </div>
                    </div>
                    <div className="card">
                        <img src={product} alt="Suit" className="card-img-top img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title">Men's formal suit - Black & White</h5>
                            <h5 className="price-txt">$ 40.0</h5>
                            <p className="text-muted">Zalora Cloth</p>
                            <img className="img-fluid" src={rating} alt="Rating" />
                        </div>
                    </div>
                    <div className="card">
                        <img src={product} alt="Suit" className="card-img-top img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title">Men's formal suit - Black & White</h5>
                            <h5 className="price-txt">$ 40.0</h5>
                            <p className="text-muted">Zalora Cloth</p>
                            <img className="img-fluid" src={rating} alt="Rating" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card