import TodoItem from "./TodoItem";

const TodoList = ({ taskList, changeStatus }) => {                            //  this component contains all the todoItems (incomplete)
  return (
    <div className="m_todoList">
      <p>PENDING TASK --</p>
      {taskList.map((task, index) => {                                        //  map() is used to iterate the taskList  
        
        return (
          <TodoItem
            key={index}
            indexID={index}
            name={task.tName}
            date={task.date}
            changeStatus={changeStatus}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
