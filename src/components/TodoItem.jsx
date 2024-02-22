import { useState } from "react";

const TodoItem = ({ name  , date , status , indexID , changeStatus })=>
{
    const [tStatus , setStatus ] =  useState(false)

    const handleStatusChange = (event)=>
    {
        tStatus?setStatus(false):setStatus(true)
        console.log(event.target)
        setStatus(false)
        // console.log(event.target.value)
        console.log(indexID);
        changeStatus(indexID)
        changeStatus("")






    }



    return(
        <div className="m_todoItem">
            {/* <input type="button" name="itemCompleted" id="itemCompleted" className="m_itemCompleted" value={tStatus} onClick={(event)=>(handleStatusChange(event))} /> */}
            <button onClick={(event)=>(handleStatusChange(event))} className="m_complete" >DONE</button>
            <input type="text" name="itemName" id="itemName" className="m_itemName" value={name} readOnly />
            {/* <input type="text" name="itemDesc" id="itemDesc" className="m_itemDesc" value={desc} readOnly/> */}
            <input type="text" name="itemDate" id="itemDate" className="m_itemDate" value={date} readOnly/>
            
        </div>
    )
}

export default TodoItem;