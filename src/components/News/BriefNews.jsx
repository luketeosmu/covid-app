import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import BriefNewsArticle from "./BriefNewsArticle";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <h1 className="head__text">COVID NEWS</h1>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <BriefNewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;