import Header from "./Header";

const Icon = ({ children, bg }) => (
  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl ${bg}`}>
    {children}
  </div>
)

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-white shadow-md flex flex-col flex-shrink-0">
      <div className="bg-gradient-to-br from-violet-600 to-purple-700 p-6 text-white">
        <div className="flex items-center gap-4">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
            alt="Priya"
            className="w-16 h-16 rounded-full border-2 border-white bg-white"
          />
          <div>
            <p className="font-bold text-lg leading-tight">Priya Reddy</p>
            <p className="text-purple-200 text-sm">Bachelor of Commerce</p>
            <span className="mt-1 inline-block bg-white/20 text-white text-xs px-2 py-0.5 rounded-full font-mono">
              STU2024002
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 space-y-6 overflow-y-auto flex-1">
        <section>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Personal Information
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-0.5">🪪</span>
              <div>
                <p className="font-medium text-gray-800">STU2024002</p>
                <p className="text-xs text-gray-400">Roll Number</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-0.5">✉️</span>
              <div>
                <p className="font-medium text-gray-800 break-all">priya.reddy@student.college.edu</p>
                <p className="text-xs text-gray-400">Email Address</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-0.5">📞</span>
              <div>
                <p className="font-medium text-gray-800">+91 9876543210</p>
                <p className="text-xs text-gray-400">Phone Number</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-0.5">📍</span>
              <div>
                <p className="font-medium text-gray-800">Student Hostel, College Campus</p>
                <p className="text-xs text-gray-400">Address</p>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Academic Details
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-0.5">🎓</span>
              <div>
                <p className="font-medium text-gray-800">1st Year</p>
                <p className="text-xs text-gray-400">Current Semester</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-0.5">⭐</span>
              <div>
                <p className="font-medium text-gray-800">8.45</p>
                <p className="text-xs text-gray-400">CGPA</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-0.5">📅</span>
              <div>
                <p className="font-medium text-gray-800">2022 – 2026</p>
                <p className="text-xs text-gray-400">Academic Years</p>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Family Details
          </h3>
          <table className="text-sm w-full">
            <tbody className="space-y-2">
              {[
                ["Father's Name:", "Father Name"],
                ["Mother's Name:", "Mother Name"],
                ["Blood Group:", "B+"],
                ["Category:", "General"],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className="text-gray-500 py-1 pr-2 whitespace-nowrap">{label}</td>
                  <td className="font-semibold text-gray-800">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </aside>
  )
}

// ── Dashboard card — icon + name centered ────────────────────────────────────
function DashCard({ icon, bg, label, sub, badge, badgeColor = 'text-green-600 bg-green-50' }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer relative flex flex-col items-center justify-center gap-3 text-center min-h-[140px]">
      {badge && (
        <span className={`absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full ${badgeColor}`}>
          {badge}
        </span>
      )}
      <Icon bg={bg}>{icon}</Icon>
      <div>
        <p className="font-semibold text-gray-800">{label}</p>
        <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
      </div>
    </div>
  )
}

function StatChip({ icon, value, label, tag, tagColor }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center gap-2 text-center">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${tagColor.replace('text-', 'bg-').replace('600','100')}`}>
        {icon}
      </div>
      <p className={`text-2xl font-bold ${tagColor}`}>{value}</p>
      <p className="text-xs text-gray-400">{label}</p>
      <span className={`text-xs font-semibold px-3 py-0.5 rounded-full ${tagColor} bg-opacity-10 border border-current border-opacity-20`}>
        {tag}
      </span>
    </div>
  )
}

function MainContent() {
  const today = new Date()
  const day = today.getDate()
  const month = today.toLocaleString('default', { month: 'short', year: 'numeric' })

  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 p-6 space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start justify-between">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800">Welcome back, Priya! 👋</h1>
          <p className="text-gray-400 text-sm mt-1">Here's your academic overview for today.</p>
          <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-xl px-4 py-3 text-sm text-blue-700 italic flex items-start gap-2">
            <span className="text-xl">❝</span>
            <span>The only way to do great work is to love what you do. — Steve Jobs</span>
          </div>
        </div>
        <div className="ml-6 text-right flex-shrink-0">
          <p className="text-5xl font-black text-blue-600">{day}</p>
          <p className="text-sm text-gray-400">{month}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <DashCard
          icon="👤" bg="bg-blue-500"
          label="Student Details"
          sub="Personal & academic information"
          badge="Profile"
          badgeColor="text-blue-600 bg-blue-50"
        />
        <DashCard
          icon="📋" bg="bg-green-500"
          label="Exams"
          sub="Schedules, results & upcoming"
          badge="2 upcoming"
          badgeColor="text-green-600 bg-green-50"
        />
        <DashCard
          icon="🕐" bg="bg-purple-500"
          label="Attendance"
          sub="Track your class attendance"
          badge="88.5%"
          badgeColor="text-purple-600 bg-purple-50"
        />
        <DashCard
          icon="⏰" bg="bg-teal-500"
          label="Timetable"
          sub="View your class schedule"
          badge="Today"
          badgeColor="text-teal-600 bg-teal-50"
        />
        <DashCard
          icon="📚" bg="bg-orange-500"
          label="Syllabus"
          sub="Current semester syllabus"
          badge="26 Credits"
          badgeColor="text-orange-600 bg-orange-50"
        />
        <DashCard
          icon="💳" bg="bg-red-500"
          label="Fee Management"
          sub="Payment & due status"
          badge="₹25,000 Due"
          badgeColor="text-red-600 bg-red-50"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <DashCard
          icon="👥" bg="bg-indigo-500"
          label="Committees"
          sub="Join college committees"
          badge="27 Available"
          badgeColor="text-indigo-600 bg-indigo-50"
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <StatChip icon="⭐" value="8.45" label="Current CGPA" tag="Excellent" tagColor="text-green-600" />
        <StatChip icon="📈" value="88.5%" label="Attendance" tag="Good" tagColor="text-green-500" />
        <StatChip icon="⚠️" value="2" label="Upcoming Exams" tag="This Month" tagColor="text-orange-500" />
        <StatChip icon="💰" value="₹25,000" label="Fee Pending" tag="Due Soon" tagColor="text-red-500" />
      </div>
    </main>
  )
}

export default function Dashboard() {
  return (
    <div className="flex h-screen w-full font-sans bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <MainContent />
      </div>
    </div>
  )
}