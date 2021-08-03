import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { setCookie, parseCookies } from 'nookies'

import { api } from "../services/api";
import { URL_API } from "../services/url_api";

export async function signInRequest(data) {

    const client = {   
        "identifier": data.email,
        "password": data.password
      };
  

      axios.post(URL_API + '/auth/local', client, {
        headers:{
            //'authorization': your_token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
      })
      .then(res => {
               //console.log('RES >>',res) 
              setCookie(undefined, 'next.token', res.data.jwt, {
                maxAge: 60 * 60 * 1, // 1 hour
              })
              setCookie(undefined, 'next.user_id', res.data.user.id, {
                maxAge: 60 * 60 * 1, // 1 hour
               })
              setCookie(undefined, 'next.user_email', rest.data.user.email, {
               maxAge: 60 * 60 * 1, // 1 hour
              })

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