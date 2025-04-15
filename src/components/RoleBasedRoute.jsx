// components/RoleBasedRoute.jsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";

const RoleBasedRoute = ({ children, allowedRoles }) => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "DebateGoUsers", currentUser.uid));
        if (userDoc.exists()) {
          setUserRole(userDoc.data().role);
        }
      }
      setLoading(false);
    };
    fetchUserRole();
  }, [currentUser]);

  if (loading) return <div className="p-5 text-lg">Checking permissions...</div>;

  if (!currentUser) return <Navigate to="/login" />;

  if (!allowedRoles.includes(userRole)) return <Navigate to="/dashboard" />;

  return children;
};

export default RoleBasedRoute;
