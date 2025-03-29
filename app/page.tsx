"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-evenly bg-white shadow-lg rounded-lg h-64 w-96">
        OytunDB
        <div className="flex flex-row space-x-4">
          <Link
            className="px-4 py-2 bg-blue-500 text-white rounded"
            href="/login"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
