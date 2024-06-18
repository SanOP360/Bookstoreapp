import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const Navigate=useNavigate()
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
    setApiError(""); 
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullname) tempErrors.fullname = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios
        .post("http://localhost:4001/user/signup", formData)
        .then((res) => {
          if (res.data) {
            toast.success("Signup successful");
            Navigate('/')
          }
        })
        .catch((err) => {
          if (err.response) {
            
            toast.error(err.response.data.message) 
          }
        });
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        id="my_modal_3"
        className="border-[2px] shadow-md p-5 rounded-md md:w-[600px]"
        onSubmit={onSubmit}
      >
        <h3 className="font-bold text-lg dark:text-slate-100">Signup</h3>
        <div className="mt-4 space-y">
          <span className="dark:text-slate-100">Name</span>
          <br />
          <input
            type="text"
            name="fullname"
            placeholder="Enter your name"
            className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-600 dark:text-white dark:border-gray-600"
            value={formData.fullname}
            onChange={handleChange}
          />
          <br />
          {errors.fullname && (
            <span className="text-red-500 text-sm">{errors.fullname}</span>
          )}
        </div>
        <div className="mt-4 space-y">
          <span className="dark:text-slate-100">Email</span>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-600 dark:text-white dark:border-gray-600"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>
        <div className="mt-4 space-y">
          <span className="dark:text-slate-100">Password</span>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-600 dark:text-white dark:border-gray-600"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
          )}
        </div>

        <div className="flex justify-around mt-4">
          <button className="bg-pink-500 text-white rounded px-3 py-1 hover:bg-pink-700 duration-200 dark:border">
            Signup
          </button>
          <p className="dark:text-slate-100 md:text-xl">
            Have an account?{" "}
            <Link to="/" className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
