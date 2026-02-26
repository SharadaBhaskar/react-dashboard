import HODDashboard from "./components/HODDashboard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HODdashboard from "./components/HODDashboard";
import Faculty from "./components/faculty";
import Timetable from "./components/timetable";
import Notifications from "./components/notifications";
import Messages from "./components/messages";
import Classes from "./components/classes";
import Reports from "./components/reports";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HODdashboard />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;