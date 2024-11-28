import React from 'react'
import { Link } from 'react-router-dom'
import { MdLanguage } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <nav
                className="navbar navbar-expand-sm navbar-light bg-white"
            >
                <div className="container-fluid m-3">
                    <Link className="navbar-brand">Logo</Link>

                    <MdLanguage />En
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav m-auto mt-2 mt-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" href="#">Demo</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" href="#">Hosting</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" href="#">ProHosting</Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" href="#">Domain</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" href="#">Need Help?</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" href="#">Pages</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" href="#">Contact Us</Link>
                            </li>
                        </ul>
                        <div className="d-flex my-2 my-lg-0">
                            <button className="btn signup">Client Login
                            <LuLogIn className='ms-2'/>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
