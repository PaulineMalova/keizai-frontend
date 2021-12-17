import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import './App.css';

// const baseURL = "https://keizai-app.herokuapp.com";
const baseURL = "http://127.0.0.1:8000";

function Login() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios
            .post(baseURL + "/login", data, { headers: { "Content-Type": "application/json" } })
            .then((response) => {
                console.log(response);
                if (response.data.access_token) {
                    window.location = "/home"
                }
            })
            .catch(error => {
                console.log('An error occurred:', error.response);
                alert(error.response.data.detail)
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="userName">Phone Number</label>
            <input
                id="userName"
                name="userName"
                placeholder="Enter Your Phone Number"
                {...register("username", { required: true })}
            />


            <label htmlFor="password">Password</label>
            <input
                id="password"
                placeholder="Enter Your Password"
                name="password"
                type={passwordShown ? "text" : "password"}
                {...register("password", { required: true })}
            />

            <input className="submit-input" type="submit" value="Login" />

        </form>
    );
}

export default Login;