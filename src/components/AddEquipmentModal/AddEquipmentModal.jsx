import { useState } from "react";
import Modal from "../Modal/Modal";
import EquipmentForm from "../EquipmentForm";
import "./AddEquipment.scss"

const AddEquipmentModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="btn btn--primary" onClick={() => setOpen(true)}>
        Добавить оборудование
      </button>

      {open &&(       
        <Modal onClose={() => setOpen(false)}>
          <EquipmentForm onSuccess={() => setOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default AddEquipmentModal;
