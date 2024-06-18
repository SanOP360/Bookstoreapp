import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [authUser, setAuthUser] = useAuth(); // Corrected destructuring

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
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios
        .post("http://localhost:4001/user/login", formData)
        .then((res) => {
          if (res.data) {
            toast.success("Logged in successfully");
            document.getElementById("my_modal_3").close();

            localStorage.setItem("user", JSON.stringify(res.data.user));
            setAuthUser(res.data.user);

            // setTimeout(() => {
            //   window.location.reload();
            // }, 2000);
          }
        })
        .catch((err) => {
          if (err.response) {
            toast.error(err.response.data.message);
          }
        });
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-950 dark:border border-white">
          <form onSubmit={onSubmit}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-slate-900"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg dark:text-slate-100">Login</h3>
            <div className="mt-4 space-y">
              <span className="dark:text-slate-100">Email</span>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-600 dark:text-slate-100 dark:border-gray-600"
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
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-600 dark:text-slate-100 dark:border-gray-600"
                value={formData.password}
                onChange={handleChange}
              />
              <br />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password}</span>
              )}
            </div>

            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded px-3 py-1 hover:bg-pink-700 duration-200 dark:border"
              >
                Login
              </button>
              <p className="dark:text-slate-100">
                Not registered?{" "}
                <Link to="/signup" className="text-blue-500 underline">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
