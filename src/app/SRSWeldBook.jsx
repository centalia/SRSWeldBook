import AddEquipmentModal from "../components/AddEquipmentModal/AddEquipmentModal";
import { EquipmentProvider } from "../context/EquipmentContext";
import JournalPage from "../pages/JournalPage/JournalPage"


const SRSWeldBook = () =>{
    return (
        <div>
            <EquipmentProvider>
                <AddEquipmentModal />
                <JournalPage />
            </EquipmentProvider>
        </div>
    );
};

export default SRSWeldBook