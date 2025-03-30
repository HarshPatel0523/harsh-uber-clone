import { Link } from "react-router-dom";
import { useState } from "react";

const CaptainLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captain, setCaptain] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setCaptain({ email, password });
    console.log(captain);

    setEmail("");
    setPassword("");
  }

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-cYoaVZgSEHpFe2jg9Xheh8OIZaqRxO37Enbr4BeVoCjD9J_UGkSZEg&s" alt="Uber" className="w-16 mb-8" />
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">What&apos;s your email</h3>
          <input type="email" className="bg-[#eeeeee] mb-7 w-full px-4 py-2 rounded text-lg placeholder:text-base" placeholder="email@example.com" required value={email} onChange={(e) => setEmail(e.target.value)}/>
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input type="password" className="bg-[#eeeeee] mb-7 w-full px-4 py-2 rounded text-lg placeholder:text-base" placeholder="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" className="bg-[#111] text-white font-semibold mb-3 w-full px-4 py-2 text-lg rounded">Login</button>
          <p className="text-center">Don&apos;t have an account? <Link to="/captain-signup " className="text-blue-600">Register as a Captain</Link></p>
        </form>
      </div>
      <div>
        <Link to="/login" className="flex items-center justify-center bg-[#d5622d] text-white font-semibold mb-4 w-full px-4 py-2 text-lg rounded">Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin