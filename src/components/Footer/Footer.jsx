import css from './Footer.module.css';

const Footer = ({ tasks }) => {
  return (
    <footer className={css.footer}>
      <div className={css.tasks_statistic}>
        <p>
          Active tasks:{' '}
          {tasks.filter((task) => task.status === 'backlog').length}
        </p>
        <p>
          Finished tasks:{' '}
          {tasks.filter((task) => task.status === 'done').length}
        </p>
      </div>
      <p className={css.contacts}>
        Kanban board by{'<NAME> '}, {'<YEAR>'}
      </p>
    </footer>
  );
};

export default Footer;
