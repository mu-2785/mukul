import TodoList from "./TodoList";
import AddItem from "./AddItem";
import CompletedTask from "./CompletedTask";
import { useState } from "react";

const Content = () => {
  const [taskList, setTaskList] = useState([]);
  const [completedTaskList, setCompletedTaskList] = useState([]);
  function handleNewItem(itemName, itemDate) {
    setTaskList([...taskList, { tName: `${itemName}`, date: `${itemDate}` }  ]);
  }

  function setTaskComplete(indexID) {
    const arr = taskList.filter((item, index) => {
      if (index != indexID) {
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
        {taskList.length > 0 ? (
          <TodoList taskList={taskList} changeStatus={setTaskComplete} />
        ) : (
          <></>
        )}
        {completedTaskList.length > 0 ? (
          <CompletedTask taskList={completedTaskList} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Content;
