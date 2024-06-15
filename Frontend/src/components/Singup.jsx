import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Singup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen items-center justify-center ">
      <form
        id="my_modal_3"
        className="border-[2px] shadow-md p-5 rounded-md md:w-[600px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="font-bold text-lg dark:text-slate-100">Signup</h3>
        <div className="mt-4 space-y">
          <span className="dark:text-slate-100">Name</span>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-600 dark:text-white dark:border-gray-600"
            {...register("name", { required: true })}
          />
          <br />
          {errors.name && (
            <span className="text-red-500 text-sm">Name is required</span>
          )}
        </div>
        <div className="mt-4 space-y">
          <span className="dark:text-slate-100">Email</span>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-600 dark:text-white dark:border-gray-600"
            {...register("email", { required: true })}
          />
          <br />
          {errors.email && (
            <span className="text-red-500 text-sm">Email is required</span>
          )}
        </div>
        <div className="mt-4 space-y">
          <span className="dark:text-slate-100">Password</span>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-600 dark:text-white dark:border-gray-600"
            {...register("password", { required: true })}
          />
          <br />
          {errors.password && (
            <span className="text-red-500 text-sm">Password is required</span>
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

export default Singup
