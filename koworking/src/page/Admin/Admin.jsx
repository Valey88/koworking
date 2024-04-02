import { useEffect, useState } from "react";
import {
  useGetRoomsQuery,
  useDeleteRoomMutation,
  // useGetPicturesQuery,
  // useGetPicturesNameQuery,
} from "../../redux/dataApi";
import style from "./Admin.module.css";
import axios from "axios";
import SideBar from "../../components/sideBar/SideBar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../page/Booking/Sliders/styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function AddRooms() {
  const [file, setFile] = useState(null);
  const { data } = useGetRoomsQuery();
  const [deleteRoom] = useDeleteRoomMutation();
  console.log(data);
  const deleteRooms = async (id) => {
    await deleteRoom(id).unwrap();
  };

  const uploadFile = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileChanges = (id) => {
    const formData = new FormData();
    formData.append("image", file);

    axios.post(`http://localhost:3000/room/upload-picture/${id}`, formData, {
      method: "POST",
      headers: { "Content-type": "multipart/form-data" },
    });
  };

  return (
    <div className={style.Admin}>
      <SideBar />
      <div className={style.allRooms}>
        <div className={style.allRoomsContainer}>
          <h1>Список комнат</h1>
          {data?.map((data) => {
            return (
              <div key={data.id}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {data?.picture?.map((img) => {
                    const imgBlob = new Blob([img.data]);
                    return (
                      <SwiperSlide key={img.id}>
                        <img src={`http://localhost:3000/${img.name}`} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <h2>{data.address}</h2>
                <h2>{data.name}</h2>
                <h2>{data.description}</h2>
                <h2>Количество мест {data.places}</h2>
                <h2>Цена {data.price}р</h2>
                {/* 
                {data?.picture?.map((img) => {
                  const imgBlob = new Blob([img.data]);
                  return (
                    <div className={style.images}>
                      <img src={`http://localhost:3000/${img.name}`} />
                    </div>
                  );
                })} */}

                <input type="file" onChange={uploadFile} name="inputFile" />
                <button onClick={(e) => handleFileChanges(data.id)}>
                  Загрузить
                </button>
                <div>
                  <h2>Удалить комнату</h2>
                  <button onClick={(e) => deleteRooms(data.id)}>Удалить</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AddRooms;
