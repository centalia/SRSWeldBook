import { useState } from "react";
import { useEquipment } from "../context/EquipmentContext";
import { EQUIPMENT_MODELS } from "../services/equipmentModels";

const EquipmentForm = ({ initialData, onSuccess }) => {
  const { add, update } = useEquipment();
  const [form, setForm] = useState(
    initialData ?? {
      invNumber: "",
      type: "",
      model: "",
      location: "",
      serviceman: "",
      lastRepairAt: "",
      status: "",
    },
  );
  const isEdit = Boolean(initialData);

  const models = EQUIPMENT_MODELS[form.type] ?? [];

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "type" ? { model: "" } : {}),
    }));
  };

  const isValidInvNumber = (value) => /^С.+/.test(value);

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      lastRepairAt: new Date(form.lastRepairAt).toISOString(),
    };

    if (!isValidInvNumber(form.invNumber)) {
      const msg = "Инвентарный номер должен начинаться с заглавной русской «С»";

      alert(msg);
      return;
    }

    if (initialData) {
      update(payload);
    } else {
      add(payload);
    }

    setForm({
      invNumber: "",
      type: "",
      model: "",
      location: "",
      serviceman: "",
      lastRepairAt: "",
      status: "",
    });

    onSuccess?.();
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <h2>
         {isEdit ? "Редактировать оборудование" : "Новое оборудование"}
      </h2>
      <input
        name="invNumber"
        placeholder="Инвентарный номер"
        value={form.invNumber}
        onChange={onChange}
        pattern="^С.+"
        title="Инвентарный номер должен начинаться с заглавной русской «С»"
        required
        disabled={isEdit}
      />

      <select name="type" value={form.type} onChange={onChange} required>
        <option value="">Выберите тип оборудования</option>
        <option value="Сварочный полуавтомат MIG/MAG">
          Сварочный полуавтомат MIG/MAG
        </option>
        <option value="Полуавтомат для аргонодуговой сварки TIG">
          Полуавтомат для аргонодуговой сварки TIG
        </option>
        <option value="Система плазменной резки">
          Система плазменной резки
        </option>
        <option value="Сварочный выпрямитель">Сварочный выпрямитель</option>
        <option value="Машина контакной сварки">Машина контакной сварки</option>
        <option value="Аппарат ручной сварки MMA">
          Аппарат ручной сварки MMA
        </option>
      </select>

      <select
        name="model"
        value={form.model}
        onChange={onChange}
        disabled={!form.type}
        required
      >
        <option value="">
          {form.type ? "Выберите модель" : "Выберите тип"}
        </option>
        {models.map((model) => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </select>

      <select
        name="location"
        value={form.location}
        onChange={onChange}
        required
      >
        <option value="">Выберите пролет</option>
        <option value="1 пролет">1 пролет</option>
        <option value="2 пролет">2 пролет</option>
        <option value="3 пролет">3 пролет</option>
        <option value="4 пролет">4 пролет</option>
        <option value="5 пролет">5 пролет</option>
        <option value="6 пролет">6 пролет</option>
        <option value="7 пролет">7 пролет</option>
        <option value="8 пролет">8 пролет</option>
      </select>

      <input
        name="serviceman"
        placeholder="Ответственный"
        value={form.serviceman}
        onChange={onChange}
      />

      <input
        type="date"
        name="lastRepairAt"
        value={form.lastRepairAt}
        onChange={onChange}
      />
      <select name="status" value={form.status} onChange={onChange} required>
        <option value=""></option>
        <option value="in_work">В работе</option>
        <option value="in_workshop">В цеху</option>
        <option value="wait_repair">Ожидает ремонта</option>
        <option value="wait_parts">Ожидает запчастей</option>
        <option value="ready_transport">Готово к транспортировке</option>
        <option value="emergency_repair">Аварийный ремонт</option>
      </select>

      <button type="submit">
        {isEdit ? "Сохранить изменения" : "Добавить"}
      </button>
    </form>
  );
};

export default EquipmentForm;
