import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc
} from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const { currentUser, logout } = useAuth();

  const fetchUsers = async () => {
    const usersCollection = collection(db, "DebateGoUsers");
    const snapshot = await getDocs(usersCollection);
    const usersList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(usersList);
  };

  const handleScoreChange = async (userId, newScore) => {
    const userRef = doc(db, "DebateGoUsers", userId);
    await updateDoc(userRef, { score: parseInt(newScore) });
    fetchUsers(); // Refresh
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6 mt-24 ml-64">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <h2 className="text-xl mb-4">Manage User Scores</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Score</th>
            <th className="p-2">Update</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.displayName}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.score || 0}</td>
              <td className="p-2">
                <input
                  type="number"
                  defaultValue={user.score || 0}
                  className="border p-1 rounded w-20"
                  onBlur={(e) => handleScoreChange(user.id, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
