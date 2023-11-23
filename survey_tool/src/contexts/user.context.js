import { createContext, useState } from "react";
import {App, Credentials} from "realm-web";
import {APP_ID} from "../realm/constants";

// create new realm app context
const app = new App(APP_ID);

// export public userconet for access across pages 
export const UserContext = createContext();

export const UserProvider = ({children}) => {
    
    const [user, setUser] = useState(null)];

    // login function
    const emailPasswordLogin = async (email, password) => {
        const credentials = Credentials.emailPassword(email, password);
        const authenticatedUser = await app.logIn(credentials);
        setUser(authenticatedUser);
        return authenticatedUser;
    };

    //sign up function
    const emailPasswordSignUp = async (email, password) => {
        try {
            await app.emailPasswordAuth.registerUser(email, password);
            return await emailPasswordLogin(email, password);
        }
        catch (error) {
            throw error;
        }
    };

    // fetch the user from local storage 
    const fetchUser = async () => {
        if (!app.currentUser) return false;
        try {
            await app.currentUser.refreshCustomData();
            setUser(app.currentUser);
            return app.currentUser;
        } catch (error) {
            throw error;
        }
    };
};

// logout function 
const logOutUser = async () => {
    if (!app.currentUser) return false;
    try {
        await app.currentUser.logOut();
        setUser(null);
        return true;
    } catch (error) {
        throw error;
    }
}

return <UserContext.Provider value={{user, setUser, fetchUser, logOutUser, emailPasswordLogin, emailPasswordSignUp}}>
    {children}  
</UserContext.Provider>>    