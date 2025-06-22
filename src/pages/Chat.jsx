import React, { useEffect, useState, useRef } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { useAuth } from "../contexts/AuthContext";
import { format } from "date-fns";

const Chat = () => {
  const { currentUser } = useAuth();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showOnlyAdmins, setShowOnlyAdmins] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    let role = "user";
    if (currentUser?.uid) {
      const userDoc = await getDoc(doc(db, "DebateGoUsers", currentUser.uid));
      if (userDoc.exists()) {
        role = userDoc.data().role || "user";
      }
    }

    await addDoc(collection(db, "messages"), {
      text: input,
      email: currentUser?.email,
      displayName: role === "admin" ? "Admin" : currentUser?.displayName || "Anonymous",
      role,
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  const getInitials = (name) => {
    return name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="w-full min-h-screen pt-30 px-4 bg-gray-50 flex justify-center">
      <div className="w-full max-w-5xl flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Community Chat
        </h1>

        {/* Toggle */}
        {/* <div className="flex justify-end pr-1">
          <label className="flex items-center gap-2 text-sm md:text-base">
            <input
              type="checkbox"
              checked={showOnlyAdmins}
              onChange={() => setShowOnlyAdmins(!showOnlyAdmins)}
              className="accent-red-600"
            />
            Show only Admin messages
          </label>
        </div> */}

        {/* Chat box */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4 sm:p-6 h-[65vh] overflow-y-auto">
          {messages.length === 0 ? (
            <p className="text-gray-500 text-center mt-12">No messages yet.</p>
          ) : (
            messages
              .filter((msg) => !showOnlyAdmins || msg.role === "admin")
              .map((msg) => {
                const isCurrentUser = msg.email === currentUser?.email;
                const isAdmin = msg.role === "admin";

                const displayName =
                  isCurrentUser
                    ? "You"
                    : isAdmin
                    ? "Admin"
                    : msg.displayName || "Anonymous";

                return (
                  <div
                    key={msg.id}
                    className={`flex items-start mb-4 ${
                      isCurrentUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    {!isCurrentUser && (
                      <div
                        className={`w-10 h-10 ${
                          isAdmin ? "bg-red-500" : "bg-blue-400"
                        } text-white flex items-center justify-center rounded-full mr-3 font-semibold text-sm`}
                      >
                        {getInitials(displayName)}
                      </div>
                    )}

                    <div
                      className={`rounded-2xl px-4 py-3 max-w-sm md:max-w-lg break-words ${
                        isCurrentUser
                          ? "bg-blue-600 text-white ml-auto"
                          : isAdmin
                          ? "bg-red-100 border border-red-400 text-red-800"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <div className="text-sm font-semibold mb-1">
                        {displayName}
                      </div>
                      <div className="text-base">{msg.text}</div>
                      {msg.timestamp?.toDate && (
                        <div className="text-xs mt-1 text-right text-gray-400">
                          {format(msg.timestamp.toDate(), "p")}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Box */}
        <form
          onSubmit={handleSend}
          className="flex flex-col sm:flex-row gap-3 sticky bottom-4"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message 😊"
            className="flex-grow p-3 border border-gray-300 rounded-xl focus:outline-none text-base"
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl text-base"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
