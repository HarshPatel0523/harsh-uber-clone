import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
        <div className="bg-[url(https://images.unsplash.com/photo-1566725240726-f3b8413be1b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=hM3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYWZmaWMlMjBsaWdodHN8ZW58MHx8MHx8fDA%3D)] bg-cover bg-center h-screen pt-8 flex flex-col justify-between bg-fixed w-full bg-red-400" style={{ backgroundPosition: "-200px -140px" }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="Uber" className="w-16 ml-8" />
            <div className="bg-white pb-7 py-4 px-4">
                <h2 className="text-3xl font-bold">Get started with Uber</h2>
                <Link to="/login" className="flex items-center justify-center bg-black text-white w-full py-3 rounded mt-5">Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start