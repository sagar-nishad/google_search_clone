import React from "react";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import SearchPageHeader from "./SearchPageHeader";
import "./images.css";

function Images() {
  //Live api calls
  
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  // const data = Response;

  return (
    <div className="">
      <SearchPageHeader />

      {term && (
        <div >
          {data?.items.map((item) => (
            <div id="image" >
              <div >
                {item.pagemap?.metatags?.length > 0 &&
                  item.pagemap?.metatags[0]?.["og:image"] && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap.metatags[0]?.["og:image"]}
                    />
                  )}
              </div>
              <a href={item.link}>{item.displayLink}</a>
            </div>
          ))}
        </div>
      )}
      {/* <img src={data.items[0].pagemap.cse_image[0].src}/> */}
    </div>
  );
}

export default Images;
