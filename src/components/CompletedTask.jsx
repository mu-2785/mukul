const CompletedTask = ({ taskList }) => {
  return (
    <div className="m_completedTasks">
      <p>COMPLETED TASKS --</p>
      {taskList.map((item) => {
        console.log(item);
        return (
          <div className="m_completedTask">
            <input type="text" name="" id="" value={item.tName} readOnly />
            <input type="date" name="" id="" value={item.date} readOnly />
          </div>
        );
      })}
    </div>
  );
};
export default CompletedTask;
