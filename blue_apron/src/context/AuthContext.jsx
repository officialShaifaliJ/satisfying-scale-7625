import React,{useState} from 'react';

export const AuthContext = React.createContext(false);

export default function AuthContextProvider ({children}){
const [isAuth,setAuth]=useState(true);
const [token,setToken]=useState(null);
const [ischeckout,setCheckout]=useState(false);
const login = (token,isAuth) =>{
    setAuth(isAuth);
    setToken(token);
    console.log(token,isAuth)
}

const logOut =()=>{
    setAuth(false);
    setToken(null);
}

return <AuthContext.Provider value={{setAuth,isAuth,ischeckout,setCheckout,logOut,token,setToken,login}}>
    {children}
</AuthContext.Provider>

}