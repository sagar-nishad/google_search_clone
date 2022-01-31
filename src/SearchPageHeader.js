import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import { Image, LocalOffer, MoreVert, Room } from "@material-ui/icons";


function SearchPageHeader() {
  return (
    <div>
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__option">
            <div className="searchPage__optionsLeft">
              {/* some times icon is not required at end of the icon name */}
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/search">All</Link>
              </div>

              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/search/news">News</Link>
              </div>

              <div className="searchPage__option">
                <Image />
                <Link to="/search/images">Images</Link>
              </div>

              <div className="searchPage__option">
                <LocalOffer />
                <Link to="/shopping">Shopping</Link>
              </div>

              <div className="searchPage__option">
                <Room />
                <Link to="/maps">Maps</Link>
              </div>

              <div className="searchPage__option">
                <MoreVert />
                <Link to="/more">more</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="./settings"> Settings</Link>
              </div>

              <div className="searchPage__option">
                <Link to="./tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPageHeader;
