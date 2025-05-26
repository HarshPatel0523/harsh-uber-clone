import { useContext, useState } from "react"
import { CaptainDataContext } from "../Context/CaptainContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
    
const CaptainProtectWrapper = ({ children }) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        if (!token) {
            navigate("/captain-login");
        }
    }, [token, navigate]);

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        if(response.status === 200) {
            setCaptain(response.data.captain)
            setIsLoading(false)
        }
    })
    .catch(error => {
        console.error("Error fetching captain profile:", error)
        setIsLoading(false)
    })

    if (!token) return null;

    if(isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-cYoaVZgSEHpFe2jg9Xheh8OIZaqRxO37Enbr4BeVoCjD9J_UGkSZEg&s" alt="Loading..." className="w-16 animate-spin" />
            </div>
        )
    }

    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectWrapper