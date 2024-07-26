'use client'
import {useState} from 'react'
import Search from "./components/Search";
import SearchBar from './components/SearchBar.jsx';

export default function Home() {

  // setting up useState 
  const [searchValue, setSearchValue] = useState("")
  // handle search function that sets the search value
  const handleSearch = (value: string) =>{
    console.log(value)
    setSearchValue(value)
  }

  return (
    <main className="body-container">
      <p className='searchbar-header'>TypeScript Search Bar</p>
      {/* search taking the handle search function */}
      <Search onSearch={handleSearch}/>
      <h3>Searched For:</h3>
      {/* displaying the search value on the page */}
      <p>{searchValue}</p>
      <br/>
      <br/>
      <p className='searchbar-header'>JavaScript Search Bar</p>
      <SearchBar/>

    </main>
  );
}
