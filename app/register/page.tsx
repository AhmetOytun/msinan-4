"use client";

import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<"USER" | "ADMIN">("USER");

  const handleRegister = async () => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
        role,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-evenly bg-white shadow-lg rounded-lg h-[500px] w-[500px]">
        OytunDB
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          />
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
          <div className="flex flex-row space-x-4 items-center">
            <input
              type="checkbox"
              name="role"
              value="ADMIN"
              onChange={(e) => setRole(e.target.checked ? "ADMIN" : "USER")}
            />
            <label htmlFor="role">Admin?</label>
          </div>
          <button
            onClick={handleRegister}
            className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
