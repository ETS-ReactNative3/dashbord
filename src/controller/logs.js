import {BASE_URL, HEADERS} from "../config/http";
import axios from "axios";
const route = "/logs";

export var statut = {
    0: "Echec",
    1: "Succes"
  }

export async function createLog (log){
    const url = BASE_URL+`${route}/`;
    const response = await axios.put(url,{
        "id": log.id,
        "description": log.description,
        "statut": log.statut,
        "date": log.date,
        "userId": log.userId,
    });
    if(response.status === 200){
        return response;
    }
}


export async function getLogs (){
    const url = BASE_URL+`${route}/`;
    const response = await axios.get(url, {headers:HEADERS});
    if(response.status === 200){
        return response;
    }
}

export async function getLogById (id){
    const url = BASE_URL+`${route}/${id}`;
    const response = await axios.get(url);
    if(response.status === 200){
        return response;
    }
}

 

 