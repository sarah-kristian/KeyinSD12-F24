import EventList from './components/EventList';
//import EventForm from './components/EventForm';
//import EventDetails from './components/EventForm';

import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    // Initialize state
    const [showAddEvent, setShowAddEvent] = useState(false);
    const [events, setEvents] = useState([]);


    // fetch data from an API

    useEffect(() => {
      const getEvents = async () => {
        const eventsFromServer = await fetchEvents();
  
        setEvents(eventsFromServer);
      };
      getEvents();
    }, []);

      // API for getting data from the server
            // When this function is called:
            // It sends an HTTP GET request to the server at http://localhost:5000/events.
            // Waits for the response from the server.
            // Parses the response as JSON.
            // Updates the events state in React with the fetched data.

      const fetchEvents = async () => {
        const res = await fetch("http://localhost:5000/events");
        const data = await res.json();
        return data;
      };
      
// fetch ONE event from event from the server...

const fetchEvent = async (id) => {
  const res = await fetch(`http://localhost:5000/events/${id}`);
  const data = await res.json();
  return data;
};


// TO delete a task from tasks...
const deleteEvent = async (id) => {
  await fetch(`http://localhost:5000/events/${id}`, {
    method: "DELETE",
  });
  // update our UI
  setEvents(event.filter((event) => event.id !== id));
};


// TO toggle the reminder of each event
const toggleReminder = async (id) => {
  const eventToToggle = await fetchEvent(id);
  const updEvent = { ...eventToToggle, reminder: !eventToToggle.reminder };

  const res = await fetch(`http://localhost:5000/events/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updEvent),
  });

  const data = await res.json();
  setEvents(
    events.map((event) =>
      // task.id === id ? { ...task, reminder: !task.reminder } : task
      //event.id === id ? { ...event, reminder: data.reminder } : event
      event.id === id
    )
  );
};


  // To add a event in current events
  const addEvent = async (event) => {
    // const id = Math.floor(Math.random() * 10000 + 1);

    // to make a POST request to our json server, for posting the new event that was passed to addEvent function....
    const res = await fetch("http://localhost:5000/events", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(event),
    });

    const data = await res.json();
    setEvents([...events, data]);
    // ...events means bring previous events... ,data means now update the events with this data ....

    // const id = events.length + 1;
    // const newTask = { id, ...event };
    // setEvents([...events, newEvent]);
  };



  return (
    <Router>
      <div className="container">
        <Header
          title="Event Manager"
          onAdd={() => setShowAddEvent(!showAddEvent)}
          showAdd={setShowAddEvent}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddEvent && <AddEvent onAdd={addEvent} />}
                {events.length > 0 ? (
                  <Events
                    events={events}
                    onDelete={deleteEvent}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No events to show!!!"
                )}
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;