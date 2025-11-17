import React from 'react'

export default function Modal({ isOpen, onClose, destination }) {
  if (!isOpen || !destination) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <img src={destination.img} alt={destination.city} className="modal-img" />

        <h2>{destination.city}, {destination.country}</h2>
        <p className="modal-meta">
          Region: {destination.region} <br />
          Main Attraction: {destination.mainAttraction}
        </p>

        <p className="modal-desc">{destination.why}</p>

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
