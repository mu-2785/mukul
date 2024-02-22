import TodoItem from "./TodoItem";

const TodoList = ({ taskList, changeStatus }) => {
  return (
    <div className="m_todoList">
      <p>PENDING TASK --</p>
      {taskList.map((task, index) => {
        console.log(task);
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
