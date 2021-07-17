import React from 'react'
import { Button } from './Button'
import '../App.css';
import './HeadSection.css';

function HeadSection() {
    return (
        <div className='head-container'>
            <video src="/videos/video1.mp4" autoPlay muted loop></video>
            <h1>KIMETSU NO YAIBA</h1>
            <p>MUGEN REGEN</p>
            <div className="head-btn">
            <Button className='btn
            +' buttonSize='btn-large' buttonStyle='btn-outline'>GET STARTED</Button>
            <Button className='btn' buttonSize='btn-large' buttonStyle='btn-primary'>
            WATCH TRAILER <i className='far fa-play-circle'></i>
            </Button>

            </div>
        </div>
    )
}

export default HeadSection;
