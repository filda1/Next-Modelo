import React, { useState, useEffect } from "react";
import Router from 'next/router'

import { useStateValue } from "../contexts/StateProvider";

const page2_ctx_api = () => {
    //Recibo los datos de Context API/Reducer
    const [{ basket, current_user }, dispatch] = useStateValue();

    const goPage = () => {
        Router.push('/')
    }

    return (
        <div>
            <label>{current_user.email}</label>
            <button onClick={ goPage}>Add to basket</button>
        </div>
        
    )
}

export default page2_ctx_api

