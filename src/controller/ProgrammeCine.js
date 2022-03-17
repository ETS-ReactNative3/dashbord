import {BASE_URL} from "../config/http";
import axios from "axios";


const route = "/programCinemas";

  export async function createProgramCinema (programCinema) {
    const url = BASE_URL+`${route}/`;
    const response = await axios.put(url, {
        "startingDate": programCinema.startingDate,
        "endingDate": programCinema.endingDate,
        "etablissementId": programCinema.etablissementId,
    });
    if (response.status === 200) {
        return response;
    }
  }
 
  export async function getProgramCinemas() {
    const url = BASE_URL+`${route}/`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }
  
  export async function getProgramCinemaById(id) {
    const url = BASE_URL+`${route}/${id}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }
 
  export async function updateProgramCinema(programCinema) {
    const url = BASE_URL+`${route}/${programCinema.id}`;
    const response = await axios.put(url, {
        "startingDate": programCinema.startingDate,
        "endingDate": programCinema.endingDate,
        "etablissementId": programCinema.etablissementId,
    });
    if (response.status === 200) {
        return response;
    }
  }
 