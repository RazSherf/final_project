import React from 'react'
import style from '../NavBar/Navbar.module.css'
import Image from 'next/image';
import { FaUserGraduate } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className={style.navbar}>
        <div className={style.logo} >
        <a><FaUserGraduate size={15}/ > My Portfolio </a>
        </div>
        <div className={style.links}>
        <ul className={style.ul}>Home</ul>
        <ul className={style.ul}>About</ul>
        <ul className={style.ul} >Project</ul>
        <ul className={style.ul} >Contact</ul>
        </div>
  
  </nav>
);
    
}

export default Navbar
