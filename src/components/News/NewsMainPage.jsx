import React from 'react';
import News from './News'
import NavBar from '../NavBar/NavBar'
import { NewsContextProvider } from "./NewsContext";

function NewsMainPage() {
    return (
        <div>
            <NavBar/>
            <NewsContextProvider>
                <News/>
            </NewsContextProvider>
        </div>
    )
}

export default NewsMainPage
