import { createContext, useContext, useEffect, useState } from "react";
import { /*loadDB,*/ addEquipment, updateEquipment, /*saveDB,*/ loadEquipment } from "../services/equipment.db";

const EquipmentContext = createContext(null)

export const EquipmentProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setItems(loadDB());
    // }, []);

    useEffect(() => {
        loadEquipment().then(data => {
                setItems(data),
                setLoading(false);
        });
    }, [])

    // const add = data => {
    //     const newItem = {
    //         id: crypto.randomUUID(),
    //         createdAt: new Date().toISOString(),
    //         ...data,
    //     };
    //     setItems(addEquipment(newItem));
    
    //     try {
    //         setItems(addEquipment(newItem));
    //     } catch (err) {
    //         if (err.message === "DUPLICATE_INV_NUMBER"){
    //             throw err;
    //         }
    //     }
    // };

    const add = async data => {
        const item = {
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString(),
            ...data,
        };
        await addEquipment(item);
        setItems(prev => [...prev, item])
    }

    // const update = data => {
    //     if (!data?.id) return;

    //     setItems(prev =>{
    //         const next = prev
    //             .filter(Boolean)
    //             .map(item =>
    //                 item.id === data.id
    //                     ? { ...item, ...data }
    //                     : item
    //             );
    //         saveDB(next);
    //         return next;
    //     });
    // };

    const update = async item =>{
        await updateEquipment(item);
        setItems(prev => 
            prev.map(i => (i.id === item.id 
                            ? item
                            : i
            ))
        );
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