import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function User() {
    const params = useParams();   //dynamic routing using useparams
    const {name} = params;
    return (
        <div>
            <h4>This is {name} page</h4>  
        </div>
    )
}
