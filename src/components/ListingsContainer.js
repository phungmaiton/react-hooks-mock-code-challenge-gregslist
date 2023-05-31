import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {
  const onDelete = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => setListings(listings.filter((listing) => listing.id !== id)));
  };
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            id={listing.id}
            description={listing.description}
            image={listing.image}
            location={listing.location}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
