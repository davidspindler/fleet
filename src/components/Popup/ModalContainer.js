import Modal from "./modal";
import React from "react";
const ModalContainer = () => {
  const modals = [
    {
      id: 1,
      title: "Modal 1",
      content: "Content for Modal 1",
    },
    {
      id: 2,
      title: "Modal 2",
      content: "Content for Modal 2",
    },
    {
      id: 3,
      title: "Modal 3",
      content: "Content for Modal 3",
    },
  ];

  return (
    <div>
      {modals.map((modal) => (
        <Modal key={modal.id} title={modal.title} information={modal.content} />
      ))}
    </div>
  );
};

export default ModalContainer;
