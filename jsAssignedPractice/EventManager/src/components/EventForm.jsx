import { useState } from "react";

const EventForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  //const [time, setTime] = useState("");
  const [descr, setDescr] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [loc, setLoc] = useState("");
//   const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please add a title");
      return;
    }
    onAdd({ title, date, descr, organizer, loc });

    setTitle("");
    setDate("");
    setDescr("");
    setOrganizer("");
    setLoc("");
  };


  return (
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Event</label>
          <input
            type="text"
            placeholder="Add Event"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input
            type="text"
            placeholder="Add day & time"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>description</label>
          <input
            type="text"
            placeholder="add description"
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>organizer</label>
          <input
            type="text"
            placeholder="Add organizer"
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>location</label>
          <input
            type="text"
            placeholder="Add location"
            value={loc}
            onChange={(e) => setLoc(e.target.value)}
          />
        </div>
        <input type="submit" value="Save Event" className="btn btn-block" />
      </form>
  );
};

export default EventForm;