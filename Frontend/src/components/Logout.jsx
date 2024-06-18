import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

export default function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {        
        setAuthUser(null);
        localStorage.removeItem("user");
        toast.success("Logout successfully");

        setTimeout(()=>{
            window.location.reload();
        },2000)
        
     
      
    
    } catch (err) {
      console.log(err);
      toast.error("Error: " + err.message);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
