
import Main from "./components/Main/Main";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import TaskDetails from "./components/TaskDetails/TaskDetails";

function App() {
  const initialStste = JSON.parse(window.localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialStste);

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <Routes>
      <Route path='/' element={<Layout tasks={tasks} setTasks={setTasks} />}>
        <Route index element={<Main tasks={tasks} setTasks={setTasks} />} />
        <Route path={'/tasks/:taskId'} element={<TaskDetails tasks={tasks} setTasks={setTasks} />} />
      </Route>
    </Routes>

  );
}

export default App;
