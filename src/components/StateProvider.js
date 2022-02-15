import React, { createContext, useContext, useReducer } from "react"

// DataLayer preparation
export const StateContext = createContext()

// wrap app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// pull information from the DataLayer
export const useStateValue = () => useContext(StateContext)
