import React from 'react'

const SearchBox = (props) => {
  return (
    <div className = 'offset-sm-3 col-sm-6'>
      <input className = 'form-control' 
      value = {props.value}
      onChange = {(event) => props.setSearchValue(event.target.value)}
      placeholder = 'Type to search a movie....'>

      </input>
      
    </div>
  )
}

export default SearchBox
