import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import './App.css';

// const baseURL = "https://keizai-app.herokuapp.com";
const baseURL = "http://127.0.0.1:8000";

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
                console.log(response.status)
                if (response.data.user_id || response.status === 201) {
                    window.location = "/"
                }
                if (response.status === 200) {
                    window.location = "/"
                }
            })
            .catch(error => {
                console.log('An error occurred:', error.response);
                if (error.response.data) {
                    alert(error.response.data.detail)
                }
                else {
                    alert("Something went wrong")
                }
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
