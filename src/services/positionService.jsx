import axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/api/positions/";


export default class PositionService {

    addPosition = body => {

        return axios.post(API_URL + "add", body, { headers: authHeader() });
    }

    getPositions() {

        return axios.get(API_URL + "getAll", { headers: authHeader() });
    }

    deletePosition(id) {

        return axios.delete(API_URL + "delete?positionEntity=" + id, { headers: authHeader() });
    }

}