import React, { useState, useEffect } from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const fetchRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`
        );
        setLists(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRandomList();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list, idx) => (
        <List list={list} key={idx} />
      ))}
    </div>
  );
};

export default Home;
