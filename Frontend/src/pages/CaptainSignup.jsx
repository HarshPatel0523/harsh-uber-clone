import { Link } from "react-router-dom";
import { useState } from "react";

const CaptainSignup = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setUser({ fullName: {firstName, lastName}, email, password });
    console.log(user);

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
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