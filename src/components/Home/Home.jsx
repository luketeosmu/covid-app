import React from 'react'
import CovidStat from './CovidStat'
import NavBar from '../NavBar/NavBar'
import News from '../News/News'
import BriefNews from '../News/BriefNews';
import NewsArticle from '../News/NewsArticle';
import { NewsContext, NewsContextProvider } from "../News/NewsContext";
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <NavBar />
            <CovidStat />
            {/* <NewsContextProvider>
                <News />
            </NewsContextProvider> */}
            <Carousel>
                <Carousel.Item>
                    <NewsContextProvider>
                        <BriefNews/>
                    </NewsContextProvider>
                </Carousel.Item>
                </Carousel>
                            
        </div>
    )
}

export default Home
