import React from "react";
import { useGetRoomsQuery } from "../../../redux/dataApi";
import SideBar from "../../../components/sideBar/SideBar";
import style from "./DeleteImage.module.css";
import { useDeletePictureMutation } from "../../../redux/dataApi";

const DeleteImage = () => {
  const { data } = useGetRoomsQuery();
  const [deletePicture] = useDeletePictureMutation();
  console.log(data);
  const deletePictures = async (name) => {
    await deletePicture(name).unwrap();
  };
  return (
    <div className={style.DeleteImage}>
      <SideBar />
      <div className={style.delete_image}>
        {data?.map((data) => {
          return (
            <div key={data.id}>
              <h2>{data.address}</h2>
              <h2>{data.name}</h2>
              {data?.picture?.map((img) => {
                const imgBlob = new Blob([img.data]);
                return (
                  <div className={style.images}>
                    <img src={`http://localhost:3000/${img.name}`} />
                    <button onClick={() => deletePictures(img.name)}>
                      Удалить
                    </button>
                  </div>
                );
              })}

              {/* {data?.picture?.map((img) => {
                  const imgBlob = new Blob([img.data]);
                  return <img src={`http://localhost:3000/${img.name}`} />;
                })} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DeleteImage;
