import axios from 'axios';
import {useEffect } from 'react';
import {BASE_URL} from "../config/http";
import { toast } from "react-toastify";

const route = '/accounts';
var TypeAccount = {
    1: "Classique",
    2: "Professionnel"
  }

  useEffect(() => {
    getAccounts();
  }, []);

  export async function getAccounts () {
    const url = BASE_URL+`${route}`;
    const response = await axios.get(url);
        if (response.status === 200) {
            return response;
        }
  }

  export async function addAccount(account)  {
    const url = BASE_URL+`${route}/`;
    const response = await axios.put(url, 
      {
      "id": account.id,
      "amount": account.amount,
      "pinCode": account.pinCode,
      "stopAmount": account.stopAmount,
      "accountTypeId": account.accountTypeId,
      "userId": account.userId,
      });

    if (response.status === 200) {
        toast.success("Account created successfuly");
    } else {
        toast.error("Something wrong !!! Please try again");
    }
}

export default async function getAccountById(id){
  const url = BASE_URL+`${route}/${id}`;
  const response = await axios.get(url);
  if (response.status === 200) {
    return response;
  } 
}

export default async function getStopAmount(id){
  const url = BASE_URL+`${route}/getStopAmount/${id}`;
  const response = await axios.get(url);
  if (response.status === 200) {
    return response;
  }
}

export async function getAccountByUserId(userId, accountTypeId){
  const url = BASE_URL+`${route}/getByUserId/${userId}/${accountTypeId}`;
  const response = await axios.get(url);
  if (response.status === 200) {
    return response;
  }
}


export  async function getAccountByUserPhoneNumber(userPhoneNumberNumber, accountTypeId){
  const url = BASE_URL+`${route}/getByPhoneNumber/${userPhoneNumberNumber}/${accountTypeId}`;
  const response = await axios.get(url);
  if (response.status === 200) {
    return response;
  }
}

export async function getAccountAmount(id){
  const url = BASE_URL+`${route}/getAmount/${id}`;
  const response = await axios.get(url);
  if (response.status === 200) {
    return response;
  }
}


export async function updateAccountAmount(id, amount){
  const url = BASE_URL+`${route}/updateStopAmount/${id}/${amount}`;
  const response = await axios.get(url,{
    "id": id,
    "amount": amount,
  });
  if (response.status === 200) {
    return response;
  }
}


export async function updateAccountCodePin(id, codePin){
  const url = BASE_URL+`${route}/updateCodePin/${id}/${codePin}`;
  const response = await axios.put(url,{
    "id": id,
    "amount": codePin,
  });
  if (response.status === 200) {
    return response;
  }
}

export async function verifyAccountCodePin(codePin, userId){
  const url = BASE_URL+`${route}/verifyCodePin/${codePin}/${userId}`;
  const response = await axios.get(url);
  if (response.status === 200) {
    return response;
  }
}
