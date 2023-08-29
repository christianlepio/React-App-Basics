import React from 'react';
import style from "./NavbarComponent.module.css";

const NavbarComponent = () => {
  return (
    <nav className={style.navvy}>
        <div className={style.logo}>
            <h2>Logo</h2>
        </div>
        <ul className={style['nav-ul']}>
            <li>
                <a style={{borderBottom: '2px solid white', color: 'yellow'}}>Home</a>
            </li>
            <li>
                <a>About</a>
            </li>
            <li>
                <a>Contact</a>
            </li>
        </ul>
    </nav>
  );
}

export default NavbarComponent