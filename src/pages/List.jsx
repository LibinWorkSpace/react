import React from "react";
import "./List.css";
import {Link} from "react-router-dom";
function List() {
  return (
    <div className="list-container">
      <h2>Available Properties</h2>
      <Link to="/home">Home</Link>
      <div className="property-grid">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="property-card">
            <img src={`https://source.unsplash.com/400x300/?house,${item}`} alt="Property" />
            <h3>Luxury Home {item}</h3>
            <p>Price: ${(item * 100000).toLocaleString()}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
