"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data.user.role);
    if (data.user.role === "ADMIN") {
      window.location.href = "/admin";
    }
    if (data.user.role === "USER") {
      window.location.href = "/user";
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-evenly bg-white shadow-lg rounded-lg h-64 w-96">
        OytunDB
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          />
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
