import {BASE_URL} from "../config/http";
import axios from "axios";


const route = "/tickets";

  export async function createTicketEvent(eventTicket) {
    const url = BASE_URL+`${route}/`;
    const response = await axios.put(url, {
      "eventId": eventTicket.eventId,
      "price": eventTicket.price,
      "evenName": eventTicket.evenName,
      "eventCountry": eventTicket.eventCountry,
      "eventCity": eventTicket.eventCity,
      "eventDate": eventTicket.eventDate,
      "eventStartHour": eventTicket.eventStartHour,
      "eventEndHour": eventTicket.eventEndHour,
      "category": eventTicket.category,
    });
    if (response.status === 200) {
        return response;
    }
  }

  export async function getEventTicket() {
    const url = BASE_URL+`${route}/`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }
  
  export async function getEventTicketById(id) {
    const url = BASE_URL+`${route}/${id}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }
  
  export async function updateEventTicket(id) {
    const url = BASE_URL+`${route}/updateEventTicket/${id}`;
    const response = await axios.put(url, {});
    if (response.status === 200) {
        return response;
    }
  }
  

