import TodoList from "./TodoList";
import AddItem from "./AddItem";
import CompletedTask from "./CompletedTask";
import { useState } from "react";

const Content = () => {

  const [taskList, setTaskList] = useState([]);                                      // taskList contains all the pending tasks
  const [completedTaskList, setCompletedTaskList] = useState([]);                    // completedTaskList contains all the completed tasks

  function handleNewItem(itemName, itemDate) {                                       // this function insert a new task in pending list
    setTaskList([...taskList, { tName: `${itemName}`, date: `${itemDate}` }  ]);     // spread opprator is used to include all the previous tasks of the pending list 
  }

  function setTaskComplete(indexID) {                                                // this function set a task as completed by inserting it to completedTaskList and removing it from pending list
    const arr = taskList.filter((item, index) => {
      if (index != indexID) {                                                        // filter the particular task which we want to set completed 
        return item;
      } else {
        return setCompletedTaskList([...completedTaskList, item]);
      }
    });
    setTaskList([...arr]);
  }
  return (
    <div className="m_appContent">
      <AddItem onNewItem={handleNewItem} />                                        
      <div className="m_listContainer">
        {taskList.length > 0 ? (                                                   //  condetional rendering is used to display pending task list(taskList)
          <TodoList taskList={taskList} changeStatus={setTaskComplete} />          //  taskList and setTaskComplete (behaviour) is passed as props 
        ) : (
          <></>
        )}
        {completedTaskList.length > 0 ? (                                          //  condetional rendering is used to display pending completedTaskList
          <CompletedTask taskList={completedTaskList} />                           //  completedTaskList is passed as props
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Content;
