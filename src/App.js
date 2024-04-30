
import { useState } from 'react';
import Record from './data.json';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col items-center container">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Enter movietitle here ! "
          aria-label="Full name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
       
      </div>
      {Record && Record.filter((record) => {
        return search.toLowerCase() === '' || record.movietitle.toLowerCase().includes(search.toLowerCase());
      }).map(record => (
        <div key={record.id} className=" shadow-2xl flex flex-col justify-center ml-28 md:ml-0 p-4 m-6 w-[600px] md:w-[900px] rounded sh
      ">
          <strong className="text-center">{record.movietitle}</strong>
          <div className="flex flex-wrap justify-around mt-4">
            <div className="flex flex-col items-center">
            <strong><h3>Languages</h3> </strong>
              {record.movielanguages.map(language => (
                <span key={language}>{language}</span>
              ))}
            </div>
            <div className="flex flex-col items-center">
            <strong><h3>Countries</h3></strong>
              {record.moviecountries.map(country => (
                <span key={country}>{country}</span>
              ))}
            </div>
            <div className="flex flex-col items-center">
              <strong><h3>Genres</h3></strong>
              {record.moviegenres.map(genre => (
                <span key={genre}>{genre}</span>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4 pt-4 pb-4">
            <img src={record.moviemainphotos[0]} alt={record.movietitle} className="max-h-96" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;




