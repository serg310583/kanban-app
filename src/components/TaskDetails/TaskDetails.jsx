import style from './TaskDetails.module.css'
import { ReactComponent as CloseDetails } from '../../images/closeDetails.svg';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

const TaskDetails = ({ tasks, setTasks }) => {
  const { taskId } = useParams();
  const task = JSON.parse(window.localStorage.getItem('tasks')).find(task => task.id === taskId)

  const [description, setDescription] = useState(task.description ? task.description : "This task has no description");

  const addDescription = () => {
    const tasksCopy = tasks.map(el => {
      if (el.id === task.id) {
        el.description = description
      }
      return el
    })
    setTasks(tasksCopy);
  }

  return (
    <div className={style.details_wrapper} >
      {task ? (<>
        <div className={style.details_header}>
          <h2 className={style.details_title}>{task.title}</h2>
          <Link to='/'>
            <CloseDetails className={style.details_close_btn} />
          </Link>
        </div>
        <textarea
          className={style.details_description}
          onChange={(e) => { setDescription(e.target.value) }}
          onFocus={() => { description === "This task has no description" && setDescription('') }}
          onBlur={addDescription}
          value={description} />
      </>
      ) : (<div className={style.details_not_found} >
        <h2 className={style.details_title}>Task with ID {taskId} not found</h2>
        <Link to='/'>
          <CloseDetails className={style.details_close_btn} />
        </Link>
      </div>
      )
      }
    </div >
  );
}

export default TaskDetails;