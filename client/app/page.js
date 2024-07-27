'use client'
import SearchBar from './components/SearchBar.js';

export default function Home() {

  return (
    <main className="body-container">
      <div className="inner-container">
        <h1 className='searchbar-header'>JavaScript Search Bar</h1>
        <SearchBar className=''/>
      </div>
    </main>
  );
}