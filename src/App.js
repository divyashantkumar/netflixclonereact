import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import BrowseBeforeLogin from "./components/BrowseBeforeLogin";
import VideoDetails from "./components/VideoDetails";
import LoginPage from "./components/LoginPage";
import BrowseAfterLogin from "./components/BrowseAfterLogin";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/browse/genre" element={<BrowseBeforeLogin />} />
      <Route path="/browse" element={<BrowseAfterLogin />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/title/:id" element={<VideoDetails />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
