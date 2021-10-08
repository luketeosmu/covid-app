import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import WebFont from 'webfontloader';

const NewsApi = () => {
    const apiKey = '99b0c49cfb104e6e89603bb6d93ae15b';
    const baseURL = `https://newsapi.org/v2/top-headlines?country=sg&category=health&sortBy=relevancy&q=covid&apiKey=${apiKey}`;
    const [data, setData] = useState(null);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        WebFont.load({
            google: {
            families: ['Libre Franklin', 'sans-serif']
            }
        });
    }, []);

    useEffect(() => {
        axios
        .get(baseURL).then((response) => {
            setData(response.data);
        })
        .catch(error => {
            setError(error);
        });
    }, []);

    if (error) return `Error: ${error.message}`;
    if (!data) return null;

    return (
        <div className="news-api">
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
                    LATEST COVID-19 NEWS - WORLDWIDE
            </h1>

            <div className='news' style={{display:'flex', margin: '20px auto',  alignItems: 'center'}}>
                <div 
                style={{
                    paddingRight: '25px', 
                    borderRight: '1px black solid'
                }}>
                    <a href = {data.articles[0].url}>
                        <img src = {data.articles[0].urlToImage} 
                        style={{
                            height: '200px',
                            width: '300px',
                            overflow : 'hidden'
                        }}/>
                    </a>
                </div>

                <div className='m-3 mb-0'>
                    <h2 
                    style={{
                        textTransform: 'uppercase',
                        fontSize: '25px',
                        marginBottom: '10px'
                    }}>
                        {data.articles[0].title}
                    </h2>

                    <p style={{color:'#708090'}}>Description: {data.articles[0].description} (continue reading ...)</p>
                </div>
            </div>

            <div className='news' style={{display:'flex', margin: '20px auto',  alignItems: 'center'}}>
                <div 
                style={{
                    paddingRight: '25px', 
                    borderRight: '1px black solid'
                }}>
                    <a href = {data.articles[6].url}>
                        <img src = {data.articles[6].urlToImage} 
                        style={{
                            height: '200px',
                            width: '300px',
                            overflow : 'hidden'
                        }}/>
                    </a>
                </div>

                <div className='m-3 mb-0'>
                    <h2 
                    style={{
                        textTransform: 'uppercase',
                        fontSize: '25px',
                        marginBottom: '10px'
                    }}>
                        {data.articles[6].title}
                    </h2>

                    <p style={{color:'#708090'}}>Description: {data.articles[6].description} (continue reading ...)</p>
                </div>
            </div>

            <div className='news' style={{display:'flex', margin: '20px auto',  alignItems: 'center'}}>
                <div 
                style={{
                    paddingRight: '25px', 
                    borderRight: '1px black solid'
                }}>
                    <a href = {data.articles[2].url}>
                        <img src = {data.articles[2].urlToImage} 
                        style={{
                            height: '200px',
                            width: '300px',
                            overflow : 'hidden'
                        }}/>
                    </a>
                </div>

                <div className='m-3 mb-0'>
                    <h2 
                    style={{
                        textTransform: 'uppercase',
                        fontSize: '25px',
                        marginBottom: '10px'
                    }}>
                        {data.articles[2].title}
                    </h2>

                    <p style={{color:'#708090'}}>Description: {data.articles[2].description} (continue reading ...)</p>
                </div>
            </div>

            <div className='news' style={{display:'flex', margin: '20px auto',  alignItems: 'center'}}>
                <div 
                style={{
                    paddingRight: '25px', 
                    borderRight: '1px black solid'
                }}>
                    <a href = {data.articles[3].url}>
                        <img src = {data.articles[3].urlToImage} 
                        style={{
                            height: '200px',
                            width: '300px',
                            overflow : 'hidden'
                        }}/>
                    </a>
                </div>

                <div className='m-3 mb-0'>
                    <h2 
                    style={{
                        textTransform: 'uppercase',
                        fontSize: '25px',
                        marginBottom: '10px'
                    }}>
                        {data.articles[3].title}
                    </h2>

                    <p style={{color:'#708090'}}>Description: {data.articles[3].description} (continue reading ...)</p>
                </div>
            </div>

            <div className='news' style={{display:'flex', margin: '20px auto',  alignItems: 'center'}}>
                <div 
                style={{
                    paddingRight: '25px', 
                    borderRight: '1px black solid'
                }}>
                    <a href = {data.articles[4].url}>
                        <img src = {data.articles[4].urlToImage} 
                        style={{
                            height: '200px',
                            width: '300px',
                            overflow : 'hidden'
                        }}/>
                    </a>
                </div>

                <div className='m-3 mb-0'>
                    <h2 
                    style={{
                        textTransform: 'uppercase',
                        fontSize: '25px',
                        marginBottom: '10px'
                    }}>
                        {data.articles[4].title}
                    </h2>

                    <p style={{color:'#708090'}}>Description: {data.articles[4].description} (continue reading ...)</p>
                </div>
            </div>
        </div>
        
    );
}
 
export default NewsApi;