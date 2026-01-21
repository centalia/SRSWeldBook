import { useState } from "react";
import { useEquipment } from "../../context/EquipmentContext";
import EditEquipmentModal from "../../components/EditEquipmentModal/EditEquipmentModal";
import FiltersSort from "../../components/FiltersSort"
import DesktopGrid from "../../components/DesktopGrid/DesktopGrid";
import SearchInput from "../../components/SearchInput";


const JournalPage = () => {
  const { items } = useEquipment();
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter]     = useState("all");
  const [modelFilter, setModelFilter]   = useState("all");
  const [sortBy, setSortBy]             = useState("date_desc");
  const [view, setView]                 = useState("all");
  const [spanFilter, setSpanFilter]     = useState("all");
  const [editing, setEditing]           = useState(null);
  const [search, setSearch]             = useState("") 

  const lists = {
    all: items.filter(Boolean),
    base: items.filter(i =>
      i &&
      [
        "wait_repair",
        "in_work",
        "wait_parts",
        "ready_transport",
        "emergency_repair",
      ].includes(i.status),
    ),
    workshop: items.filter(i => i &&  i.status === "in_workshop"),
  };
  
  const normalize = value => 
      value?.toString().toLowerCase() ?? "";
  const searchValue = normalize(search);

  const listItems = lists[view] ?? [];

  const filteredItems = listItems.filter((item) => {
    if (!item) return false;

    const statusOk  = statusFilter === "all"  || item.status   === statusFilter;
    const typeOk    = typeFilter === "all"    || item.type     === typeFilter;
    const modelOk   = modelFilter === "all"   || item.model    === modelFilter;
    const spanOk    = spanFilter === "all"    || item.location === spanFilter;
    
    const searchOk  = !searchValue || 
      normalize(item.invNumber).includes(searchValue) ||
      normalize(item.model).includes(searchValue) ||
      normalize(item.serviceman).includes(searchValue);
      
    return  statusOk && 
            typeOk && 
            modelOk && 
            spanOk &&
            searchOk;
  });

  const sortItems = (list, sortBy) => {
    return [...list].sort((a, b) => {
      const aDate = a.lastRepairAt ? new Date(a.lastRepairAt) : new Date(0);
      const bDate = b.lastRepairAt ? new Date(b.lastRepairAt) : new Date(0);

      if (sortBy === "date_desc") return bDate - aDate;
      if (sortBy === "date_asc") return aDate - bDate;

      return 0;
    });
  };

  const visibleItems = sortItems(filteredItems, sortBy);

  return (
    <>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button onClick={() => setView("all")} disabled={view === "all"}>
          Все
        </button>
        <button onClick={() => setView("base")} disabled={view === "base"}>
          На базе
        </button>
        <button
          onClick={() => setView("workshop")}
          disabled={view === "workshop"}
        >
          В цеху
        </button>
      </div>
      <FiltersSort
        status          = { statusFilter }
        onStatusChange  = { setStatusFilter }
        sortBy          = { sortBy }
        onSortChange    = { setSortBy }
        typeFilter      = { typeFilter }
        onTypeChange    = { setTypeFilter }
        modelFilter     = { modelFilter }
        onModelChange   = { setModelFilter }
        spanFilter      = { spanFilter }
        onSpanChange    = { setSpanFilter }
      />
      <SearchInput
        value={ search }
        onChange={ setSearch }
      />
      <DesktopGrid 
        items={visibleItems} 
        onEdit={setEditing} 
      />

      <EditEquipmentModal 
        item={editing}
        onClose={() => setEditing(null)}
      />
      {/*MobileList items={visibleItems} */}
      
    </>
  );
};

export default JournalPage;
