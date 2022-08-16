import React, { createContext } from 'react'
import ConsumerContext from './ConsumerContext';

export const UserContext = createContext();
export const PlaceContext = createContext();

function ContextSample() {
    return (
        <div>
            <UserContext.Provider value={'Ajmal'}>
                <PlaceContext.Provider value={"Kottayam"}>
                    <ConsumerContext></ConsumerContext>
                </PlaceContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default ContextSample