import React,{useState} from 'react'
import './App.css';
import { Routes,Route, useNavigate } from 'react-router-dom';
import Home from './components/index';
import SearchScreen from './components/SearchScreen';
import {searchData} from "./api/GoogleSearch"
import Voicesearch from './components/voicesearch/Voicesearch';
import {recognition} from "./api/VoiceRecognition"

function App() {
  const navigate=useNavigate()
   const [inputsearch, setinputsearch] = useState("india")
    const [googelData, setgoogelData] = useState({})
    const [voicesearch, setvoicesearch] = useState(false)

   const search=async(e)=>{
    setinputsearch(e)
    const data=await searchData(e)
    setgoogelData(data)
    navigate("/search")
      console.log('data:', data)
   }

   const openvoicesearch=()=>{
    setvoicesearch(true)
    recognition.start()
    recognition.onresult=(e)=>{
     const {transcript}=e.results[0][0]
     if(transcript){
      setvoicesearch(false)
      search(transcript)
     }
    }
   }

   const closevoicesearch=()=>{
    setvoicesearch(false)
    recognition.stop()
   }

  return (
    <div className="App">
      {voicesearch ? (<Voicesearch closevoicesearch={closevoicesearch}/>) : null}
      <Routes>
        <Route exact path="/" element={<Home search={search} openvoicesearch={openvoicesearch}/> } />
        <Route exact path="/search" element={<SearchScreen search={search} inputsearch={inputsearch} googelData={googelData} openvoicesearch={openvoicesearch}/>} />
      </Routes>
     
    </div>
  );
}

export default App;
