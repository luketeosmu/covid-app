import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "99b0c49cfb104e6e89603bb6d93ae15b";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=sg&sortBy=popularity&q=covid&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};