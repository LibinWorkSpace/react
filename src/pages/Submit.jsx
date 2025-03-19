import React, { useState } from "react";
import "./Submit.css";

function Submit() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="submit-container">
      <h2>Submit Your Property</h2>
      {submitted ? <p className="success-message">Property submitted successfully!</p> : (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Property Title" required />
          <input type="text" placeholder="Location" required />
          <input type="number" placeholder="Price" required />
          <input type="file" required />
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Submit Property</button>
        </form>
      )}
    </div>
  );
}

export default Submit;
