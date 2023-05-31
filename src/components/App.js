import { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = listings.filter((listing) =>
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (input) => {
    setSearchTerm(input);
  };

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((listings) => setListings(listings));
  }, []);
  return (
    <div className="app">
      <Header handleSearch={handleSearch} />
      <ListingsContainer listings={filteredItems} setListings={setListings} />
    </div>
  );
}

export default App;
