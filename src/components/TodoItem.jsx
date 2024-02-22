import { useState } from "react";

const TodoItem = ({ name, date,  indexID, changeStatus }) => {
  const [tStatus, setStatus] = useState(false);
  const handleStatusChange = (event) => {
    tStatus ? setStatus(false) : setStatus(true);
    setStatus(false);
    changeStatus(indexID);
  };

  return (
    <div className="m_todoItem">
      <button
        onClick={(event) => handleStatusChange(event)}
        className="m_complete"
      >
        DONE
      </button>
      <input
        type="text"
        name="itemName"
        id="itemName"
        className="m_itemName"
        value={name}
        readOnly
      />
      <input
        type="text"
        name="itemDate"
        id="itemDate"
        className="m_itemDate"
        value={date}
        readOnly
      />
    </div>
  );
};

export default TodoItem;
