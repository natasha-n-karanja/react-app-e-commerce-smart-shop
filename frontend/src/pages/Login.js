import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://127.0.0.1:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
      alert("Login successful!");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto space-y-4">
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full" />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full" />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 w-full">Login</button>
    </div>
  );
}


