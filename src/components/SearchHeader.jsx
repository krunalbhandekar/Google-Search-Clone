import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

const SearchHeader = ({inputsearch,search,openvoicesearch}) => {
    const [searchText, setsearchText] = useState('')

    useEffect(()=>{
        setsearchText(inputsearch)
    },[inputsearch])

    const handlesubmit=(e)=>{
      e.preventDefault()

      if(/^[a-zA-z0-9].*/.test(searchText) || /^[a-zA-z0-9]+" ".*/.test(searchText)){
        search(searchText)
      }
    }

    const handlebutton=()=>{
      if(/^[a-zA-z0-9].*/.test(searchText) || /^[a-zA-z0-9]+" ".*/.test(searchText)){
        search(searchText)
      }
    }

  return (
    <div className='col-md-12 py-3 d-flex align-items-center'>
      <Link to={"/"} className="ms-5">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google Logo" height="30" />
      </Link>

      <div className='col-md-4 d-flex align-items-center justify-content-between border ms-3'>
        <form style={{width:"87%"}} onSubmit={handlesubmit}>
            <input type="search" 
            value={searchText}
            onChange={(e)=>setsearchText(e.target.value)} 
            className="form-control border-0 mr-2" style={{outline:"none",boxShadow:"none"}}/>
        </form>
        {/* {searchText ? <i className='fa fa-times'></i> : null} */}
        <i className='fa fa-microphone' onClick={()=>openvoicesearch()} style={{cursor:"pointer"}}></i>
        <i className='fa fa-search' onClick={handlebutton} style={{cursor:"pointer"}}></i>
      </div>
      <ul className='nav ms-auto mr-5'>
        <li className='nav-item'>
            <a href="/"  className='nav-link'>
                <i className='fa fa-th' style={{color:"#000"}}>Apps</i>
            </a>
        </li>
        <li className='nav-item'>
            <a href="/" className='nav-link'>
                <i className='fa fa-user' style={{color:"#000"}}>Apps</i>
            </a>
        </li>
       
      </ul>
    </div>
  )
}

export default SearchHeader