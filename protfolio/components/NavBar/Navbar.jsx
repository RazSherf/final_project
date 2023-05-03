import React from 'react'
import style from '../NavBar/Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={style.navbar}>
    <a className={style.navbar__logo} href="/">
      My Portfolio
    </a>
    <ul className={style.navbar__links}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/project">Project</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
);
  
}

export default Navbar
