import React,{useState} from 'react';

export const AuthContext = React.createContext();

export default function AuthContextProvider ({children}){
const [isAuth,setAuth]=useState(false);
const [token,setToken]=useState(null);

const login = (token,isAuth) =>{
    setAuth(isAuth);
    setToken(token);
    console.log(token,isAuth)
}
const logOut =()=>{
    setAuth(false);
    setToken(null);
}

return <AuthContext.Provider value={{setAuth,isAuth,logOut,token,login}}>
    {children}
</AuthContext.Provider>

}