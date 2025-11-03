import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 text-white text-center px-6">
      <Image
        src={"/images/aruba-logo.png"}
        alt="logo"
        width={820}
        height={320}
        className="w-[20rem]"
      />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to <span className="text-yellow-300">Aruba Networks</span>
      </h1>

      <p className="text-lg md:text-xl mb-10 max-w-xl">
        Fast, Secure, and Reliable Networking Solutions for Modern Businesses.
      </p>

      <div className="flex gap-6">
        <Link
          href="/login"
          className="px-8 py-3 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition-all duration-200 shadow-md"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="px-8 py-3 rounded-xl bg-indigo-800 font-semibold hover:bg-indigo-900 transition-all duration-200 shadow-md"
        >
          Sign Up
        </Link>
      </div>
    </section>
  );
}
