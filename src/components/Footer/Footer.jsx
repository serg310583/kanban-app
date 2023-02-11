import style from './Footer.module.css';

const Footer = ({ tasks }) => {
  return (
    <footer className={style.footer}>
      <div className={style.tasks_statistic}>
        <p>
          Active tasks:{' '}
          {tasks.filter((task) => task.status === 'backlog').length}
        </p>
        <p>
          Finished tasks:{' '}
          {tasks.filter((task) => task.status === 'done').length}
        </p>
      </div>
      <p className={style.contacts}>
        Kanban board by{' '}
        <a className={style.telegram} href="https://t.me/Sergey310583">
          Sergey Tzelovalnikov
        </a>
        , 2023
      </p>
    </footer>
  );
};

export default Footer;
