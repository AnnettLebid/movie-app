import React from 'react'

const SearchBox = (props) => {
  return (
    <div className = 'offset-sm-3 col-sm-6 mb-3'>
      <input className = 'form-control search-bar' 
      value = {props.value}
      onChange = {(event) => props.setSearchValue(event.target.value)}
      placeholder = 'Type to search a movie....'>
      </input>      
    </div>
  )
}

export default SearchBox
