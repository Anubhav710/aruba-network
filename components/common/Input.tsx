"use client";

import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type InputProps = {
  title: string;
  id: string;
  type?: string;
  register?: UseFormRegisterReturn;
  error?: string;
};

const Input: React.FC<InputProps> = ({
  title,
  id,
  type = "text",
  register,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type={inputType}
          id={id}
          {...register}
          className={`block px-2.5 py-3.5  w-full text-black bg-transparent rounded-[2px] ring-1 
          ${
            error
              ? "ring-red-500 focus:ring-red-500"
              : "ring-[#c9cace] focus:ring-black"
          } 
          appearance-none focus:outline-none peer`}
          placeholder=" "
        />

        <label
          htmlFor={id}
          className="absolute text-gray-600 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-left bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black"
        >
          {title}
        </label>
        {/*  Password show/hide toggle */}
        {type === "password" && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
          >
            {showPassword ? (
              <AiFillEyeInvisible size={20} />
            ) : (
              <AiFillEye size={20} />
            )}
          </button>
        )}
      </div>

      {/*  Error message */}
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};

export default Input;

// peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
// peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4
// start-1 peer-focus:text-black
