import React from 'react'
import Navbar from './Navbar'
import HomeScreen from './HomeScreen'

const Home = ({search,openvoicesearch}) => {
  return (
    <>
    <Navbar/>
    <HomeScreen search={search} openvoicesearch={openvoicesearch}/>
    </>
  )
}

export default Home