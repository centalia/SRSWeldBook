import Dexie from "dexie";

export const db = new Dexie("srs-weldbook");

db.version(1).stores({
    equipment: "id, invNumber, status, type, model, serviceman, location.spanId",
});

db.open().then(() => {
    console.log("[db] IndexedDB ready");
    })
    .catch(err => {
    console.error("[db] error:", err);
});