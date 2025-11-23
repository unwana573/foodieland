import React from 'react'
import Inbox from '../components/Inbox'
import Guide from '../components/Guide'
import Article from '../components/Article';
import Cards from '../components/Cards';

function About_us(){
    return (
        <>
            <Guide />
            <Article />
            <Inbox />
            <Cards />
        </>
    )
}

export default About_us;