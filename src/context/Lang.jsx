import { createContext, useContext } from 'react'

export const langContext = createContext(null); 

export const useLang = () => {
    return useContext(langContext)
}