import { useState } from "react";
import EventForm from "./EventForm";

function AddEvent(){

  const addEvent = async (event) => {
    // const id = Math.floor(Math.random() * 10000 + 1);

    // to make a POST request to our json server, for posting the new event that was passed to addEvent function....
    const res = await fetch("http://localhost:5500/events", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(event),
    });

    const data = await res.json();
    setEvents([...events, data]);
    // ...tasks means bring previous tasks... ,data means now update the tasks with this data ....
    // FROM HERE WE WILL START NEXT WEEK...

    // const id = tasks.length + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  return (
    <EventForm onAdd={addEvent} />
  );
};


export default AddEvent;