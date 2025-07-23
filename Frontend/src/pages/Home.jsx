import { useRef, useState } from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from "../Components/LocationSearchPanel";

const Home = () => {

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
        duration: 0.3,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [panelOpen]);


  return (
    <div className="h-screen w-screen relative">
      <img className="w-16 absolute left-5 top-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div className="h-screen w-screen">
        <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className="flex flex-col justify-end absolute h-screen top-0 w-full">
        <div className={`p-5 bg-white ${panelOpen ? 'h-[30%]' : 'h-[24%]'} relative`}>
          <h5 ref={panelCloseRef} onClick={() => setPanelOpen(false)} className="opacity-0 absolute top-2 right-2">
            <i className="ri-arrow-down-wide-line " onClick={() => {setPanelOpen(false)}}></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className={`line absolute h-16 w-1 ${panelOpen ? 'top-[35%]' : 'top-[43%]'} left-10 bg-gray-700 rounded-full`}></div>
            <input value={pickup} onClick={() => {setPanelOpen(true)}} onChange={(e) => setPickup(e.target.value)} className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5" type="text" placeholder="Add a pick-up location" />
            <input value={destination} onClick={() => {setPanelOpen(true)}} onChange={(e) => setDestination(e.target.value)} className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3" type="text" placeholder="Enter your destination" />
          </form>
        </div>
        <div ref={panelRef} className="bg-white">
          <LocationSearchPanel />
        </div>
      </div>
    </div>
  )
}

export default Home