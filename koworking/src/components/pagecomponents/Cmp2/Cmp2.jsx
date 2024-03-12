import React from "react";
import style from "./Cmp2.module.css";
const Cmp2 = () => {
  return (
    <div className={style.Cmp2}>
      <div className={style.cmpContent}>
        <p>Преимущества</p>
        <h2>Выбирай наш комфорт</h2>
        <div>
          <div className={style.contents}>
            <div>
              <img src="/public/event.png" alt="" />
            </div>
            <h3> Мероприятия</h3>
            <p>
              Обеспечение экономии средств и удобства за счет использования
              общей инфраструктуры.
            </p>
          </div>
          <div className={style.contents}>
            <div>
              <img src="/public/wifi (1).png" alt="" />
            </div>
            <h3>Быстрый интернет</h3>
            <p>
              Обеспечение экономии средств и удобства за счет использования
              общей инфраструктуры.
            </p>
          </div>
          <div className={style.contents}>
            <div>
              <img src="/public/internet.png" alt="" />
            </div>
            <h3>Доступность</h3>
            <p>
              Обеспечение экономии средств и удобства за счет использования
              общей инфраструктуры.
            </p>
          </div>
          <div className={style.contents}>
            <div>
              <img src="/public/armchair.png" alt="" />
            </div>
            <h3>Лаундж</h3>
            <p>
              Обеспечение экономии средств и удобства за счет использования
              общей инфраструктуры.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cmp2;
