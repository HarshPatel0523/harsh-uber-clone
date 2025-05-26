import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CaptainDataContext } from "../Context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {

  const navigate = useNavigate()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('') 
  const [vehicleType, setVehicleType] = useState('')

  const { captain,setCaptain } = useContext(CaptainDataContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const captainData = { 
      fullName: {
        firstName, 
        lastName
      }, 
      email, 
      password,
      vehicle : {
        color : vehicleColor,
        plate : vehiclePlate,
        capacity : vehicleCapacity,
        vehicleType
      } 
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if(response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate("/captain-home")
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setVehicleColor("")
    setVehiclePlate("")
    setVehicleCapacity("")
    setVehicleType("")
  }

  return (
    <div className="py-5 px-5 flex flex-col justify-between h-screen">
      <div>
        <form onSubmit={handleSubmit}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-cYoaVZgSEHpFe2jg9Xheh8OIZaqRxO37Enbr4BeVoCjD9J_UGkSZEg&s" alt="Uber" className="w-16 mb-8" />
          <h3 className="text-lg font-medium mb-2">What&apos;s our Captain&apos;s name</h3>
          <div className="flex gap-4 mb-6">
            <input type="text" className="bg-[#eeeeee] w-1/2 px-4 py-2 rounded text-lg placeholder:text-base" placeholder="First name" required value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" className="bg-[#eeeeee] w-1/2 px-4 py-2 rounded text-lg placeholder:text-base" placeholder="Last name" required value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <h3 className="text-lg font-medium mb-2">What&apos;s your email</h3>
          <input type="email" className="bg-[#eeeeee] mb-5 w-full px-4 py-2 rounded text-lg placeholder:text-base" placeholder="email@example.com" required value={email} onChange={(e) => setEmail(e.target.value)}/>
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input type="password" className="bg-[#eeeeee] mb-5 w-full px-4 py-2 rounded text-lg placeholder:text-base" placeholder="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>

          <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>

          <div className='flex gap-2 mb-7'>
          <select 
            value={vehicleType} 
            onChange={(e) => setVehicleType(e.target.value)}
            className="bg-[#eeeeee] mb-5 w-1/2 px-4 py-2 rounded text-lg"
            required
          >
            <option value="" disabled>Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="motorcycle">Motorcycle</option>
          </select>
 
          <input 
            type="text" 
            className="bg-[#eeeeee] mb-5 w-1/2 px-4 py-2 rounded text-lg placeholder:text-base" 
            placeholder="Vehicle Color" 
            required 
            value={vehicleColor} 
            onChange={(e) => setVehicleColor(e.target.value)}
          />
          </div>

          <div className="flex gap-4 mb-7">

          <input 
            type="text" 
            className="bg-[#eeeeee] mb-5 w-1/2 px-4 py-2 rounded text-lg placeholder:text-base" 
            placeholder="Vehicle Plate Number" 
            required 
            value={vehiclePlate} 
            onChange={(e) => setVehiclePlate(e.target.value)}
            />

          <input 
            type="number" 
            className="bg-[#eeeeee] mb-5 w-1/2 px-4 py-2 rounded text-lg placeholder:text-base" 
            placeholder="Vehicle Capacity" 
            required 
            value={vehicleCapacity} 
            onChange={(e) => setVehicleCapacity(e.target.value)}
            />
          </div>

          <button type="submit" className="bg-[#111] text-white font-semibold mb-3 w-full px-4 py-2 text-lg rounded">Register</button>
          <p className="text-center">Already have an account? <Link to="/captain-login" className="text-blue-600">Login here</Link></p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">By signing up, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number you provided.</p>
      </div>
    </div>
  )
}

export default CaptainSignup