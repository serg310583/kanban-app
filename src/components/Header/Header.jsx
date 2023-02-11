import Login from '../Login/Login';
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.header_title}>Awesome Kanban Board</h1>
      <Login />
    </header>
  );
}

export default Header;