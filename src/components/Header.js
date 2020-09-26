import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <div className="container">
                <h1>
                    <Link to={'/'} className="text-light">
                        CIAT TEST
                    </Link>
                </h1>
            </div>
            <Link
                className="btn btn-danger new-post d-block d-md-inline-block"
                to={"/users/new"}> Add New User &#43;
            </Link>
        </nav>
    );
}

export default Header;