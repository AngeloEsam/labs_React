import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import changeLanguage from "../../store/action";

export default function Header() {
  const language = useSelector((state) => state.language.lang);
  const count = useSelector((state) => state.addToCart.count);
  const dispatch=useDispatch()
  const ToggleLanguage=()=>{
    dispatch(changeLanguage(language==='en'?'ar':'en'))
  }
  useEffect(() => {
    document.dir = language === "en" ? "ltr" : "rtl";
  }, [language]);
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="">
            Movies favorites
          </Link>

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/search">
                  Search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/movies">
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/favorite">
                  Favorites
                </NavLink>
              </li> */}
              <li className="nav-item">
                <button
                  className="btn btn-success"
                  onClick={() => ToggleLanguage()}
                >
                  Toggle Language
                </button>
              </li>
            </ul>
            <div className="d-flex align-items-center">
            <div className="me-2 position-relative">
              <Link className="nav-link d-inline-block" aria-current="page" to='/favorite' ><i className="fa-solid fs-2 fa-heart text-warning"></i></Link>
              <span style={{right:'-10px',top:'-6px'}} className="badge position-absolute  rounded-pill badge-notification bg-danger">
              {count}
              </span>
            </div>

          </div>
          </div>
        </div>
      </nav>
    </>
  );
}
