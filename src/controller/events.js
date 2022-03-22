import axios from 'axios';
import { useEffect } from 'react';
import {BASE_URL, HEADERS} from "../config/http";


const route = '/events';


  // useEffect(() => {
  //   getEvents();
  // }, []);

  export async function getEvents () {
    const url = BASE_URL+`${route}`;
    const response = await axios.get(url, {headers:HEADERS});
    if (response.status === 200) {
      return response;
    }
  }

  export async function getEvent (id) {
    const url = BASE_URL+`${route}/${id}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }

  export async function createEvent(event) {
    const url = BASE_URL+`${route}`;
    const response = await axios.put(url, {
      "name": event.name,
      "organizer": event.organizer,
      "limitRegistration": event.limitRegistration,
      "country": event.country,
      "city": event.city,
      "district": event.district,
      "location": event.location,
      "startingDate": event.startingDate,
      "endingDate": event.endingDate,
      "publishingStartDate": event.publishingStartDate,
      "publishingEndDate": event.publishingEndDate,
      "description": event.description,
      "phone": event.phone,
      "category": event.category,
      "accountId": event.accountId,
    });
        if (response.status === 200) {
            return response;
        }
  }
 
export async function getEventByName(eventName){
    const url = BASE_URL+`${route}/getEventByName/${eventName}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
}

export async function getEventByAccountId(accountId){
    const url = BASE_URL+`${route}/getEventByAccountId/${accountId}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
}

export async function validateEvent(eventId){
    const url = BASE_URL+`${route}/validate/${eventId}`;
    const response = await axios.put(url, {});
    if (response.status === 200) {
        return response;
    }
}

  export async function deniedEvent(eventId) {
    const url = BASE_URL+`${route}/denied/${eventId}`;
    const response = await axios.put(url, {});
    if (response.status === 200) {
        return response;
    }
  }
 
  export async function changeStatus(eventId, eventStatus) {
    const url = BASE_URL+`${route}/changeStatus/${eventId}/${eventStatus}`;
    const response = await axios.put(url, {});
    if (response.status === 200) {
        return response;
    }
  }
  
  export async function updateEvent(event) {
    const url = BASE_URL+`${route}/updateEvent/${event.id}`;
    const response = await axios.put(url, {
        "id": event.id,
        "name": event.name,
        "organizer": event.organizer,
        "limitRegistration": event.limitRegistration,
        "country": event.country,
        "city": event.city,
        "district": event.district,
        "location": event.location,
        "startingDate": event.startingDate,
        "endingDate": event.endingDate,
        "publishingStartDate": event.publishingStartDate,
        "publishingEndDate": event.publishingEndDate,
        "description": event.description,
        "phone": event.phone,
        "category": event.category,
        "accountId": event.accountId,
    });
    if (response.status === 200) {
        return response;
    }
  }

  export async function deleteEvent(id){
    const url = BASE_URL+`${route}/${id}`;
    const response = await axios.delete(url);
    if (response.status === 200) {
        return response;
    }
}

 