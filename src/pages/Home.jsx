import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Chef from '../components/Chef'
import RecipeGrid from '../components/RecipeGrid'
import InstagramFeed from '../components/Instagramfeed'
import Recipes from '../components/Recipes'
import Inbox from '../components/Inbox'

function Home(){
    return (
        <>
            <Hero />
            <Categories />
            <RecipeGrid />
            <Chef />
            <InstagramFeed />
            <Recipes />
            <Inbox />
        </>
    )
}

export default Home