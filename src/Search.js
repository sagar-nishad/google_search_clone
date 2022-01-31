import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState(""); // input is the name of the variable in which we are storing our search
  const history = useHistory();

  const search = (e) => {
    // this functioin is connected to google search button
    e.preventDefault(); //prevent default is necessary because we are making a form and when we submit we don,t want the page to refresh
    console.log("you hit search", input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    // we will do something with the input
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />

        <input value={input} onChange={(e) => setInput(e.target.value)} />
        {/* this input is connected to the state input using value={input} */}
        {/* we are updating the value of the input using onChange ...SetInput bla bla bla */}

        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          {/* we have alloted the type=submit to the button so that we can have the search/submit with enter function */}
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          {/* we have alloted the type=submit to the button so that we can have the search/submit with enter function */}
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
