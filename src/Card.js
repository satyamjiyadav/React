import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Card({ props }) {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="container mt-5">
      {showCard && (
        <div className="row">
          {props.map((user) => (
            <div className="col-md-4 mb-4" key={user.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Name: {user.name}</h5>
                  <p className="card-text">Age: {user.age}</p>
                  <p className="card-text">Location: {user.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {!showCard && (
        <div className="text-center">
          <h1>
            <strong>User Card</strong>
          </h1>
          <button
            className="btn btn-primary mt-4"
            onClick={() => setShowCard(true)}
          >
            Show Cards
          </button>
        </div>
      )}
      {showCard && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowCard(false)}
            className="btn btn-secondary"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
