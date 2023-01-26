import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    ); 
    //This will make everything where our photo required

    //When you click on button in login form this function will be called and so, 
    // this function will update user details in our local storage system

    const login = async (inputs) => {

        const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
            withCredentials:true,
        });

        setCurrentUser(res.data) //used user information and cookie to laod wherever require
    };

    //this will store user information in local storage
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser)); // we cannot store json object in local storage its should be string
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{currentUser ,login}}>
            {children}
        </AuthContext.Provider>
    );
};