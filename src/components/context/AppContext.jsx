import { createContext, useContext, useState } from "react";

export const RootContext = createContext();

 const useData = {
    login: 'test@gmail.com',
    pass: '2425',
 }

const AppContext = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log("user: ", user);
    const value = {
        useData,
        user,
        setUser,
    }

  return <RootContext.Provider value={value}>{ children }</RootContext.Provider>;
};

export default AppContext;

export function useAppContext() {
    const data = useContext(RootContext)
    return data;
}