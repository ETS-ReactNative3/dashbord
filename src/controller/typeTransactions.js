import axios from 'axios';
import { useEffect } from 'react';
import {BASE_URL} from "../config/http";


const route = '/transactionsTypes0';

export async function createTransactionType(transactionType) {
    const url = BASE_URL+`${route}/`;
    const response = await axios.put(url,{
        "id": transactionType.id,
        "name": transactionType.name,
    });
    if (response.status === 200) {
        return response;
    }
  }

  export async function getTransactionTypes () {
    const url = BASE_URL+`${route}/`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }

  export async function getTransactionTypeById (id) {
    const url = BASE_URL+`${route}/${id}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }
  
  export async function getTransactionTypeByName (name) {
    const url = BASE_URL+`${route}/getByName/${name}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }

  // export async function createTransactionType(transactionType) {
  //   const url = BASE_URL+`${route}/${transactionType.id}`;
  //   const response = await axios.put(url,{
  //       "id": transactionType.id,
  //       "name": transactionType.name,
  //   });
  //   if (response.status === 200) {
  //       return response;
  //   }
  // }
  