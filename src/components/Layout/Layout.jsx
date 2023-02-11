import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from 'react-router-dom'
import style from './Layout.module.css'

const Layout = ({ tasks }) => {
  return (
    <div className="App">
      <Header />
      <main className={style.main}>
        <Outlet />
      </main >
      <Footer tasks={tasks} />
    </div>
  );
}

export default Layout;