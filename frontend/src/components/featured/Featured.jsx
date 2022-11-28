import React from "react";
import "./featured.scss";
import { GrPlayFill } from "react-icons/gr";
import { BsInfoCircle } from "react-icons/bs";
import Venom from "../../images/venom.jpg";
import VenomLogo from "../../images/venom_logo.png";

const Featured = ({ type }) => {
  return (
    <section className="featuredWrapper">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={Venom} alt="venom marvel" />
      <div className="info">
        <img src={VenomLogo} alt="marvel movies" />
        <span className="description">
          Journalist Eddie Brock is trying to take down Carlton Drake, the
          notorious and brilliant founder of the Life Foundation. While
          investigating one of Drake's experiments, Eddie's body merges with the
          alien Venom -- leaving him with superhuman strength and power.
          Twisted, dark and fueled by rage, Venom tries to control the new and
          dangerous abilities that Eddie finds so intoxicating.
        </span>
        <div className="btn">
          <button className="play">
            <GrPlayFill />
            <span>Play</span>
          </button>
          <button className="more">
            <BsInfoCircle />
            <span>Info</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
