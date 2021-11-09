import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
        <div>
          <a href={data.url} style={{color: "black"}}><h3 className="news__title mb-3">{data.title}</h3>
          {/* <a href = {data.url}>
      <img src = {data.urlToImage} style = {{height: "10%"}}/>
        </a> */}
          <img
            src={data.image}
            style={{
              height: "200px",
              width: "350px",
              overflow: "hidden",
            }}
          ></img></a>
          <p className="news__desc">{data.description}</p>
          <span className="news__author">{data.author}</span> <br />
          <span className="news__published">{data.publishedAt}</span>
          <span className="news__source">{data.source.name}</span>
        </div>
    </div>
  );
}

export default NewsArticle;
