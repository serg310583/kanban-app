import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = ({ tasks }) => {
  return (
    <div className="App">
      <Header />
      <main className={css.main}>
        <Outlet />
      </main>
      <Footer tasks={tasks} />
    </div>
  );
};

export default Layout;
