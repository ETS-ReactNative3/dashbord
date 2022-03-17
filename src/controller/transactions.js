import axios from 'axios';
import { useEffect } from 'react';
import {BASE_URL} from "../config/http";


const route = '/transactions';
var typeTransaction = {
    1:"Dépot",
    2:"Transfert",
    3:"Achat",
    4:"Vente"
  }

  useEffect(() => {
    getTransactions();
  }, []);

  export async function getTransactions () {
    const url = BASE_URL+`${route}`;
    const response = await axios.get(url);
        if (response.status === 200) {
            return response;
        }
  }

  export async function getTransaction (id) {
    const url = BASE_URL+`${route}/${id}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }

  export async function createTransaction (transaction) {
    const url = BASE_URL+`${route}/`;
    const response = await axios.put(url, {
      "amount": transaction.amount,
      "senderAccountId": transaction.senderAccountId,
      "senderPhone": transaction.senderPhone,
      "receiverAccountId": transaction.receiverAccountId,
      "receiverPhone": transaction.receiverPhone,
      "storeId": transaction.storeId,
      "transactionTypeId": transaction.transactionTypeId,
    });
    if (response.status === 200) {
        return response;
    }
  }
 
  export async function getTransactionByAccountId (id) {
    const url = BASE_URL+`${route}/getByAccountId/${id}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }
