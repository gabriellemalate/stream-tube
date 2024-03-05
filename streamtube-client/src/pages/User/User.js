import "./User.scss"
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



function UserPage() {

    return (
        <>
            <div className="sign">
                <header className="sign-header">
                    <h2 className="sign-header__logo">StreamTube</h2>
                    <div className="sign-header__actions">
                        <button className="sign-header__actions-signup">
                            Sign Up
                        </button>
                        <button className="sign-header__actions-login">
                            Log In
                        </button>
                    </div>
                </header>
                <main className="sign-main">
                    <div className="sign-main__eq">
                        <h3 className="sign-main__welcome">Welcome To</h3>
                        <h1 className="sign-main__head">StreamTube</h1>
                        <article className="sign-main__form">
                            <textarea className="sign-main__username" placeholder="UserName"/>
                            <textarea className="sign-main__password"
                            placeholder="Password"/>
                            <button className="sign-main__submit">Log In</button>
                            <p>or, if you do not already have an account:</p>
                            <button className="sign-main__signup">Sign Up</button>
                        </article>
                    </div>
                </main>
            </div>
        </>
    );
}

export default UserPage;