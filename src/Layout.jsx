import { useState } from 'react'
import { Link, Route, Routes } from 'react-router'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import Chatroom from './pages/chatroom'
import Calendarpage from './pages/Calendarpage'
import Reportpage from './pages/Reportpage'
import Settingspage from './pages/SettingsPage'
import Helppage from './pages/Helppage'

const ROUTES = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/chat", element: <Chatroom /> },
  { path: "/calendar", element: <Calendarpage /> },
  { path: "/report", element: <Reportpage /> },
  { path: "/settings", element: <Settingspage /> },
  { path: "/help", element: <Helppage /> }
]

export default function Layout() {


  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <nav className="p-5 space-x-3 flex bg-base-300">
        <Link to="/">
          <button className="btn btn-ghost">Home</button>
        </Link>
        <Link to="/about">
          <button className="btn btn-ghost">About</button>
        </Link>
        <Link to="/chat">
          <button className="btn btn-ghost">Chat</button>
        </Link>
        <Link to="/calendar">
          <button className="btn btn-ghost">Calendar</button>
        </Link>
        <Link to="/report">
          <button className="btn btn-ghost">Report</button>
        </Link>
        <Link to="/settings">
          <button className="btn btn-ghost">Settings</button>
        </Link>
        <Link to="/help">
          <button className="btn btn-ghost">Help</button>
        </Link>
      </nav>
      {/* Main */}
      <Routes>
        {ROUTES.map((r) => <Route key={r.path} path={r.path} element={r.element} />)}
      </Routes>
      {/* Footer */}
      <div className="p-5 bg-base-300">Footer</div>
    </div>
  )
}
