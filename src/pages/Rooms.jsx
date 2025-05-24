import React, { useState } from "react";

const Rooms = () => {
  const [customRooms, setCustomRooms] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [roomLink, setRoomLink] = useState("");

  const defaultRooms = [
    { id: 1, name: "Room 1", zoomLink: "https://meet.google.com/ngs-sctn-rxg" },
    { id: 2, name: "Room 2", zoomLink: "https://meet.google.com/jsd-okvx-oim" },
    { id: 3, name: "Room 3", zoomLink: "https://meet.google.com/kyc-aezm-aiz" },
    { id: 4, name: "Room 4", zoomLink: "https://meet.google.com/itb-ofgw-qsm" },
    { id: 5, name: "Room 5", zoomLink: "https://meet.google.com/usf-gwjm-xcg" },
    { id: 6, name: "Room 6", zoomLink: "https://meet.google.com/zmc-ycjw-jrj" },
  ];

  const handleCreateRoom = (e) => {
    e.preventDefault();
    if (!roomName || !roomLink) return;

    const newRoom = {
      id: customRooms.length + 7,
      name: roomName,
      zoomLink: roomLink,
    };

    setCustomRooms([...customRooms, newRoom]);
    setRoomName("");
    setRoomLink("");
    setShowForm(false);
  };

  return (
    <div className="min-h-screen mt-24 py-12 flex justify-center">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-center mb-10">
          Join or Create a Room
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {[...defaultRooms, ...customRooms].map((room) => (
            <a
              key={room.id}
              href={room.zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 text-center"
            >
              <h2 className="text-2xl font-semibold mb-2">{room.name}</h2>
              <p className="text-sm text-gray-600">Click to join Zoom Meeting</p>
            </a>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            {showForm ? "Cancel" : "Create Your Own Room"}
          </button>
        </div>

        {showForm && (
          <form
            onSubmit={handleCreateRoom}
            className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4"
          >
            <div>
              <label className="block mb-1 font-medium">Room Name</label>
              <input
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Zoom Link</label>
              <input
                type="url"
                value={roomLink}
                onChange={(e) => setRoomLink(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
            >
              Create Room
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Rooms;
