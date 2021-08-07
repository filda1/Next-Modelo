import { Fragment, useContext, useEffect } from 'react'
import { parseCookies } from 'nookies'

import { AuthContext } from '../contexts/AuthContext'
import { useStateValue } from "../contexts/StateProvider";
import { getAPIClient } from '../services/axios'

export default function second() {
    //Conecto AuthContext y Recibo
    const { user } = useContext(AuthContext)

    //Conecto ContextAPI y Recibo
    const [{ basket, current_user }, dispatch] = useStateValue();

    return (
        <div>
          { user.email}, { current_user.name}
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