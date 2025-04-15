import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchScores = async () => {
      const snapshot = await getDocs(collection(db, "DebateGoUsers"));
      const list = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .sort((a, b) => (b.score || 0) - (a.score || 0));
      setUsers(list);
    };

    fetchScores();
  }, []);

  const currentUserData = users.find((u) => u.email === currentUser?.email);

  return (
    <div className="p-6 mt-24 ml-64">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Leaderboard */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Top Users</h2>
          <ol className="list-decimal pl-5 space-y-2">
            {users.map((user, index) => (
              <li key={user.id}>
                {user.displayName} — <span className="font-bold">{user.score || 0} pts</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Current User Info */}
        {currentUserData && (
          <div className="bg-gray-100 shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">You</h2>
            <p><strong>Name:</strong> {currentUserData.displayName}</p>
            <p><strong>Email:</strong> {currentUserData.email}</p>
            <p><strong>Score:</strong> {currentUserData.score || 0} pts</p>
            <p><strong>Rank:</strong> #{users.findIndex(u => u.email === currentUserData.email) + 1}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
