// EventForm: Handles both "Add" functionality.

import React, { useState } from 'react';

const EventForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
    organizer: '',
    location: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      title: '',
      date: '',
      time: '',
      description: '',
      organizer: '',
      location: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Event Title" required />
      <input name="date" value={formData.date} onChange={handleChange} type="date" required />
      <input name="time" value={formData.time} onChange={handleChange} type="time" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input name="organizer" value={formData.organizer} onChange={handleChange} placeholder="Organizer" required />
      <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;


// const AddTask = ({ onAdd }) => {
//   const [text, setText] = useState("");
//   const [day, setDay] = useState("");
//   const [reminder, setReminder] = useState(false);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (!text) {
//       alert("Please add a task");
//       return;
//     }
//     onAdd({ text, day, reminder });

//     setText("");
//     setDay("");
//     setReminder(false);
//   };

//   return (
//     <form className="add-form" onSubmit={onSubmit}>
//       <div className="form-control">
//         <label>Task</label>
//         <input
//           type="text"
//           placeholder="Add Task"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//       </div>
//       <div className="form-control">
//         <label>Day & Time</label>
//         <input
//           type="text"
//           placeholder="Add day & time"
//           value={day}
//           onChange={(e) => setDay(e.target.value)}
//         />
//       </div>
//       <div className="form-control-check">
//         <label>Set Reminder</label>
//         <input
//           type="checkbox"
//           value={reminder}
//           onChange={(e) => setReminder(e.currentTarget.checked)}
//           checked={reminder}
//         />
//       </div>
//       <input type="submit" value="Save Task" className="btn btn-block" />
//     </form>
//   );
// };

// export default AddTask;