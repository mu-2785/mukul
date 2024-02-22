import TodoList from "./TodoList";
import AddItem from "./AddItem";
import CompletedTask from "./CompletedTask";
import { useState } from "react";




const Content = ()=>
{

    // const [taskList , setTaskList] = useState([{tNam7e:"",tDesc:""}]);
    const [taskList , setTaskList] = useState([]);
    const [completedTaskList , setCompletedTaskList ] = useState([]);
    function  handleNewItem(itemName  , itemDate , status)
    {
        console.log(itemName ,   itemDate , status);
        
        setTaskList([...taskList , {tName:`${itemName}`  , date:`${itemDate}` , status:`${status}` }])
        
        console.log(completedTaskList.length)

    }

    function setTaskComplete(indexID)
    {
        
        console.log(taskList[indexID]);
        const arr =  taskList.filter((item , index)=>{if(index!=indexID)
        {
            return(item)
        }
        else
        {
            console.log(item)
            return(setCompletedTaskList([...completedTaskList , item]))
        }
        })

        console.log(arr);
        setTaskList([...arr])
        console.log("complete _ " , completedTaskList);

    }

    return(
        <div className="m_appContent">
            
            <AddItem onNewItem={handleNewItem} ></AddItem>

            <div className="m_listContainer">
                {
                    taskList.length>0? <TodoList taskList={taskList} changeStatus={setTaskComplete} ></TodoList> : <></>
                }

            

{
    completedTaskList.length>0 ? <CompletedTask taskList={completedTaskList} ></CompletedTask> : <></>
}
            </div>

            


            
        </div>
    )
}

export default Content;