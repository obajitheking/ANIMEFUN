import React from 'react'
import useSWR from 'swr';
import './Animeapp.css';
import Headerapp from './Headerapp';
import AnimeCard from './AnimeCard';

const API_URL = "https://kitsu.io/api/edge/trending/anime";

function Animeapp() {
    const fetcher = (url) => fetch(url).then(res => res.json());
    const {data, error} = useSWR(API_URL, fetcher);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
  

    console.log(data);

    return (
        <div className="anime-app">
            <Headerapp data={data} error={error} />
            <h1 className='animeh1'>Trending Anime</h1>
            <AnimeCard data={data} error={error} />
            
            
        </div>
        
    )
}
export default Animeapp;
