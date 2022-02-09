import React,{useState} from "react";

function ListingCard({listing, handleDelete}) {
  const [favToggle, setFavToggle]=useState(false)

  function removeItem(){
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    }).then(res => res.json())
    .then(()=>handleDelete(listing))
  }

function handleFavToggle (){setFavToggle(!favToggle)}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favToggle ? (
          <button className="emoji-button favorite active" onClick={handleFavToggle}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavToggle}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={removeItem}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
