import style from './Login.module.css'
import UserAvatar from '../../images/user-menu.png';
import { useEffect, useState } from 'react';

function useDelayUnmount(isMounted, delayTime) {
  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (isMounted && !showDiv) {
      setShowDiv(true);
    } else if (!isMounted && showDiv) {
      timeoutId = setTimeout(() => setShowDiv(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, showDiv]);
  return showDiv;
}
const mountedStyle = { animation: "inAnimation 250ms ease-in" };
const unmountedStyle = {
  animation: "outAnimation 270ms ease-out",
  animationFillMode: "forwards"
};

export default function Login() {
  const [isMounted, setIsMounted] = useState(false);
  const showDiv = useDelayUnmount(isMounted, 250);

  return (
    <div className={style.login_wrapper} onClick={() => setIsMounted(!isMounted)}>
      <img src={UserAvatar} alt="user avatar" className={style.user_avatar} />
      <div className={isMounted ? style.icon + ' ' + style.isopen : style.icon} />
      {showDiv &&
        <div
          className={style.login_dropdown}
          style={isMounted ? mountedStyle : unmountedStyle}
        >
          <button className={style.login_dropdown_button}>Profile</button>
          <button className={style.login_dropdown_button}>Log Out</button>
        </div>

      }
    </div>
  );
}







