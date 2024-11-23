import './App.css';
import { useState, useEffect } from "react";
import Header from './components/Header';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import EventDetails from './components/EventDetails';

function App() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); // Track selected event
  const [showAdd, setShowAdd] = useState(false);

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5500/events");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchEvents();
  }, []);

  // Add a new event
  const addEvent = async (event) => {
    const res = await fetch("http://localhost:5500/events", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(event),
    });

    const data = await res.json();
    setEvents([...events, data]);
  };

  // Delete an event
  const deleteEvent = async (id) => {
    await fetch(`http://localhost:5500/events/${id}`, {
      method: "DELETE",
    });
    setEvents(events.filter((event) => event.id !== id));
  };

  // Select an event to view details
  const selectEvent = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="container">
      <Header
        title="Event Manager"
        onAdd={() => setShowAdd(!showAdd)}
        showAdd={showAdd}
      />
      {showAdd && <EventForm onAdd={addEvent} />}
      <EventList events={events} onDelete={deleteEvent} onSelect={selectEvent} />
      <EventDetails event={selectedEvent} /> {/* Show event details */}
    </div>
  );
}

export default App;
