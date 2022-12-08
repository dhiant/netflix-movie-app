import React, { useRef, useState } from "react";
import "./list.scss";
import ListItem from "../listItem/ListItem";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const List = ({ list }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [displayArrow, setDisplayArrow] = useState(false);

  const listRef = useRef();

  const handleSlide = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    // for right direction
    if (direction === "right" && slideNumber < 4) {
      setDisplayArrow(true);

      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="listWrapper">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <IoIosArrowDropleft
          className=" slideArrow left"
          onClick={() => handleSlide("left")}
          style={{ display: !displayArrow && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.map((listItem, idx) => (
            <ListItem index={idx} listItem={listItem} key={idx} />
          ))}
        </div>
        <IoIosArrowDropright
          className="slideArrow right"
          onClick={() => handleSlide("right")}
        />
      </div>
    </div>
  );
};

export default List;
