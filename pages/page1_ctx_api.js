import React, { useState, useEffect } from "react";
import Router from 'next/router'

import { useStateValue } from "../contexts/StateProvider";

const page1_ctx_api = () => {

    const [{ basket, current_user }, dispatch] = useStateValue();

    
    const addTestUser = () => {
        //Envio user test a Context API (especificamente a reducer)
        dispatch({
            type: "SET_USER",
            user: {
              id: 8,
              name: "User Context API",
              email: "contextApi@gmail.com",
            },
          })
          Router.push('/page2_ctx_api')
    }


    return (
        <div>
            <button onClick={addTestUser}>Add to basket</button>
        </div>
    )
}

export default page1_ctx_api
