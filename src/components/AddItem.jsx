import { useState } from "react";
const AddItem = ({ onNewItem }) => {
  const [itemName, setItemName] = useState();
  const [itemDate, setItemDate] = useState();
  const [  errorMsg , setErrorMsg ] = useState();

  const today = ()=>
  {
    const currentDate = new Date();                                                     //  this function check the inserted date must not be less then todays date
    let dd = currentDate.getDate();
    let mm = currentDate.getMonth() + 1;
    let yyyy = currentDate.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    let today = yyyy + "-" + mm + "-" + dd;
    return today;
  }
  
  const todayDate = today();

  const handleAddButton = () => {
    

    itemName && itemDate                                                              //  ternarry opprator is used to ensure both the fields are populated
      ? itemDate >= todayDate
        ? (onNewItem(itemName, itemDate), setItemName(""), setItemDate(""),setErrorMsg("")  )
        : setErrorMsg("DATE CAN NOT BE LESS THEN TODAY")
      : setErrorMsg("PLEASE GIVE A VALID TASK NAME")
    
  };

  return (

    <div className="m_addConsole">


<div className="m_AddItem">                                                   
      <input
        type="text"
        name="itemName"
        id="itemName"
        className="m_itemName"
        value={itemName}
        onChange={(event) => {
          setItemName(event.target.value);                                                    //  this function handle the state change of itemName
          
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
          setItemDate(event.target.value);                                                    //  this function handle the state change of itemDate
          
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

    <div className="m_error">
        <p className="m_errorMsg" > {errorMsg} </p>
      </div>


    </div>
                                                                    // the add item component
    
  );
};

export default AddItem;
