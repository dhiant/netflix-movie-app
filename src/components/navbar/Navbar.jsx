import React from "react";
import "./navbar.scss";
import { GoSearch } from "react-icons/go";
import { IoNotificationsSharp } from "react-icons/io5";
import { RiArrowDropDownFill } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://www.gizmochina.com/wp-content/uploads/2020/03/Netflix-Logo.png"
            alt="netflix logo"
          />
          <div className="links">
            <span>Home</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
        </div>

        {/* profile section */}
        <div className="right">
          <GoSearch className="navbar-icon" size="20px" />
          <IoNotificationsSharp size="20px" />
          <img
            src="https://blog.logomyway.com/wp-content/uploads/2020/08/netflix-logo-2-1.jpg"
            alt="profile"
          />

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
