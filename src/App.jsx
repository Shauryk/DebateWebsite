import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Header from "./components/Header"; // Import Header
import Topics from "./pages/Topics"; // Ensure this file exists
import Welcome from "./pages/Welcome"; // Import Welcome page
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header /> {/* Add the Header here */}
        <div className="flex flex-grow">
          <Sidebar /> 
          <div className="flex-1 p-5">
            <Routes>
              <Route path="/" element={<Welcome />} /> {/* Default route */}
              <Route path="/topics" element={<Topics />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
