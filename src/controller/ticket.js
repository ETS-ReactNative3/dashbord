import axios from "axios";
const route = "/tickets";


  export async function createTicket(ticket) {
    const url = BASE_URL+`${route}/`;
    const response = await axios.put(url,{
        "price": ticket.price,
        "number": ticket.number,
        "creationDate": ticket.creationDate,
        "category": ticket.category,
        "isValid": ticket.isValid,
        "totalTicket": ticket.totalTicket,
        "totalSold": ticket.totalSold,
        "eventId": ticket.eventId,
        "movieId": ticket.movieId,
        "accountId": ticket.accountId,
    });
    if (response.status === 200) {
        return response;
    }
  }


  export async function getTickets () {
    const url = BASE_URL+`${route}/`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }

  export async function getTicketById (id) {
    const url = BASE_URL+`${route}/${id}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }

  export async function getTicketByName (name) {
    const url = BASE_URL+`${route}/getTicketByName/${name}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }

  export async function getTicketByCategory (category) {
    const url = BASE_URL+`${route}/getTicketByCategory/${category}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }

  export async function getTicketByEventId(eventId) {
    const url = BASE_URL+`${route}/getTicketByEventId/${eventId}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }

  export async function getTicketByAccountId(accountId) {
    const url = BASE_URL+`${route}/getTicketByAccountId/${accountId}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }

  export async function getTotalTickets(ticketId) {
    const url = BASE_URL+`${route}/getTotalTickets/${ticketId}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }
  
  export async function getTotalTicketsSold(ticketId) {
    const url = BASE_URL+`${route}/getTotalTicketsSold/${ticketId}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }

  export async function increaseTotalTickets(ticketId, ticketNumber) {
    const url = BASE_URL+`${route}/increaseTotalTickets/${ticketId}/${ticketNumber}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }

  export async function increaseTotalTicketsSold(ticketId, ticketNumber) {
    const url = BASE_URL+`${route}/increaseTotalTicketsSold/${ticketId}/${ticketNumber}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }
  
  export async function updateTicket(ticket) {
    const url = BASE_URL+`${route}/${ticket.id}`;
    const response = await axios.put(url,{
        "price": ticket.price,
        "number": ticket.number,
        "creationDate": ticket.creationDate,
        "category": ticket.category,
        "isValid": ticket.isValid,
        "totalTicket": ticket.totalTicket,
        "totalSold": ticket.totalSold,
        "eventId": ticket.eventId,
        "movieId": ticket.movieId,
        "accountId": ticket.accountId,
    });
    if (response.status === 200) {
        return response;
    }
  }
  