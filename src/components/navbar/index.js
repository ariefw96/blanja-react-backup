import React, { Component } from 'react';
import logo from './../../assets/icons/Vector.png';
import axios from 'axios'
import { Link } from 'react-router-dom'


class Navbar extends Component {


  state = {
    product_name: ``,
    current_url: ``,
    color: '',
    size: '',
    category: '',
    fetchSize: [],
    fetchColor:[]
  }

  getAllSize = () => {
    axios.get('http://localhost:8000/products/getSize')
    .then(({data}) => {
      this.setState({
        fetchSize: data.data
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  getAllColor = () => {
    axios.get('http://localhost:8000/products/getColor')
    .then(({data}) => {
      this.setState({
        fetchColor: data.data
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  clickFilterHandler = () => {
    this.setState({
      current_url: window.location.href
    })
  }

  clickOptHandler = (e) => {
    this.setState({
      [e.target.name]: `&${[e.target.name]}=${e.target.id}`
    })
  }

  goToSeller = () => {
    window.location.href=`http://localhost:3000/product/postProduct`
  }

  submitFilterHandler = () => {
    // console.log(this.state.current_url +this.state.color+this.state.size_selected)
    const newUrl = this.state.current_url.split('&')
    window.location.href = newUrl[0] + this.state.color + this.state.size + this.state.category
  }

  submitHandler = () => {
    window.location.href = `http://localhost:3000/search?name=` + this.state.product_name
  }

  componentDidMount = () => {
    this.getAllSize()
    this.getAllColor()
  }

  render() {
    const { product_name, fetchSize } = this.state
    console.log(this.state)
    return (
      <>
        <div className="shadow sticky-top ">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href='http://localhost:3000/' className="navbar-brand ml-5">
              <img src={logo} className="d-inline-block align-center" loading="lazy" alt="logo" /> Blanja
                        </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggled" aria-controls="navbarToggled" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarToggled">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <div className="input-group" style={{ width: "550px" }}>
                    {/* process with media-query */}
                    <input type="text" className="form-control border-right-0" style={{ borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px" }} name='product_name' value={product_name} onChange={this.changeHandler} placeholder="Search here..." />
                    <span className="input-group-append">
                      <div className="input-group-text bg-transparent border-left-0" style={{ borderTopRightRadius: "25px", borderBottomRightRadius: "25px" }}>
                        <div onClick={this.submitHandler}><i className="fas fa-search"></i></div>
                      </div>
                    </span>
                  </div>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-secondary ml-2" data-toggle="modal" data-target="#FilterModal" onClick={this.clickFilterHandler}><i className="fal fa-filter" ></i></button>
                </li>
                <li className="nav-item">
                  <button className="btn ml-2">
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </li>
              </ul>
              <div className="nav-item ml-auto">
                <button className="btn btn-danger btn-login mr-2 rounded-pill" onClick={this.goToSeller}>Login</button>
                <button className="btn btn-outline-secondary btn-signup rounded-pill mr-5">Signup</button>
              </div>
            </div>
          </nav>
        </div>
        {/* Modal */}
        <div className="modal fade" id="FilterModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="FilterModalLabel">Filter</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <strong>Colors</strong><br></br>
                <div className="row">
                  <button id="1" name="color" className="btn btn-danger rounded-circle ml-3" onClick={this.clickOptHandler}>R</button>
                  <button id="2" name="color" className="btn btn-success rounded-circle ml-2" onClick={this.clickOptHandler}>G</button>
                  <button id="3" name="color" className="btn btn-primary rounded-circle ml-2" onClick={this.clickOptHandler}>B</button>
                  <button id="4" name="color" className="btn btn-dark rounded-circle ml-2" onClick={this.clickOptHandler}>K</button>
                </div>
                <div className="dropdown-divider"></div>
                <strong>Sizes</strong><br></br>
                <div className="row ml-2">
                  { 
                    fetchSize && fetchSize.map(({id, size_name}) => {
                      return(
                        <>
                          <button id={id} name="size" className="btn btn-outline-secondary mr-2 mb-1" onClick={this.clickOptHandler}>{size_name}</button>
                        </>
                      )
                    })
                  }
                </div>
                <div className="dropdown-divider"></div>
                <strong>Category</strong><br></br>
                <button id="1" name="category" className="btn btn-outline-secondary ml-2" onClick={this.clickOptHandler}>T-shirt</button>
                <button id="2" name="category" className="btn btn-outline-secondary ml-2" onClick={this.clickOptHandler}>Short</button>
                <button id="3" name="category" className="btn btn-outline-secondary ml-2" onClick={this.clickOptHandler}>Jacket</button>
                <button id="4" name="category" className="btn btn-outline-secondary ml-2" onClick={this.clickOptHandler}>Pants</button>
                <button id="5" name="category" className="btn btn-outline-secondary ml-2" onClick={this.clickOptHandler}>Shoes</button>
                <div className="dropdown-divider"></div>
                <strong>Brand</strong>
                <select className="text-muted" style={{ border: "none" }}>
                  <option disabled selected hidden>Zalora, Adidas, MiHoYo and many More</option>
                  <option>Zalora Cloth</option>
                  <option>Adidas</option>
                  <option>MiHoYo</option>
                </select>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary rounded-pill mr-1" style={{ width: "200px" }} data-dismiss="modal">Discard</button>
                <button type="button" className="btn btn-danger rounded-pill ml-auto ml-1" style={{ width: "200px" }} onClick={this.submitFilterHandler}>Apply</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
      </>

    )
  }
}

export default Navbar;