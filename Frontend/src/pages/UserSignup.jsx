/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext} from "react";
import axios from "axios";
import { UserDataContext } from '../Context/UserContext'

const UserSignup = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newUser = { 
      fullName: {
        firstName : firstName, 
        lastName : lastName
      }, 
      email : email, 
      password : password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if(response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  }

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <form onSubmit={(e) => {
          handleSubmit(e)
        }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="Uber" className="w-16 mb-8" />
          <h3 className="text-lg font-medium mb-2">What&apos;s your name</h3>
          <div className="flex gap-4 mb-6">
            <input type="text" className="bg-[#eeeeee] w-1/2 px-4 py-2 rounded text-lg placeholder:text-base" placeholder="First name" required value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" className="bg-[#eeeeee] w-1/2 px-4 py-2 rounded text-lg placeholder:text-base" placeholder="Last name" required value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <h3 className="text-lg font-medium mb-2">What&apos;s your email</h3>
          <input type="email" className="bg-[#eeeeee] mb-5 w-full px-4 py-2 rounded text-lg placeholder:text-base" placeholder="email@example.com" required value={email} onChange={(e) => setEmail(e.target.value)}/>
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input type="password" className="bg-[#eeeeee] mb-5 w-full px-4 py-2 rounded text-lg placeholder:text-base" placeholder="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" className="bg-[#111] text-white font-semibold mb-3 w-full px-4 py-2 text-lg rounded">Register</button>
          <p className="text-center">Already have an account? <Link to="/login" className="text-blue-600">Login here</Link></p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">By proceeding, you consent to get calls, WhatsApp messages or SMS notifications, including by automated means, from Uber and its affiliates to the number you provided.</p>
      </div>
    </div>
  )
}

export default UserSignup