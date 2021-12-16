import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import './App.css';

const baseURL = "https://keizai-app.herokuapp.com";

function Register() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios
            .post(baseURL + "/register", data, { headers: { "Content-Type": "application/json" } })
            .then((response) => {
                console.log(response.data);
                if (response.data.user_id) {
                    window.location = "/home"
                }
            })
            .catch(error => {
                console.log('An error occurred:', error.response);
                alert(error.response.data.detail)
            });
    };

    return (
        <body>
            <div className="Page">
                <div className="App">
                    <div className="home-left"></div>
                    <div className="home-right">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="firstName">First Name</label>
                            <input {...register("first_name", { required: true, minLength: 3 })} />

                            <label htmlFor="lastName">Last Name</label>
                            <input {...register("last_name", { required: true, minLength: 3 })} />

                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input {...register("phone_number", { required: true, minLength: 10 })} />

                            <label htmlFor="emailAddress">Email Address</label>
                            <input {...register("email_address", { required: true })} />

                            <label htmlFor="userName">User Name</label>
                            <input {...register("user_name", { required: true })} />

                            <label htmlFor="password">Password</label>
                            <input
                                placeholder="Password"
                                name="password"
                                type={passwordShown ? "text" : "password"}
                                {...register("password", { required: true })}
                            />

                            <input type="submit" value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </body>

    );
}

export default Register;
