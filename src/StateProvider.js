import React,{createContext,useContext,useReducer} from 'react';

//prepars the data layer
export const StateContext = createContext();

// wrap our app and provide tha data layer to all component
export const StateProvider =({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>{children}
    </StateContext.Provider>

);

//pull information from data layer 
export const useStateValue=()=>useContext(StateContext);

