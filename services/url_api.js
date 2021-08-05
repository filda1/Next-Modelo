import { setCookie, parseCookies, destroyCookie } from 'nookies'

export const URL_API = "http://localhost:1337"


const { 'next.token': token } = parseCookies()

export const TOKEN = `${token}`;


