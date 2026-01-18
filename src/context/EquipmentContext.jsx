import { createContext, useContext, useEffect, useState } from "react";
import { loadDB, addEquipment, updateEquipment, saveDB } from "../services/equipment.db";

const EquipmentContext = createContext(null)

export const EquipmentProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(loadDB());
    }, []);

    const add = data => {
        const newItem = {
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString(),
            ...data,
        };
        setItems(addEquipment(newItem));
    
        try {
            setItems(addEquipment(newItem));
        } catch (err) {
            if (err.message === "DUPLICATE_INV_NUMBER"){
                throw err;
            }
        }
    };

    const update = data => {
        if (!data?.id) return;

        setItems(prev =>{
            const next = prev
                .filter(Boolean)
                .map(item =>
                    item.id === data.id
                        ? { ...item, ...data }
                        : item
                );
            saveDB(next);
            return next;
        });
    };

    return(
        <EquipmentContext.Provider
            value={{ items, add, update }}
        >
            {children}
        </EquipmentContext.Provider>
    );


};

export const useEquipment = () => useContext(EquipmentContext);