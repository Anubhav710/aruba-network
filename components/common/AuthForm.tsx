"use client";

import React from "react";
import Input from "./Input";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

//Auth Schema with custom error messages only
const AuthFormSchema = z
  .object({
    email: z.email(),
    password: z
      .string({ error: "Password is required" })
      .min(6, { error: "Password must be at least 6 characters long" }),
    confirmPassword: z
      .string({ error: "Confirm Password is required" })
      .min(6, { error: "Password must be at least 6 characters long" })
      .optional(),
  })
  .refine(
    (data) => !data.confirmPassword || data.password === data.confirmPassword,
    {
      error: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

type AuthFormData = z.infer<typeof AuthFormSchema>;

const AuthForm = ({ type }: { type: string }) => {
  const isLogin = type === "login";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthFormData>({
    resolver: zodResolver(AuthFormSchema),
  });

  const onSubmit = (data: AuthFormData) => {
    console.log("Form Data:", data);
    toast.success("Form successfully submitted!");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="auth flex flex-col w-full "
    >
      <div className="space-y-4">
        <div className="space-y-4">
          <Input
            id="email"
            title="Email Address"
            register={register("email")}
            error={errors.email?.message}
          />

          <Input
            id="password"
            title="Password"
            type="password"
            register={register("password")}
            error={errors.password?.message}
          />
          {!isLogin && (
            <Input
              id="confirmPassword"
              title="Confirm Password*"
              type="password"
              register={register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />
          )}
        </div>

        {isLogin && (
          <span className="text-black w-max font-semibold inline-block text-sm cursor-pointer">
            Forgot password?
          </span>
        )}

        <button className="w-full bg-black rounded-[2px] text-white py-4 font-semibold cursor-pointer">
          {isLogin ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-sm">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <Link href="/signup" className="font-semibold cursor-pointer">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/login" className="font-semibold cursor-pointer">
                Log in
              </Link>
            </>
          )}
        </p>
      </div>

      <div className="flex items-center w-full mt-5">
        <hr className="grow border-t border-gray-300" />
        <span className="mx-4 text-gray-700 font-medium text-sm">OR</span>
        <hr className="grow border-t border-gray-300" />
      </div>

      <div className="flex items-center ring py-3 gap-2 rounded-[2px] ring-gray-400 justify-center mt-7 cursor-pointer hover:bg-gray-100 duration-200">
        <FcGoogle className="size-6" />
        <h5 className="font-semibold">Continue with Google</h5>
      </div>
    </form>
  );
};

export default AuthForm;
