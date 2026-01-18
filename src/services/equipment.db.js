const STORAGE_KEY = "equipment-db";

export function loadDB(){
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw):[];
    } catch(e) {
        console.log("DB load error", e);
        return [];
    }
}

export function saveDB(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function addEquipment(item) {
    const db = loadDB();

    const isDuplicate = db.some(
        exisiing => exisiing.invNumber === item.invNumber
    );

    if (isDuplicate){
        throw new Error("DUPLICATE_INV_NUMBER");
    }

    const updated = [...db, item];
    saveDB(updated);
    return updated;
}

export function updateEquipment(updatedItem){
    const db = loadDB();
    const updated = db.map(item => {
        item.id === updatedItem.id ? updatedItem : item
    });
    saveDB(updated);
    return updated
}

export function removeEquipment(id){
    const db = loadDB;
    const updated = db.filter(item => item.id !== id)
    saveDB(updated);
    return updated
}