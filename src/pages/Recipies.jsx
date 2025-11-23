import React from 'react'
import Inbox from '../components/Inbox'
import Cards from '../components/Cards'
import RecipeDetail from '../components/RecipeDetail'
import Sidebar from '../components/Sidebar'

function Recipies(){
    return (
        <>
            <RecipeDetail />
            <Sidebar />
            <Inbox />
            <Cards />  
        </>
    )
}

export default Recipies