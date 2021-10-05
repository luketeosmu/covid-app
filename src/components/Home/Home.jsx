import React from 'react'
import CovidStat from './CovidStat'
import NavBar from '../NavBar/NavBar'
import News from '../News/News'
import { NewsContextProvider } from "../News/NewsContext";

const Home = () => {
    return (
        <div>
            <NavBar />
            <CovidStat />
            <NewsContextProvider>
        <News />
        </NewsContextProvider>
        </div>
    )
}

export default Home
