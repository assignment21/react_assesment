import React from 'react'
import { Link } from "react-router-dom";
// import Helper from "../helpers/helper"

class NavBar extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
logout = () => {
    localStorage.removeItem('user_token');
    this.props.data.history.push("/signin");
}
  
  render() {
        var token = localStorage.getItem('user_token');
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                {token ? (
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/products"} className="nav-link">
                                All Product
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/add"} className="nav-link">
                                All Category
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-danger" onClick={this.logout}>Logout</button>
                        </li>
                        <li className="nav-item">
                            <Link to="/getall" className="nav-link">
                                All Merchant
                            </Link>
                        </li>
                    </div>
                ) :
                   (
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/signup"} className="nav-link">
                                Signup
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/signin"} className="nav-link">
                                Signin
                            </Link>
                        </li>
                    </div>
                   )}
            </nav>
        )
    }
}

export default NavBar;