import { useState } from "react";

const TodoItem = ({ name, date,  indexID, changeStatus }) => {
  const [tStatus, setStatus] = useState(false);                                     //  tStatus holds the state of complete task button
  const handleStatusChange = (event) => {                                           //  tStatus manage the state of complete task button
    tStatus ? setStatus(false) : setStatus(true);
    setStatus(false);
    changeStatus(indexID);                                                          //  the index is passed to set element as completed
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
