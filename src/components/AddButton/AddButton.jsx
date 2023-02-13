import css from './AddButton.module.css';
const AddButton = ({ toggleAddCard, prevTaskList }) => {
  return (
    <button
      type="submit"
      className={css.column_add_button}
      disabled={prevTaskList.length < 1}
      onClick={toggleAddCard}
    >
      Add card
    </button>
  );
};

export default AddButton;
