import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import WebFont from 'webfontloader';
import { Container } from 'react-bootstrap'

const NewsApi = () => {
    const apiKey = 'e3ef7f19b9e1e5d1f32a672d13689887';
    const baseURL = `https://gnews.io/api/v4/search?q=covid&country=sg&token=${apiKey}`;
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
    if (!data) return ( null );

    return (
        <div className="news-api">
            <Container >
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

            { data.totalResults > 0 &&
            <div className='news' style={{display:'flex', margin: '20px auto',  alignItems: 'center'}}>
                <div 
                style={{
                    paddingRight: '25px', 
                    borderRight: '1px black solid'
                }}>
                    <a href = {data.articles[0].url}>
                        <img src = {data.articles[0].image} 
                        style={{
                            height: '200px',
                            width: '300px',
                            overflow : 'hidden'
                        }}/>
                    </a>
                </div>

                <div className='m-3 mb-0'>
                    <a href = {data.articles[0].url}>
                    <h2 
                    style={{
                        textTransform: 'uppercase',
                        fontSize: '25px',
                        marginBottom: '10px'
                    }}>
                        {data.articles[0].title}
                    </h2>
                    </a>
                    <p style={{color:'#708090'}}>Description: {data.articles[0].description} (continue reading ...)</p>
                </div>
            </div>
            }

            {data.totalResults > 1 &&
            <div className='news' style={{display:'flex', margin: '20px auto',  alignItems: 'center'}}>
                <div 
                style={{
                    paddingRight: '25px', 
                    borderRight: '1px black solid'
                }}>
                    <a href = {data.articles[1].url}>
                        <img src = {data.articles[1].image} 
                        style={{
                            height: '200px',
                            width: '300px',
                            overflow : 'hidden'
                        }}/>
                    </a>
                </div>

                <div className='m-3 mb-0'>
                    <a href = {data.articles[1].url}>
                    <h2 
                    style={{
                        textTransform: 'uppercase',
                        fontSize: '25px',
                        marginBottom: '10px'
                    }}>
                        {data.articles[1].title}
                    </h2>
                    </a>
                    <p style={{color:'#708090'}}>Description: {data.articles[1].description} (continue reading ...)</p>
                </div>
            </div>
            }

            {data.totalResults > 2 &&
            <div className='news' style={{display:'flex', margin: '20px auto',  alignItems: 'center'}}>
                <div 
                style={{
                    paddingRight: '25px', 
                    borderRight: '1px black solid'
                }}>
                    <a href = {data.articles[2].url}>
                        <img src = {data.articles[2].image} 
                        style={{
                            height: '200px',
                            width: '300px',
                            overflow : 'hidden'
                        }}/>
                    </a>
                </div>

                <div className='m-3 mb-0'>
                    <a href = {data.articles[2].url}>
                    <h2 
                    style={{
                        textTransform: 'uppercase',
                        fontSize: '25px',
                        marginBottom: '10px'
                    }}>
                        {data.articles[2].title}
                    </h2>
                    </a>
                    <p style={{color:'#708090'}}>Description: {data.articles[2].description} (continue reading ...)</p>
                </div>
            </div>
            }

            {data.totalResults > 3 &&
            <div className='news' style={{display:'flex', margin: '20px auto',  alignItems: 'center'}}>
                <div 
                style={{
                    paddingRight: '25px', 
                    borderRight: '1px black solid'
                }}>
                    <a href = {data.articles[3].url}>
                        <img src = {data.articles[3].image} 
                        style={{
                            height: '200px',
                            width: '300px',
                            overflow : 'hidden'
                        }}/>
                    </a>
                </div>

                <div className='m-3 mb-0'>
                    <a href = {data.articles[3].url}>
                    <h2 
                    style={{
                        textTransform: 'uppercase',
                        fontSize: '25px',
                        marginBottom: '10px'
                    }}>
                        {data.articles[3].title}
                    </h2>
                    </a>
                    <p style={{color:'#708090'}}>Description: {data.articles[3].description} (continue reading ...)</p>
                </div>
            </div>
            }

            {data.totalResults > 4 &&
            <div className='news' style={{display:'flex', margin: '20px auto',  alignItems: 'center'}}>
                <div 
                style={{
                    paddingRight: '25px', 
                    borderRight: '1px black solid'
                }}>
                    <a href = {data.articles[4].url}>
                        <img src = {data.articles[4].image} 
                        style={{
                            height: '200px',
                            width: '300px',
                            overflow : 'hidden'
                        }}/>
                    </a>
                </div>

                <div className='m-3 mb-0'>
                    <a href = {data.articles[4].url}>
                    <h2 
                    style={{
                        textTransform: 'uppercase',
                        fontSize: '25px',
                        marginBottom: '10px'
                    }}>
                        {data.articles[4].title}
                    </h2>
                    </a>
                    <p style={{color:'#708090'}}>Description: {data.articles[4].description} (continue reading ...)</p>
                </div>
            </div>
            }

            { data.totalResults == 0 &&
                <div style={{color: "red", height: "50vh"}}> No COVID-19 news at the moment :) </div>
            }
            </Container>
        </div>
        
    );
}
 
export default NewsApi;