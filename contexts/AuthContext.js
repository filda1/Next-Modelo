import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

import { recoverUserInformation, signInRequest } from "../services/auth";
import { api } from "../services/api";


export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState([])

  //const isAuthenticated = !!user;
  const isAuthenticated = false;

  const { 'next.token': token } = parseCookies()

  //------------ En caso, que se  haga Refresh pagina actualiza los datos del user -------//
/*useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      recoverUserInformation().then(response => {
        setUser(response.user)
      })
    }
  }, [])*/

  //---------- Primero, entra los datos de Login por aqui  ----------//
  async function signIn({ email, password }) {
    //const { token, user } = await signInRequest({
    const {  user } = await signInRequest({
      email,
      password,
    })

   /* setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    })*/

     
    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user)

    // console.log(user)
    //Adentro
    Router.push('/second');
  }

  return (
    //------ Como Ultimo se le paso los datos a los componentes que estan envueltos con Auth Global -----//
    <AuthContext.Provider value={{ user, isAuthenticated, signIn  }}>
      {children}
    </AuthContext.Provider>
  )
}

