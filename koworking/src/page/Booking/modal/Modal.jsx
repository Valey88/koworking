import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { usePostOrdersMutation } from "../../../redux/dataApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [roomId, setRoomId] = useState(id);
  const [timeStart, setTimeStart] = useState();
  const [durationHours, setDurationHours] = useState();
  const [durationMinuts, setDurationMinuts] = useState();
  const [summaryEvent, setSummaryEvent] = useState();
  const [fio, setFio] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [postOrders, { isLoading, isSuccess, isError }] =
    usePostOrdersMutation();

  console.log(roomId);

  const addNewOrder = async () => {
    console.log({
      roomId,
      timeStart,
      durationHours,
      durationMinuts,
      summaryEvent,
      fio,
      email,
      phoneNumber,
    });
    if (
      roomId &&
      timeStart &&
      durationHours &&
      durationMinuts &&
      summaryEvent &&
      summaryEvent &&
      fio &&
      email &&
      phoneNumber
    ) {
      await postOrders({
        roomId,
        timeStart,
        durationHours,
        durationMinuts,
        summaryEvent,
        fio,
        email,
        phoneNumber,
      }).unwrap();
      setRoomId("");
      setTimeStart("");
      setDurationHours("");
      setDurationMinuts("");
      setSummaryEvent("");
      setFio("");
      setEmail("");
      setPhoneNumber("");
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <input
              type="datetime-local"
              onChange={(e) => setTimeStart(e.target.value)}
            />
            <h2>Продолжительность события</h2>
            <input
              type="text"
              placeholder="Количество часов"
              onChange={(e) => setDurationHours(+e.target.value)}
            />
            <input
              type="text"
              placeholder="Количество минут"
              onChange={(e) => setDurationMinuts(+e.target.value)}
            />
            <textarea
              placeholder="Краткое описание события"
              onChange={(e) => setSummaryEvent(e.target.value)}
            />
            <input
              type="text"
              placeholder="ФИО"
              onChange={(e) => setFio(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Номер телефона"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <button onClick={addNewOrder}>Отправить</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
