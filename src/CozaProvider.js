import React, { createContext, useContext, useReducer } from 'react';

export const CozaContext = createContext();

export const CozaProvider = ({reducer, initialState, children}) => (
    <CozaContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </CozaContext.Provider>
); 

export const useCozaState = () => useContext(CozaContext);