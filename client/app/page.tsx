'use client'
import {useState} from 'react'
import Search from "./components/Search";
import SearchBar from './components/SearchBar';

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
      {/* search taking the handle search function */}
      <Search onSearch={handleSearch}/>
      <h1>Searched For:</h1>
      {/* displaying the search value on the page */}
      <p>{searchValue}</p>
      <br/>
      <br/>
      <SearchBar/>
      
    </main>
  );
}
