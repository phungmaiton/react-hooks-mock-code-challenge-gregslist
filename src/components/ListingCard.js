import { useState } from "react";

function ListingCard({ id, description, image, location, onDelete }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button
          className={
            favorite ? "emoji-button favorite active" : "emoji-button favorite"
          }
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? "★" : "☆"}{" "}
        </button>

        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => onDelete(id)}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
