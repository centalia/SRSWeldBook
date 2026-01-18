export const EQUIPMENT_STATUS = {
    IN_WOKRSHOP: "in_workshop",
    IN_WORK: "in_work",
    WAIT_REPAIR: "wait_repair",
    WAIT_PARTS: "wait_parts",
    READY_TRANSPORT: "ready_transport", 
    EMERGENCY_REPAIR: "emergency_repair",
};

export const EQUIPMENT_STATUS_LABEL = {
    [EQUIPMENT_STATUS.IN_WOKRSHOP]: "В цеху",
    [EQUIPMENT_STATUS.IN_WORK]: "В работе",
    [EQUIPMENT_STATUS.WAIT_REPAIR]: "Ожидает ТО",
    [EQUIPMENT_STATUS.WAIT_PARTS]: "Ожидает запчастей",
    [EQUIPMENT_STATUS.READY_TRANSPORT]: "Готово к транспортировке",
    [EQUIPMENT_STATUS.EMERGENCY_REPAIR]: "Аварийный ремонт",
}