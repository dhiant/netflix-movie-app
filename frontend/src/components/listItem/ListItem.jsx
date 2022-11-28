import React, { useState } from "react";
import "./listItem.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";
import { BiLike, BiDislike } from "react-icons/bi";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoURL = `https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761`;
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://cdn.onebauer.media/one/empire-images/features/5cde8a00133d503e3a49e503/GOT-MAIN.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill"
        alt=""
      />
      {isHovered && (
        <>
          <video src={videoURL} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <BsFillPlayFill className="icon" />
              <RiAddFill className="icon" />
              <BiLike className="icon" />
              <BiDislike className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
