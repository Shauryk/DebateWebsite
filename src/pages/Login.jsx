import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

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
        // If user doesn't exist in Firestore (e.g., if not registered via signup)
        alert("User not found. Please sign up first.");
      }
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ml-64 p-4">
      <div className="bg-white rounded-2xl p-10 shadow-lg max-w-sm text-center">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <button
          onClick={handleGoogleLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md w-full"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
