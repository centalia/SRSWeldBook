import { WORKSHOPS } from "../services/workshopsData";

export const getLocation = location =>
    WORKSHOPS[location] ?? "-";