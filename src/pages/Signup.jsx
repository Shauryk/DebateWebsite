import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user already exists
      const userDocRef = doc(db, "DebateGoUsers", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        // If not exists, create user doc
        await setDoc(userDocRef, {
          displayName: user.displayName,
          email: user.email,
          role: "user",
          score: 0,
        });
        toast.success("Account created successfully!");
      } else {
        toast.info("Account already exists. Logging you in...");
      }

      navigate("/");

    } catch (error) {
      console.error("Google Signup Error:", error.message);
      toast.error("Signup failed. Try again.");
    }
  };

  const handleEmailSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "DebateGoUsers", user.uid), {
        displayName: name,
        email: user.email,
        role: "user",
        score: 0,
      });

      toast.success("Account created successfully!");
      navigate("/");

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.info("This email is already registered. Redirecting to login...");
        setTimeout(() => navigate("/login"), 3000);
      } else {
        toast.error("Signup failed. Try again.");
      }
    }
  };

  return (
    <div className="min-h-screen mt-12 ml-64 flex items-center justify-center p-4">
      <ToastContainer />
      <div className="bg-white rounded-2xl p-10 shadow-lg max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold mb-6">Create an Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />

        <button
          onClick={handleEmailSignup}
          className="bg-blue-600 text-white w-full py-2 rounded mb-4"
        >
          Sign Up with Email
        </button>

        <div className="my-4 text-gray-400">— OR —</div>

        <button
          onClick={handleGoogleSignup}
          className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded shadow-md mb-4"
        >
          Sign Up with Google
        </button>

        <div className="mt-4 text-sm">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
