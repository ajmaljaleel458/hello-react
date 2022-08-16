import React,{ useContext } from 'react'
import { UserContext, PlaceContext } from './ContextSample'

function ConsumerContext() {
    const name = useContext(UserContext);
    const place = useContext(PlaceContext);
    return (
        <div>
            <h1>Hello { name }, are you from { place }</h1>
        </div>
    )
}

export default ConsumerContext