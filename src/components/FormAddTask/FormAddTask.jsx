import { useState } from 'react';
import css from './FormAddTask.module.css';

const FormAddTask = ({ formSubmit, setAddCard }) => {
  const [values, setValues] = useState({
    title: '',
  });
  const handleChange = (e) => {
    const fieldName = e.target.name;
    setValues({ ...values, [fieldName]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.title) {
      formSubmit(values.title);
      setAddCard(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={css.column_form}>
      <input
        type="text"
        id="taskTitle"
        name="title"
        className={css.column_textarea}
        onChange={handleChange}
        value={values.title}
      />
      <button className={css.column_add_button} type="submit">
        Submit
      </button>
    </form>
  );
};
export default FormAddTask;
