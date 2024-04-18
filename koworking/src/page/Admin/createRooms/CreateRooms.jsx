import React from "react";
import style from "./CreateRooms.module.css";
import { useAddRoomsMutation } from "../../../redux/dataApi";
import { useState } from "react";
import SideBar from "../../../components/sideBar/SideBar";

const CreateRooms = () => {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [places, setPlaces] = useState(0);
  const [addRooms, { isError }] = useAddRoomsMutation();
  const [weeks, setWeeks] = useState([]);
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimesEnd] = useState("");

  const addNewRoom = async () => {
    console.log({
      address,
      name,
      description,
      price,
      places,
      timeStart,
      timeEnd,
      weeks,
    });
    if (
      address &&
      name &&
      description &&
      price &&
      places &&
      timeStart &&
      timeEnd &&
      weeks
    ) {
      await addRooms({
        address,
        name,
        description,
        price,
        places,
        timeStart,
        timeEnd,
        weeks,
      }).unwrap();
      setAddress("");
      setName("");
      setDescription("");
      setPrice("");
      setPlaces("");
      setWeeks([]);
      setTimeStart("");
      setTimesEnd("");
    }
  };

  return (
    <div className={style.CreateRooms}>
      <SideBar />
      <div className={style.AddRoomsHead}>
        <h1>Создание комнаты</h1>
      </div>
      <div className={style.AddRooms}>
        <div className={style.container}>
          <input
            type="text"
            placeholder="Адресс"
            onChange={(e) => setAddress(e.target.value)}
            className={style.inputAddRooms}
          />
          <input
            type="text"
            placeholder="Название"
            onChange={(e) => setName(e.target.value)}
            className={style.inputAddRooms}
          />
          <input
            type="text"
            placeholder="Цена"
            onChange={(e) => setPrice(+e.target.value)}
            className={style.inputAddRooms}
          />
          <textarea
            type="text"
            placeholder="Описание"
            onChange={(e) => setDescription(e.target.value)}
            className={style.textareaAddRooms}
          />
          <input
            type="text"
            placeholder="Количество мест"
            onChange={(e) => setPlaces(+e.target.value)}
            className={style.inputAddRooms}
          />
          <input
            type="text"
            placeholder="дни недели работы"
            value={["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]}
            onChange={(e) => setWeeks(e.target.value)}
            className={style.inputAddRooms}
          />
          <input
            type="text"
            placeholder="Начало работы"
            onChange={(e) => setTimeStart(e.target.value)}
            className={style.inputAddRooms}
          />
          <input
            type="text"
            placeholder="Конец работы"
            onChange={(e) => setTimesEnd(e.target.value)}
            className={style.inputAddRooms}
          />
          <button onClick={addNewRoom}>Создать</button>
        </div>
      </div>
    </div>
  );
};

export default CreateRooms;
