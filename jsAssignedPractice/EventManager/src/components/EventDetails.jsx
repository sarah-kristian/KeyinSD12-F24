import React from "react";

const EventDetails = ({ event }) => {
  if (!event) {
    return <p>No event selected</p>;
  }

  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Organizer:</strong> {event.organizer}</p>
      <p><strong>Location:</strong> {event.location}</p>
    </div>
  );
};

export default EventDetails;