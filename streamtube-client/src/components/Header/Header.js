import React from "react";
import MagnifyingGlass from "../../assets/images/icons/search.svg"
import Upload from "../../assets/images/icons/upload.svg";
import "./Header.scss"
import { Link } from "react-router-dom";

function Header() {

    return (
        <header className='header'>
            <div className='header_eq'>
                <Link to="/">
                    StreamTube
                </Link>

                <div className='header_right'>
                    <div className='header_right__search'>
                        <form className="header-form" action="" method="">
                            <img className="header-form__icon" src={MagnifyingGlass} alt="Search" />
                            <textarea className="header-form__box" type="search" placeholder="Search" />
                        </form>
                        <img className="header__user--mobile" src="" alt="User" />
                    </div>
                    <Link className="header-right__button" to="/upload">
                        <div className="header-right__button-eq">
                            <img className="header-right__button-icon" alt="Upload Icon" src={Upload} />
                            UPLOAD
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;