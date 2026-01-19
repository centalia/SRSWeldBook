import { EQUIPMENT_MODELS } from "../services/equipmentModels";

const FiltersSort = ({
    status,
    onStatusChange,
    sortBy,
    onSortChange,
    typeFilter,
    onTypeChange,
    modelFilter,
    onModelChange,
}) => {
    
    const models = typeFilter === "all"
    ? Object.values(EQUIPMENT_MODELS).flat()
    : EQUIPMENT_MODELS[typeFilter] ?? [];

    const types = Object.keys(EQUIPMENT_MODELS);

    return (<div className="filter">
        <select
            value={status}
            onChange={e => onStatusChange(e.target.value)}
        >
            <option value={"all"}>Все</option>
            <option value={"in_workshop"}>В цеху</option>
            <option value={"in_work"}>В работе</option>
            <option value={"wait_repair"}>Ожидает ТО</option>
            <option value={"wait_parts"}>Ожидает запчастей</option>
            <option value={"ready_transport"}>Готово к транспортировке</option>
        </select>
                <select
            value={sortBy}
            onChange={e => onSortChange(e.target.value)}
        >
            <option value={"date_desc"}>ТО: новые → старые</option>
            <option value={"date_asc"}>ТО: старые → новые</option>
        </select>
        <select
            value={typeFilter}
            onChange={e => onTypeChange(e.target.value)}
        >
            <option value="all">
                Все типы
            </option>
            {types.map(type =>
                <option key={type} value={type}>
                    {type}
                </option>
            )}
        </select>
        <select
            value={modelFilter}
            onChange={e => onModelChange(e.target.value)}
        >
            <option value="all">
                Все модели
            </option>
            {models.map(model => (
                <option key={model} value={model}>
                    {model}
                </option>
            ))}
        </select>
    </div>
)};

export default FiltersSort;