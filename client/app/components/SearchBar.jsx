'use client'
import {useMemo, useRef, useState} from 'react'
import { IoSearch } from "react-icons/io5";


export default function SearchBar() {
  // placeholder value
  const placeholderValue = "Search..."
  const inputPlaceholderValue = "Add data to search for here..."

  // setting up useState
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')

  // setting up useRef
  const searchRef = useRef()

  // filtering items
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
       })
    }, [items, query])
    
    // onSubmit fumction, prevents default
  function onSubmit(e) {
    e.preventDefault()
    // sets value to current value of searchRef if the value is empty it returns otherwise it add to the setItems useState
    const value = searchRef.current.value
    if (value === "") return
    setItems((prev)=> {
        return [...prev, value]
    })
    // setting the current searchRef to empty
    searchRef.current.value = ""
  }

  function returnItems(){
    if(query === '' ) {
        return (
            <div>
                <h1>Data:</h1>
                {items.map(item=>(
                <div className="search-results" key={item}>{item}</div>
                ))}
            </div>
        )
    }
    else {
         return(
            <div>
                <h1>Results:</h1>
                {(filteredItems.map(item => (
                    <div className='search-results' key={searchRef}>{item}</div>
                )))}
            </div>
        )
    }
  }

  return (
    <>
      <div className='searchbar-container'>
        <input
          //setting the value to query 
          value={query}
          // onChange setting the setQuery to the event target value
          onChange={e => setQuery(e.target.value)}
          type="search"
          className='search-bar'
          placeholder={placeholderValue}
        />
        <IoSearch className='search-icon'/>
      </div>
      {/* form onSubmit is declared above  on lines 20-30*/}
      <form onSubmit={onSubmit} className='data-input-form'>
        <input 
        // setting the ref to searchRef which is defined on line 12
          ref={searchRef} 
          type="text" 
          className='data-input'
          placeholder={inputPlaceholderValue}
          />
          {/* add button for the input of new items */}
        <button 
          type="submit" className='add-button'>
          Add
        </button>
      </form>
      {/* calling the items to return . defined above on lines  34-55*/}
      {returnItems()}
    </>
  )
}