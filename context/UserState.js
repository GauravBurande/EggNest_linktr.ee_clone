import UserContext from "./UserContext"
import { useState } from "react"

const UserState = ({ children }) => {

    const [userData, setUserData] = useState()

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserState;