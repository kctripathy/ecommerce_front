import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';


const { user } = isAuthenticated();

const isActive = (history, path) => {

    if (history.location.pathname === path) {
        return ("nav-link active")
    }
    else {
        return ("nav-link inactive")
    }
}
    
const handleRedirect = (history) => {
    if (user && user.role === 1) {
        history.push("/admin/dashboard")
    }
    else {
        history.push("/dashboard")
    }
}

const NavBar = ({ history }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <Link className="navbar-brand" to="/">Learn React JS</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className={isActive(history, "/")} to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive(history, "/about")} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive(history, "/services")} to="/services">Services</Link>
                        </li>

                        <li className="nav-item">
                            <Link className={isActive(history, "/shop")} to="/shop">Shop</Link>
                        </li>

                        <li className="nav-item">
                            <Link className={isActive(history, "/cart")} to="/cart">Cart</Link>
                        </li>

                        {/* ADMIN LINKS  */}
                        {/* <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Admin
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/">Dashboard</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/">Manage User</Link>
                                <Link className="dropdown-item" to="/">Manage Category</Link>
                                <Link className="dropdown-item" to="/">Manage Product</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/">Manage Transactions</Link>
                            </div>
                        </li> */}

                        {/* LOGGED ON USER MENU */}
                        {/* <li className="nav-item">
                            <Link className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">User Dashboard</Link>
                        </li> */}
                    </ul>

                    {/* 
                    SEARCH FUNCTIONALITY
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </form> */}

                    <ul className="navbar-nav mr-auto">
                        {(!isAuthenticated()) && (
                            <Fragment>
                                <li className="nav-item">
                                    <Link className={isActive(history, "/signin")} to="/signin">Signin</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={isActive(history, "/signup")} to="/signup">Register</Link>
                                </li>
                            </Fragment>
                        )}

                        {(isAuthenticated()) && (
                            <Fragment>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/"
                                        id="navbarDropdown" role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        Welcome User
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/">Update Profile</Link>
                                        <Link className="dropdown-item" to="#"
                                            onClick={()=>handleRedirect(history)}
                                        >Dashboard</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="#"
                                            onClick={() => signout(() => {
                                                history.push("/")
                                            })}>Sign Out</Link>
                                    </div>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="#" style={{ cursor: "hover" }}
                                        onClick={() => signout(() => {
                                            history.push("/")
                                        })}>Signout</Link>
                                </li> */}
                            </Fragment>
                        )}

                    </ul>
                </div>
            </nav>

        </div>
    )
}
export default withRouter(NavBar);
