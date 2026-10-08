import { useState } from "react";
import Header from "./components/header";
import StudentProfile from "./components/StudentProfile";
import Footer from "./components/Footer";

function App() {
  const [practiceCount, setPracticeCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div>
      <Header />

      {showProfile && (
        <StudentProfile
          name="Anu"
          department="CSE"
          year="3rd Year"
          practiceCount={practiceCount}
        />
      )}

      <button onClick={() => setPracticeCount(practiceCount + 1)}>
        Complete Practice
      </button>

      <button onClick={() => setPracticeCount(0)}>
        Reset
      </button>

      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      <Footer />
    </div>
  );
}

export default App;