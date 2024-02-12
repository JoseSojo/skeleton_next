"use client";

import { Dispatch, FC, ReactNode, SetStateAction, createContext, useContext, useState } from "react"

interface AuthContextInterface {
    session: boolean
    setSession: Dispatch<SetStateAction<boolean>>
}

const DefaultContext: AuthContextInterface = {
    session: false,
    setSession: ()=>{}
}

export const AuthContext = createContext(DefaultContext);

interface Props {
    children: ReactNode
}

export const AuthProvider: FC<Props> = ({children}) => {
    
    const token = window && window.localStorage.getItem('token');
    const testSession = token ? true : false;

    const [session, setSession] = useState(testSession);

    return (
        <AuthContext.Provider value={{
            session,
            setSession
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);