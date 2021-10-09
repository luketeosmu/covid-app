import React from 'react';
import News from './News'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer';
import { NewsContextProvider } from "./NewsContext";

function NewsMainPage() {
    return (
        <div>
            <NavBar/>
            <NewsContextProvider>
                <News/>
            </NewsContextProvider>
            <Footer />
        </div>
    )
}

export default NewsMainPage
