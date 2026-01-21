import { formatData } from "../../utils/formatData";
import { EQUIPMENT_STATUS_LABEL } from "../../constants/equipmentStatus";
import "./DesktopGrid.scss";
import { getLocation } from "../../utils/getLocation";


const DesktopGrid = ({ items, onEdit }) =>{
    // const { items } = useEquipment();

    return(
        <section className="weld__table">
            <div className="row row--header weld__table-row " >
                <div className="col weld__table-col">Номер СГМ</div>
                <div className="col weld__table-col">Тип</div>
                <div className="col weld__table-col">Модель</div>
                <div className="col weld__table-col">Местонахождение</div>
                <div className="col weld__table-col">Отвественный</div>
                <div className="col weld__table-col">Дата ТО</div>
                <div className="col weld__table-col">Статус</div>
            </div>
                        
            {items.map(item => ( 
                <div key={item.id} 
                    className="row weld__table-row" 
                    onDoubleClick={
                        () => {
                            onEdit(item);
                        }
                    }
                >
                    <div className="col weld__table-col">
                        {item.invNumber}
                    </div>
                    <div className="col weld__table-col">
                        {item.type}
                    </div>
                    <div className="col weld__table-col">
                        {item.model}
                    </div>
                    <div className="col weld__table-col">
                        {getLocation(item.location)}
                    </div>
                    <div className="col weld__table-col">
                        {item.serviceman}
                    </div>
                    <div className="col weld__table-col">
                        {formatData(item.lastRepairAt)}
                    </div>
                    <div className="col weld__table-col">
                        {EQUIPMENT_STATUS_LABEL[item.status]}
                    </div>
                </div> 
            ))}
        </section>
    )
};
export default DesktopGrid