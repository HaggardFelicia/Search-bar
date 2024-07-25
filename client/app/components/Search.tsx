'use client'
import React, {ChangeEvent, useState} from 'react'
import { IoSearch } from "react-icons/io5";

// creating search props 
export type SearchProps = {
  onSearch: (value: string) => void
}

const Search = (props: SearchProps) => {
  // bringing in props and deconstructing it
  const {onSearch} = props;
  // setting up useState
  const [value, setValue] = useState('Search')
  // placeholder value
  const placeholderValue = "Search"
  // search function 
  const searchHandler = (event: ChangeEvent<HTMLInputElement>)=>{
    const {target} = event;
    setValue(target.value)
  }
  // function to handle keyboard enter key
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>)=>{
    if(event.key === "Enter"){
     onSearch(value)
     setValue('')
    }
  }

  return (
    <main>
      <div className='searchbar-container'>
        <input
          type='search'
          name='search'
          placeholder={placeholderValue}
          className='search-bar'
          onChange={(event)=>searchHandler(event)}
          onKeyDown={handleKeyDown}
        />
          <IoSearch className='search-icon'/>
      </div>
    </main>
  )
}

export default Search