import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    //When you click on button in login form this function will be called and so, 
    // this function will update user details in our local storage system
    const login = () => {
        //TO DO
        setCurrentUser({
            id:1,
            name:"John Doe",
            profilePic: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
        });
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