import React from "react";
import MagnifyingGlass from "../../assets/images/icons/search.svg"
import Upload from "../../assets/images/icons/upload.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import User from "../../assets/userimage.png";

function Header() {

    return (
        <header className='header'>
            <div className='header_eq'>
                <Link to="/" className="header__logo">
                    StreamTube
                </Link>

                <div className='header-right'>
                    <div className='header-right__search'>
                        <form className="header-form" action="" method="">
                            <img className="header-form__icon" src={MagnifyingGlass} alt="Search" />
                            <textarea className="header-form__box" type="search" placeholder="Search" />
                        </form>
                        <Link to="/sign">
                            <img className="header__user--mobile" src={User} alt="User" />
                        </Link>
                    </div>
                    <Link className="header-right__button" to="/upload">
                        <div className="header-right__button-eq">
                            <img className="header-right__button-icon" alt="Upload Icon" src={Upload} />
                            UPLOAD
                        </div>
                    </Link>
                    <Link to="/sign">
                        <img className="header__user--tablet" src={User} alt="User" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;