import React from "react";

import { useParams } from 'react-router-dom'

export default props => {
    const { id, test } = useParams()
    return (
        <div className="param">
            <h1>Param Component</h1>
            <h2>Value: {id}</h2>
            <h2>Value: {test}</h2>
        </div>
    )
}