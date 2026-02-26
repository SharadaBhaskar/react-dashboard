import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DepartmentReports from "./components/DepartmentReports";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed Left Sidebar */}
      <Sidebar />

      {/* Main content area pushed right of sidebar */}
      <div className="flex-1 flex flex-col ml-56">
        <Navbar />
        <DepartmentReports />
      </div>
    </div>
  );
}

export default App;