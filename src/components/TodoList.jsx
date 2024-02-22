import TodoItem from "./TodoItem";


const TodoList = ({ taskList , changeStatus  }) =>
{
    // console.log(taskList);
    return(
        <div className="m_todoList">
            PENDING LIST
            {/* <TodoItem></TodoItem> */}
            {
                taskList.map(( task , index)=>{
                    console.log(task)
                    return(<TodoItem key={index} indexID={index}  name={task.tName} date={task.date} status={task.status} changeStatus={changeStatus} ></TodoItem>)
                })
            }
        </div>
    )
}

export default TodoList;