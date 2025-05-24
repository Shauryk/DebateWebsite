import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Get user role from Firestore
      const docRef = doc(db, "DebateGoUsers", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        const role = userData.role;

        if (role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/");
        }
      } else {
        alert("User not found. Please sign up first.");
      }
    } catch (error) {
      console.error("Google Login Error:", error);
      toast.error("Google login failed. Please try again.");
    }
  };

  const handleEmailLogin = async () => {
    if (!email || !password) {
      toast.warn("Please enter email and password.");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Get user role from Firestore
      const docRef = doc(db, "DebateGoUsers", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        const role = userData.role;

        if (role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/");
        }
      } else {
        alert("User data not found. Please contact support.");
      }
    } catch (error) {
      console.error("Email Login Error:", error);
      if (error.code === "auth/user-not-found") {
        toast.error("User not found. Please sign up.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password.");
      } else {
        toast.error("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <ToastContainer />
      <div className="bg-white rounded-2xl p-10 shadow-lg max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          autoComplete="current-password"
        />

        <button
          onClick={handleEmailLogin}
          className="bg-blue-600 text-white w-full py-2 rounded mb-4 hover:bg-blue-700 transition"
        >
          Login with Email
        </button>

        <div className="my-4 text-gray-400">— OR —</div>

        <button
          onClick={handleGoogleLogin}
          className="bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded shadow-md"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
