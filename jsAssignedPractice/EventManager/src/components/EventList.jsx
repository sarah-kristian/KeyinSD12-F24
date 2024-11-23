import Button from "./Button";

const EventList = ({ events, onDelete, onSelect }) => {
  if (events.length === 0) return <p>No events to show</p>;

  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          <span onClick={() => onSelect(event)} style={{ cursor: "pointer" }}>
            {event.title}
          </span>
          <Button
            text={"Delete"}
            color={"green"}
            click={() => onDelete(event.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default EventList;
