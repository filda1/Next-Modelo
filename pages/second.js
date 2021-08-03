import { Fragment, useContext, useEffect } from 'react'
import { parseCookies } from 'nookies'

import { AuthContext } from '../contexts/AuthContext'
import { getAPIClient } from '../services/axios'

export default function second() {
    const { user } = useContext(AuthContext)
    return (
        <div>
            Hei
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    const apiClient = getAPIClient(ctx);
    const { ['next.token']: token } = parseCookies(ctx)

  //console.log(ctx.req.token)

    //const token ="gfggsgsggsdfdsu34ujjfjd"

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