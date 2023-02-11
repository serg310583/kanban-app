import style from './AddButton.module.css'
const AddButton = ({ toggleAddCard, prevTaskList }) => {
  return (
    <button
      type='submit'
      className={style.column_add_button}
      disabled={Boolean(prevTaskList.length < 1)}
      onClick={toggleAddCard} >Add card</button>
  );
}

export default AddButton;