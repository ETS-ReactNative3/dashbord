import axios from 'axios';
import {BASE_URL, HEADERS} from "../config/http";
import { toast } from "react-toastify";



const route = '/events';




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
  const response = await axios.put(url, 
    {
    "name": event.name,
    "organizer": event.organizer,
    "limit_registration": event.limitRegistration,
    "country": event.country,
    "city": event.city,
    "district": event.district,
    "location": event.location,
    "starting_date": event.startingDate,
    "ending_date": event.endingDate,
    "description": event.description,
    "phone": event.phone,
    "status": event.status,
    "is_valid": "0",
    "category": event.category,
    "account_id": event.accountId,
    "publishing_start_date": event.publishingStartDate,
    "publishing_end_date": event.publishingEndDate,
    
    
    
    
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
  if(window.confirm('Are you sure you want to validate this event ?'))
  {
    const url = BASE_URL+`${route}/validate/${eventId}`;
    const response = await axios.put(url,{headers:HEADERS});
    if (response.status === 200) {
        return response;
        toast.success("Event Validated successfully");
    }
  }
    
}

  export async function deniedEvent(eventId) {
    if(window.confirm('Are you sure you want to denie this event ?'))
    {
      const url = BASE_URL+`${route}/denied/${eventId}`;
    const response = await axios.put(url,{headers:HEADERS});
    if (response.status === 200) {
        return response;
        toast.success("Event denied successfully");
    }
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

 