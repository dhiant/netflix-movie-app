import React from "react";
import "./navbar.scss";
import Logo from "../../images/netflix_logo.png";
import ProfilePic from "../../images/profile_pic.jpg";
import { GoSearch } from "react-icons/go";
import { IoNotificationsSharp } from "react-icons/io5";
import { RiArrowDropDownFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src={Logo} alt="netflix logo" />
          <div className="links">
            <Link to="/" className="link">
              <span>Home</span>
            </Link>
            <Link to="/series" className="link">
              <span>Series</span>
            </Link>
            <Link to="/movies" className="link">
              <span>Movies</span>
            </Link>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
        </div>

        {/* profile section */}
        <div className="right">
          <GoSearch className="navbar-icon" size="20px" />
          <IoNotificationsSharp size="20px" />
          <img src={ProfilePic} alt="profile" />

          {/* menu div */}
          <div className="profile">
            <RiArrowDropDownFill className="navbar-icon" size="35px" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
