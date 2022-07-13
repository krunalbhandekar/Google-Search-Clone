import React from 'react'
import SearchHeader from './SearchHeader'
import SearchSubHeader from './SearchSubHeader'

const Header = ({inputsearch,search,openvoicesearch}) => {
  return (
    <>
        <SearchHeader inputsearch={inputsearch} search={search} openvoicesearch={openvoicesearch}/>
        <SearchSubHeader/>
    </>
  )
}

export default Header