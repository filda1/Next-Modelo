import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { setCookie, parseCookies } from 'nookies' //Falla al meter email

import Cookies from 'js-cookie' //https://github.com/js-cookie/js-cookie

import { api } from "../services/api";
import { URL_API, TOKEN } from "../services/url_api";

export async function signInRequest(data) {

    const client = {   
        "identifier": data.email,
        "password": data.password
      };
  
    //Expire in 59 Minuts
    var inFifteenMinutes = new Date(new Date().getTime() + 59 * 60 * 1000);

   //console.log(api)
      axios.post( URL_API + '/auth/local', client, {
     // axios.post(`${api}/auth/local`, client, {
        headers:{
            //'authorization': your_token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
      })
      .then(res => {
               //console.log('RES >>',res) 
             /* setCookie(undefined, 'next.token', res.data.jwt, {
                maxAge: 60 * 60 * 1, // 1 hour
              })
              setCookie(undefined, 'next.user_id', res.data.user.id, {
                maxAge: 60 * 60 * 1, // 1 hour
               })*/

               Cookies.set('next.token', res.data.jwt, {
                expires: inFifteenMinutes
               });
               Cookies.set('next.user_id', res.data.user.id, {
                expires: inFifteenMinutes
               });
               Cookies.set('next.email', res.data.user.email, {
                expires: inFifteenMinutes
               });
              

              const data = res.data

              return data

       })
       .catch( error => {     
            return error;
        });

       return {
         user: data,  
        //token: '',
                    
       }
}

/*export  function recoverUserInformation() {
    return {
     
    }
}*/

