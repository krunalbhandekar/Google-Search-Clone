import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Header from './Header';
import Searchdata from './searchdata/Searchdata';

const SearchScreen = ({inputsearch,googelData,search,openvoicesearch}) => {
  const navigate=useNavigate()
  console.log('googelData:', googelData)

   useEffect(()=>{
    if(inputsearch==="" || googelData==="{}"){
        navigate("/")
    }
   },[inputsearch])
   
  return (
    <>
    <Header inputsearch={inputsearch} search={search} openvoicesearch={openvoicesearch}/>
    <div className='container'>
      <div className='row'>
        <Searchdata googleData={googelData}/>

      </div>

    </div>
    </>
  )
}

export default SearchScreen