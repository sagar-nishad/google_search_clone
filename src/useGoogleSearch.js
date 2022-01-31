import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "bfe5e6b96b4f3dc7f";

// the below code is called a custom hook
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // we are making an async function to ask for some json file
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
