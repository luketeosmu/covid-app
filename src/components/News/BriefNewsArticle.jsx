import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <a href = {data.url}>
      <img src = {data.urlToImage} style = {{height: "10%"}}/>
        </a>
      <span className="news__source">{data.source.name}</span>
    </div>
  );
}

export default NewsArticle;