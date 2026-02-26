import { useState } from "react";
import { Link } from "react-router-dom";

const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const FacultyIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const TimetableIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const BellIcon = ({ badge }) => (
  <div className="relative">
    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
    {badge && (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
        {badge}
      </span>
    )}
  </div>
);

const NotifIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const MessageIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

const ClassesIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const ReportsIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const AIIcon = () => (
  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LogoutIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

const BackIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const DOBIcon = () => (
  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const OfficeIcon = () => (
  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const GradIcon = () => (
  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const QuoteIcon = () => (
  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const BotIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function HODDashboard() {
  const [activeTab, setActiveTab] = useState("Home");
  const [showAI, setShowAI] = useState(false);
  const [aiInput, setAiInput] = useState("");

  const tabs = [
    { name: "Home", icon: <HomeIcon />,path:"/" },
    { name: "Faculty", icon: <FacultyIcon />,path:"/Faculty" },
    { name: "Timetable", icon: <TimetableIcon />,path:"/timetable" },
    { name: "Notifications", icon: <NotifIcon />,path:"/notifications" },
    { name: "Messages", icon: <MessageIcon />,path:"/messages" },
    { name: "Classes", icon: <ClassesIcon />,path:"/classes" },
    { name: "Reports", icon: <ReportsIcon />,path:"/reports" },
  ];

  const schedule = [
    { time: "9:00 AM", title: "Data Structures Lecture", subtitle: "BCA-101", badge: "45 students" },
    { time: "11:00 AM", title: "Faculty Meeting", subtitle: "Conference Hall" },
    { time: "2:00 PM", title: "Student Counseling", subtitle: "Office" },
    { time: "4:00 PM", title: "Research Review", subtitle: "Lab-2" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">

      {/* LEFT SIDEBAR */}
      <div className="w-56 bg-white flex flex-col border-r border-gray-200 overflow-y-auto flex-shrink-0">
        <div className="px-4 py-3 flex items-center gap-1 text-sm text-gray-700 cursor-pointer hover:text-gray-900">
          <BackIcon />
          <span className="font-medium">Back</span>
        </div>

        <div className="flex flex-col items-center px-4 pt-2 pb-4">
          <div className="relative mb-2">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 bg-gray-300 flex items-center justify-center">
              <svg className="w-14 h-14 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
          <p className="text-sm font-semibold text-gray-800 text-center">Dr. Rajesh Kumar</p>
          <p className="text-xs text-gray-500 text-center mt-0.5">Head of Department - BCA</p>
          <span className="mt-2 px-4 py-0.5 bg-gray-100 text-gray-600 text-xs rounded border border-gray-300">Active</span>
        </div>

        <hr className="border-gray-200 mx-3" />

        <div className="px-4 pt-3 pb-1">
          <p className="text-xs font-semibold text-gray-700 mb-2">Personal Information</p>
          <div className="space-y-2 text-xs text-gray-600">
            <div className="flex items-center gap-1.5"><DOBIcon /><span>DOB: 15th March, 1975</span></div>
            <div className="flex items-start gap-1.5">
              <span className="mt-0.5"><EmailIcon /></span>
              <span>Email: <span className="text-blue-500">rajesh.kumar@college.edu</span></span>
            </div>
            <div className="flex items-center gap-1.5"><PhoneIcon /><span>Phone: +91 98765 43210</span></div>
            <div className="flex items-center gap-1.5"><OfficeIcon /><span>Office: BCA Block, Room 301</span></div>
          </div>
        </div>

        <hr className="border-gray-200 mx-3 mt-3" />

        <div className="px-4 pt-3 pb-1">
          <div className="flex items-center gap-1.5 mb-2">
            <GradIcon />
            <p className="text-xs font-semibold text-gray-700">Education</p>
          </div>
          <div className="space-y-1 text-xs text-gray-600">
            {["Ph.D. in Computer Science - IIT Delhi (2005)", "M.Tech in Software Engineering - IIT Bombay (2001)", "B.Tech in Computer Science - Delhi University (1998)"].map((edu) => (
              <div key={edu} className="flex items-start gap-1">
                <span className="mt-1 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0"></span>
                <span>{edu}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 mx-3 mt-3" />

        <div className="px-4 pt-3 pb-1">
          <div className="flex items-center gap-1.5 mb-2">
            <BriefcaseIcon />
            <p className="text-xs font-semibold text-gray-700">Experience & Specialization</p>
          </div>
          <div className="text-xs text-gray-600 space-y-0.5">
            <p>Experience: 20+ Years</p>
            <p>Specialization: Software Engineering, AI & ML</p>
          </div>
        </div>

        <hr className="border-gray-200 mx-3 mt-3" />

        <div className="px-4 pt-3 pb-4">
          <div className="flex items-center gap-1.5 mb-2">
            <ClockIcon />
            <p className="text-xs font-semibold text-gray-700">Working Hours</p>
          </div>
          {[
            { day: "Monday", hours: "7:30 AM - 2:30 PM" },
            { day: "Tuesday", hours: "7:30 AM - 2:30 PM" },
            { day: "Wednesday", hours: "7:30 AM - 2:30 PM" },
            { day: "Thursday", hours: "7:30 AM - 2:30 PM" },
          ].map((w) => (
            <div key={w.day} className="flex justify-between text-xs mb-1.5">
              <span className="text-gray-600">{w.day}</span>
              <span className="text-green-600 font-medium">{w.hours}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* TOP HEADER */}
        <div className="bg-white border-b border-gray-200 px-6 py-2.5 flex items-center justify-between flex-shrink-0">
          <div>
            <h1 className="text-base font-semibold text-gray-800">HOD Dashboard</h1>
            <p className="text-xs text-gray-500">BCA Department Management</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded text-xs text-gray-700 hover:bg-gray-50">
              <SettingsIcon /><span>Settings</span>
            </button>
            <BellIcon badge={3} />
            {/* AI Assistant Button */}
            <button
              onClick={() => setShowAI(true)}
              className="flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 border border-blue-600 rounded px-3 py-1.5 hover:bg-blue-50 transition"
            >
              <AIIcon /><span>AI Assistant</span>
            </button>
            <button className="flex items-center gap-1.5 text-xs text-red-500 hover:text-red-600 border border-red-500 rounded px-3 py-1.5 hover:bg-red-50 transition">
              <LogoutIcon /><span>Logout</span>
            </button>
          </div>
        </div>

        {/* NAV TABS */}
        <nav className="bg-gray-200 rounded-full flex items-center px-3 py-3 mt-5 mx-5 flex-shrink-0">
  {tabs.map((tab) => (
    <Link
      key={tab.name}
      to={tab.path}
      onClick={() => setActiveTab(tab.name)}
      className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-colors flex-1 justify-center ${
        activeTab === tab.name
          ? "bg-white text-gray-900 shadow-sm"
          : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {tab.icon}
      {tab.name}
    </Link>
  ))}
</nav>

        {/* PAGE CONTENT */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-5 relative">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-0.5">Welcome back, Dr. Kumar!</h2>
              <p className="text-sm text-gray-500">Leading the BCA department with excellence and innovation.</p>
              <div className="mt-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg p-4 max-w-lg">
                <div className="flex items-center gap-2 mb-1">
                  <QuoteIcon />
                  <span className="text-sm font-semibold text-gray-700">Quote of the Day</span>
                </div>
                <p className="text-sm text-gray-600 italic">Innovation in education starts with a department that embraces change.</p>
              </div>
            </div>
            <div className="absolute top-6 right-6 text-right">
              <p className="text-5xl font-bold text-green-600">26</p>
              <p className="text-sm text-gray-500">Friday</p>
              <p className="text-sm text-gray-500">September 2025</p>
            </div>
          </div>

          <div className="flex grid-cols-2 gap-5">
            <div className="bg-white rounded-lg border border-gray-200 p-6 w-4/12">
              <h3 className="text-base font-semibold text-gray-800 mb-5">Department Stats</h3>
              <div className="space-y-4">
                {[
                  { label: "Total Students:", value: "180", color: "text-gray-800" },
                  { label: "Faculty Members:", value: "4", color: "text-gray-800" },
                  { label: "Active Courses:", value: "8", color: "text-gray-800" },
                  { label: "Pending Leave Requests:", value: "3", color: "text-red-500" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{stat.label}</span>
                    <span className={`text-sm font-semibold ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 w-8/12">
              <h3 className="text-base font-semibold text-gray-800 mb-5">Today's Schedule</h3>
              <div className="space-y-4">
                {schedule.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <span className="text-sm text-blue-500 font-medium w-20 flex-shrink-0">{item.time}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.subtitle}</p>
                    </div>
                    {item.badge && (
                      <span className="text-xs text-gray-500 border border-gray-300 rounded px-2 py-0.5 flex-shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= AI MODAL ================= */}
      {showAI && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-xl h-[80vh] rounded-xl shadow-xl flex flex-col">

            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-full text-white">
                  <BotIcon />
                </div>
                <div>
                  <h2 className="text-sm font-semibold">AI Assistant</h2>
                  <p className="text-xs text-gray-500">Your intelligent college management helper</p>
                </div>
              </div>
              <button onClick={() => setShowAI(false)} className="text-gray-500 hover:text-black transition">
                <XIcon />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-700 max-w-sm">
                Hello Dr. Kumar! I'm your AI assistant. How can I help you manage college affairs today?
              </div>
            </div>

            {/* Input */}
            <div className="border-t p-4 flex items-center gap-2">
              <input
                type="text"
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder="Ask me anything about college management..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-gray-700 text-white p-2 rounded-lg hover:bg-black transition">
                <SendIcon />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}