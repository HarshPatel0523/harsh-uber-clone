import { useContext } from "react"
import { UserDataContext } from "../Context/UserContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const UserProtectWrapper = ({ children }) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    if (!token) return null;

    return (
        <>
            {children}
        </>
    )
}

export default UserProtectWrapper