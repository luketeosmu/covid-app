import React, { useContext, useEffect } from "react";
import { NewsContext } from "./NewsContext";
import NewsArticle from "./NewsArticle";
import Footer from "../Footer/Footer";
import WebFont from 'webfontloader';
import { Container } from 'react-bootstrap'

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  useEffect(() => {
    WebFont.load({
        google: {
        families: ['Libre Franklin', 'sans-serif']
        }
    });
}, []);

  return (
    <div>
      <Container>
      <h1 className='title'
            style={{
                color:'white', 
                fontWeight:'800', 
                padding: '10px', 
                fontFamily: 'Libre Franklin', 
                display: 'block', 
                backgroundColor:'#b50001', 
                margin: '0px', 
                fontSize: '20px', 
                textAlign:'center'}}>
                    LATEST COVID-19 NEWS - SINGAPORE
            </h1>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading..."}
      </div>
      </Container>
    </div>
  );
}

export default News;