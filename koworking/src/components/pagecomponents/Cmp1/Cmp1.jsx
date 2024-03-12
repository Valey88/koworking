import React from "react";
import style from "./Cmp1.module.css";
const Cmp1 = () => {
  return (
    <div>
      <div className={style.Cmp1}>
        <div className={style.content1}>
          <div>
            <img src="/public/Frame 1.svg" alt="" />
          </div>
          <h2>Выбирай лучшее места коворкинга в городе</h2>
          <button className="">Забронировать</button>
        </div>
        <div className={style.content2}>
          <img src="/public/91a921c4084d1fd7cf2fd71448204ba0.png" alt="" />
        </div>
      </div>
      <div className={style.Cmp2}>
        <div className={style.content4}>
          <img src="/public/334da5cbc12dd2240ba010c4baaad71a.png" alt="" />
        </div>
        <div className={style.content3}>
          <h2>Самые удобные пространства</h2>
          <p>
            Коворкинг — это соглашение, при котором сотрудники разных компаний
            делят одно офисное помещение, что обеспечивает экономию средств и
            удобство за счет использования общей инфраструктуры, такой как
            оборудование, коммунальные услуги, услуги администратора и хранения,
            а в некоторых случаях услуги по прохладительным напиткам и приему
            посылок.
          </p>
        </div>
      </div>
      <div className={style.Cmp3}>
        <div className={style.content5}>
          <div>
            <p>Описание</p>
          </div>
          <h2>Представление всего опыт технологии</h2>
          <p>
            Коворкинг — это соглашение, при котором сотрудники разных компаний
            делят одно офисное помещение, что обеспечивает экономию средств и
            удобство за счет использования общей инфраструктуры, такой как
            оборудование, коммунальные услуги, услуги администратора и хранения,
            а в некоторых случаях услуги по прохладительным напиткам и приему
            посылок.
          </p>
        </div>
        <div className={style.content6}>
          <img src="/public/Mask Group.png" alt="" />
          <img src="/public/Mask Group (1).png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cmp1;
