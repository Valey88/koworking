import React from "react";
import style from "./Cmp3.module.css";
import { Link } from "react-router-dom";
const Cmp3 = () => {
  return (
    <div className={style.Cmp3}>
      <h2>Помещения</h2>
      <div className={style.content6}>
        <img src="/public/5dbe0854c979505c52a7d4440969ab4e.png" alt="" />
      </div>
      <div className={style.content5}>
        <div>
          <p>Описание</p>
        </div>
        <h2>Представление всего опыт технологии</h2>
        <p>
          Коворкинг — это соглашение, при котором сотрудники разных компаний
          делят одно офисное помещение, что обеспечивает экономию средств и
          удобство за счет использования общей инфраструктуры, такой как
          оборудование, коммунальные услуги, услуги администратора и хранения, а
          в некоторых случаях услуги по прохладительным напиткам и приему
          посылок.
        </p>
        <Link to="" className={style.Link}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default Cmp3;
