import { useContext, useRef, useState } from "react"
// import { TaskContext } from "../context/TaskContext"

const AddItem = (  { onNewItem }  )=>
{
    
    const [ itemName , setItemName ] = useState();
    // const [ itemDesc , setItemDesc ] = useState();
    const [ itemDate , setItemDate ] = useState();
    
    const handleNameChange = (event)=>
    {
        setItemName(event.target.value)
        console.log(event.target.value)
    }
    // const handleDescChange = (event)=>
    // {
    //     setItemDesc(event.target.value)
    // }
    const handleDateChange = (event)=>
    {
        setItemDate(event.target.value)
    }
    const handleAddButton = ()=>
    {

        const currentDate = new Date();
        var dd = currentDate.getDate();
        var mm = currentDate.getMonth()+1;
        var yyyy = currentDate.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
          }
          
          if (mm < 10) {
            mm = '0' + mm;
          }
          
          var today = yyyy + '-' + mm + '-' + dd;
        console.log(today)
        console.log(itemDate)

        itemName  && itemDate ?
        (
            itemDate >= today ?
            onNewItem(itemName  , itemDate )
            :
            console.log("GIVE VALID DATE" )
        )
        
        :
        console.log("GIVE VALID INPUT")
        setItemName("");
        // setItemDesc("");
        setItemDate("")
        // useState


    }

    return(
        <div className="m_AddItem">
            {/* <input type="checkbox" name="itemCompleted" id="itemCompleted" className="m_itemCompleted"/> */}
            <input type="text" name="itemName" id="itemName" className="m_itemName"  value={itemName} onChange={(event)=>{handleNameChange(event)}}/>
            {/* <input type="text" name="itemDesc" id="itemDesc" className="m_itemDesc"  value={itemDesc} onChange={(event)=>{handleDescChange(event)}}/> */}
            <input type="date" name="itemDate" id="itemDate" className="m_itemDate" value={itemDate} onChange={(event)=>{handleDateChange(event)}} />
            <button onClick={()=>{handleAddButton()}} className="m_addButton" >Add</button>
        </div>
    )
}

export default AddItem;