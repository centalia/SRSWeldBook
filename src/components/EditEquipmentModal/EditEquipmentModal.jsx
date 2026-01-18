import Modal from "../Modal/Modal";
import EquipmentForm from "../EquipmentForm";

const EditEquipmentModal = ({ item, onClose }) => {
    if(!item) return null;

    return (
        <>
            <Modal onClose={onClose}>
                <EquipmentForm 
                    initialData={item}
                    onSuccess={onClose}
                />
            </Modal>
        </>
    );
};

export default EditEquipmentModal