// EventList: Displays all events with a "Delete" and "Edit" button for each.
// Fetch data from the backend using GET.
// Map over events and display each event with its "Delete" button.


import React from 'react';

function EventList(props) {
    // Destructure props
    const { events, onDelete } = props;
  
    return (
      <div>
        <h2>All Events</h2>
        <ul>
          {events.map(function (event) {
            return (
              <li key={event.id}>
                <h3>{event.title}</h3>
                <p>{event.date} at {event.time}</p>
                <p>{event.location}</p>
                <p>{event.description}</p>
                <p>Organized by: {event.organizer}</p>
                <button onClick={() => onDelete(event.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  
  export default EventList;