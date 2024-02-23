import { useState } from "react";
const AddItem = ({ onNewItem }) => {
  const [itemName, setItemName] = useState();
  const [itemDate, setItemDate] = useState();

  const handleNameChange = (event) => {
    setItemName(event.target.value);                                                    //  this function handle the state change of itemName
  };
  const handleDateChange = (event) => {
    setItemDate(event.target.value);                                                    //  this function handle the state change of itemDate
  };
  const handleAddButton = () => {
    const currentDate = new Date();                                                     //  this function check the inserted date must not be less then todays date
    var dd = currentDate.getDate();
    var mm = currentDate.getMonth() + 1;
    var yyyy = currentDate.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    var today = yyyy + "-" + mm + "-" + dd;

    itemName && itemDate                                                              //  ternarry opprator is used to ensure both the fields are populated
      ? itemDate >= today
        ? onNewItem(itemName, itemDate)
        : console.log("GIVE VALID DATE")
      : console.log("GIVE VALID INPUT");
    setItemName("");
    setItemDate("");
  };

  return (
                                                                    // the add item component
    <div className="m_AddItem">                                                   
      <input
        type="text"
        name="itemName"
        id="itemName"
        className="m_itemName"
        value={itemName}
        onChange={(event) => {
          handleNameChange(event);
        }}
        placeholder="ENTER TASK"
      />

      <input
        type="date"
        name="itemDate"
        id="itemDate"
        className="m_itemDate"
        value={itemDate}
        onChange={(event) => {
          handleDateChange(event);
        }}
      />
      <button
        onClick={() => {
          handleAddButton();
        }}
        className="m_addButton"
      >
        Add
      </button>
    </div>
  );
};

export default AddItem;
