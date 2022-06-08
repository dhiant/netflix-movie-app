import React from "react";
import "./listItem.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";
import { BiLike, BiDislike } from "react-icons/bi";

const ListItem = ({ index }) => {
  return (
    <div className="listItemWrapper">
      <img
        src="https://cdn.onebauer.media/one/empire-images/features/5cde8a00133d503e3a49e503/GOT-MAIN.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill"
        alt=""
      />
      <div className="itemInfo">
        <div className="icons">
          <BsFillPlayFill />
          <RiAddFill />
          <BiLike />
          <BiDislike />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="movieDes">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          deserunt quisquam, placeat expedita molestiae illum excepturi aliquid
          ex quidem saepe, aspernatur perspiciatis ratione! Assumenda quae quos
          magni harum ad aliquam.
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
};

export default ListItem;
