import { Fragment, useContext, useEffect } from 'react'
import { parseCookies } from 'nookies'

import { AuthContext } from '../contexts/AuthContext'
import { getAPIClient } from '../services/axios'

import { URL_API, TOKEN } from "../services/url_api";

export default function logout() {
  
  const { signOut } = useContext(AuthContext)

    return (
        <div>
             <button className="mt-8 space-y-6" onClick={signOut}>
               Click me
            </button>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    const apiClient = getAPIClient(ctx);
    const { ['next.token']: token } = parseCookies(ctx)


    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        }
      }
    }
  
    //await apiClient.get('/users')
  
    return {
      props: {}
    }
  }