import "./App.css";
import Home from "./Home";
import React from "react";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Images from "./Images";
import News from "./News";

function App() {
  return (
    <div className="app">
      {/* think of the below code as a combination of express router and switch case */}

      <Router>
        <Switch>
          <Route path="/search/images">
            <Images />
          </Route>
          <Route path="/search/news">
            <News />
          </Route>
          <Route path="/search">
            <SearchPage />
            {/* <h1>The Search Page</h1> */}
          </Route>
          <Route path="/about">
            {/* <SearchPage /> */}
            <h1>
              This is a clone of Google made by Sagar Nishad using React ,Google
              Custom Search Api
            </h1>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
