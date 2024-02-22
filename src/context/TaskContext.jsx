import { createContext, useState } from "react";
import Content from "../components/Content";

export const TaskContext = createContext();

export const TaskContextProvider = ()=>
{
    const [taskList , setTaskList] = useState([]);

    // const addTask = ()=>
    // {
    //     setTaskList(...taskList , )
    // }



    const value = {
        taskList , setTaskList
    };

    return (
        <TaskContext.Provider value={value}>
            {/* children components */}
            {/* <App></App> */}
            <Content></Content>
        </TaskContext.Provider>
    )

}

export default TaskContextProvider;