import React from 'react'
import {Link} from "react-router-dom"

const Data = ({data}) => {
  return (
    <div className='col-md-12'>
        <a href={`https://${data.displayLink}`} target="_blank" style={{color:"black",textDecoration:"none"}}>{data.displayLink}</a>{" "} <i className='fa fa-angle-down'></i>
        <a href={data.formattedUrl} target="_blank" style={{textDecoration:"none",color:"#00007c",fontSize:"22px",fontWeight:"400",lineHeight:"27px"}}><p>{data.title}</p></a>
        <div style={{marginTop:"-15px",marginBottom:"-5px"}}>
        <p >{data.snippet}</p>
        </div>
    </div>
  )
}

export default Data