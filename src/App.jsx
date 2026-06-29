import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import Candidates from "./pages/Candidates";
import CandidateDetails from "./pages/CandidateDetails";
import AddCandidate from "./pages/AddCandidate";
import Jobs from "./pages/Jobs";
import Analytics from "./pages/Analytics";
import ResumeUpload from "./pages/ResumeUpload";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Dashboard */}

        <Route
          path="/"
          element={<Dashboard />}
        />

        {/* Candidates */}

        <Route
          path="/candidates"
          element={<Candidates />}
        />

        <Route
          path="/candidate/:id"
          element={<CandidateDetails />}
        />

        <Route
          path="/add-candidate"
          element={<AddCandidate />}
        />

        {/* Other Pages */}

        <Route
          path="/jobs"
          element={<Jobs />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/resume"
          element={<ResumeUpload />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;