import axios from "axios";
import authHeader from "./authHeader";


export default class PositionService {

    addPosition = body => {

        return axios.post("http://localhost:8080/api/positions/add", body, { headers: authHeader() });
    }

    getPositions() {

        return axios.get("http://localhost:8080/api/positions/getAll", { headers: authHeader() });
    }

    deletePosition(id) {

        return axios.delete("http://localhost:8080/api/positions/delete?positionEntity=" + id, { headers: authHeader() });
    }

}