import React, { Component } from 'react'
import { Container, Form, Image } from 'react-bootstrap'
import "../../assets/styles/login.css"
import { Blanjalogo } from '../../assets'
import axios from 'axios'



const base_url = 'http://127.0.0.1:8000/'
class Login extends Component {
    state = {
        isLogin : false,
    }

    handleSubmit = (e) => {
        const data = {
            username: this.username,
            password: this.password
        }
        console.log(data)
        axios.post(base_url + 'auth/login', data)
            .then(({data}) => {
                this.setState({
                    isLogin: true
                })
                localStorage.setItem("token",data.data.tokenId.token)
            }).catch((error) => {
                console.log(error)
            })
    }


    render() {
        console.log(this.state)
        console.log(localStorage.getItem("token"))
        return (

            <Container className="auth">
                <div className="form-header">
                    <div className="img-container">
                        <Image src={Blanjalogo} alt="Logo" />
                    </div>
                    <p className="info">Please login with your account</p>
                    <div className="button-group">
                        <a href=" " className="button button-full">Customer</a>
                        <a href=" " className="button button-shadow">Seller</a>
                    </div>
                    <Form className="form-section" >
                        <div className="form-main">
                            <input type="email" placeholder="Email" name="uname" onChange={(e) => (this.username = e.target.value)} required />
                        </div>
                        <div className="form-main">
                            <input type="password" placeholder="Password" name="psw" onChange={(e) => (this.password = e.target.value)} required />
                        </div>
                        <a className="forgot" href="reset">Forgot password?</a><br></br>
                        <a className="submit" type="submit" onClick={this.handleSubmit}>LOGIN</a>
                        <p className="register">Don't have a Tokopedia account? <a href="signup">Register</a></p>
                    </Form>
                </div>
            </Container>
        )
    }
}



export default Login;

