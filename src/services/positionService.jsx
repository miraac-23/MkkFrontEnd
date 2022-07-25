import axios from "axios";


export default class PositionService{

    addPosition = body =>{

        return axios.post("http://localhost:8080/api/positions/add",body);
    }

    getPositions(){

        return axios.get("http://localhost:8080/api/positions/getAll")
    }

}