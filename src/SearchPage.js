import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import SearchPageHeader from "./SearchPageHeader";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // useGoogleSearch returns an object data pata nai uska sath kya karna ha

  //Live api calls
  const { data } = useGoogleSearch(term);

  // const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <SearchPageHeader />

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results in (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap.cse_image[0]?.src}
                    />
                  )}

                {item.displayLink}
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resltSnippet"> {item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
