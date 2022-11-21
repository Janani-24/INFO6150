import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LOGIN_URL = 'http://localhost:8000/user/login';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [credErrors, setcredErrors] = useState("");

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
            let userLoginData = {
                emailId: email,
                password: password,
            };
            try {
                let response = await axios.post(LOGIN_URL, userLoginData);
                if (response.status === 200) {
                    sessionStorage.setItem("name", response.data.result.name)
                    navigate("/home");
                }
                else{
                    console.log(response.message);
                }
            }
            catch (error) {
                setcredErrors("Invalid credentials");
            }
        
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 mx-auto">
                    <div className="card mt-5">
                        <div className="card-header" style={{backgroundColor: "#0d6efd"}}>
                            <h3 className="mb-3" style={{color: "white"}}>Login</h3>
                        </div>
                        <div className="card-body" style={{backgroundColor: "#ffffff"}}>
                            <form id="loginForm" onSubmit={e => handleSubmit(e) }>
                                <div className="form-group mt-4">
                                    <label className="float-start mb-3">Email Id: </label>
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Enter email id"
                                      defaultValue="test@gmail.com" required/>
                                </div>
                                <div className="form-group mt-4">
                                    <label className="float-start mb-3">Password: </label>
                                    <input type="password" className="form-control" name="pwd" id="pwd" placeholder="Enter password"
                                    defaultValue="*********" required/>
                                </div>
                                <button type="submit" className="btn btn-primary mt-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;