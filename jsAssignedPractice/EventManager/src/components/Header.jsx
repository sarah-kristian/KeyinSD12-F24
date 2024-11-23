
import Button from "./Button";
import { FaCheckDouble } from "react-icons/fa";

const Header = ({ title, showAdd, onAdd }) => {
    return (
      <header className="header">
      <h1>
        <FaCheckDouble style={{ color: "green" }} />
        {title}
      </h1>
        <Button
          text={showAdd ? "Close" : "Add"}
          color={showAdd ? "red" : "green"}
          click={onAdd}
          showAdd={showAdd}
        />
        </header>
      );}

export default Header;