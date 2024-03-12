import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={style.header}>
      <div>
        <Link to="" className={style.logo}>
          ОрГМУ
        </Link>
      </div>
      <div className={style.menu}>
        <ul className={style.menuList}>
          <li>
            <Link to="/C1">О нас</Link>
          </li>
          <li>
            <Link to="/advantages">Преимущества</Link>
          </li>
          <li>
            <Link to="/Spaces">Пространства</Link>
          </li>
          <li>
            <Link to="">Бронирование</Link>
          </li>
          <li>
            <Link to="">Контаты</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
