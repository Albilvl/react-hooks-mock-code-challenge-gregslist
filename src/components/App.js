import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const[listings, setListings] =useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() =>{
    fetch("http://localhost:6001/listings")
    .then(res=>res.json())
    .then(listingsArray => setListings(listingsArray))
  }, [])
  
  function handleSearch (e) {setSearchTerm(e.target.value)}
  
  const filteredListings= listings.filter(
    listing=> { 
      return listing.description.toLowerCase().includes(searchTerm.toLowerCase())
    }
    )

    function handleDelete (listing) {
      setListings(listings.filter(list=>{
       return  list.id !== listing.id
      }))
    }
 


  return (
    <div className="app">
      <Header handleSearch={handleSearch} searchTerm={searchTerm}/>
      <ListingsContainer listings={filteredListings} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
