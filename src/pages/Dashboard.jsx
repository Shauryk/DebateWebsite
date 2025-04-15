import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const Home = () => {
  const { currentUser, logout } = useAuth();
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchRole = async () => {
      if (currentUser?.uid) {
        const userDocRef = doc(db, "DebateGoUsers", currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setRole(userDoc.data().role);
        }
      }
    };

    fetchRole();
  }, [currentUser]);

  return (
    <div style={{ textAlign: "center", marginTop: "25rem" }}>
      <h1>Welcome {currentUser?.displayName || "Guest"}</h1>
      {role && <p>Role: {role}</p>}

      {currentUser && (
        <button
          onClick={logout}
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Home;
