const FiltersSort = ({
    status,
    onStatusChange,
    sortBy,
    onSortChange
}) => (<div className="filter">
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
    </div>
);

export default FiltersSort;