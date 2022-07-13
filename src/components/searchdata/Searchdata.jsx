import React from 'react'
import Data from './Data'

const Searchdata = ({googleData}) => {
   

  return (
    <div className='col-md-12 py-3 px-5 ms-1'>
      <p className='small text-dark'>
       All {googleData?.searchInformation.formattedTotalResults} results found in {googleData?.searchInformation.formattedSearchTime} sec
      </p>
      {googleData?.items.map((data,id)=>(
        <Data data={data} key={id}/>
      ))}
    </div>
  )
}

export default Searchdata
