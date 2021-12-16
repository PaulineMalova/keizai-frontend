import React, { useState } from "react";
import { useForm } from "react-hook-form";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import './App.css';
const eye = <FontAwesomeIcon icon={faEye} />;

function ResetPassword() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <body>
            <div className="Page">
                <div className="App">
                    <div className="home-left"></div>
                    <div className="home-right">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <label htmlFor="userName">Phone Number</label>
                            <input
                                placeholder="Enter Your Phone Number"
                                {...register("phone_number", { required: true })}
                            />

                            <label htmlFor="emailAddress">Email Address</label>
                            <input
                                placeholder="Enter Your Email Address"
                                {...register("email_address", { required: true })}
                            />

                            <label htmlFor="password">Password</label>
                            <input
                                placeholder="Enter Your New Password"
                                type={passwordShown ? "text" : "password"}
                                {...register("new_password", { required: true })}
                            />

                            <label htmlFor="password">Re-enter Password</label>
                            <input
                                placeholder="Enter Your New Password Again"
                                type={passwordShown ? "text" : "password"}
                                {...register("confirm_password", { required: true })}
                            />
                            <i onClick={togglePasswordVisiblity}>{eye}</i>

                            <input className="submit-input" type="submit" value="Reset Password" />

                        </form>
                    </div>
                </div>
            </div>
        </body >
    );
}

export default ResetPassword;