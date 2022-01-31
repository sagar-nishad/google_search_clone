import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";


function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          {/* the reason we are using link instead of anchor <a> tags 
                because if we use <a> and click the link we will go to a new web page and refresh
                and we don't want that */}
          <Link to="about">About</Link>
          <Link to="store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="gmail">Gmail</Link>
          <Link to="images">Images</Link>
          <AppsIcon />
          <Avatar />

          {/* Link */}
          {/* Link */}
          {/* Icon */}
          {/* Avatar */}
        </div>
      </div>

      <div className="home__body">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />

        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
