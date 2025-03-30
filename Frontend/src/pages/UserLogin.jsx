import { Link } from "react-router-dom";
import { useState } from "react";

const UserLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setUser({ email, password });
    console.log(user);

    setEmail("");
    setPassword("");
  }

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <form onSubmit={handleSubmit}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="Uber" className="w-16 mb-10" />
          <h3 className="text-lg font-medium mb-2">What&apos;s your email</h3>
          <input type="email" className="bg-[#eeeeee] mb-7 w-full px-4 py-2 rounded text-lg placeholder:text-base" placeholder="email@example.com" required value={email} onChange={(e) => setEmail(e.target.value)}/>
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input type="password" className="bg-[#eeeeee] mb-7 w-full px-4 py-2 rounded text-lg placeholder:text-base" placeholder="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" className="bg-[#111] text-white font-semibold mb-3 w-full px-4 py-2 text-lg rounded">Login</button>
          <p className="text-center">Don&apos;t have an account? <Link to="/signup " className="text-blue-600">Register here</Link></p>
        </form>
      </div>
      <div>
        <Link to="/captain-login" className="flex items-center justify-center bg-[#10b461] text-white font-semibold mb-4 w-full px-4 py-2 text-lg rounded">Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin