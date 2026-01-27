import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Profile from './Profile'
import Settings from './Settings'

const Dashboard = () => {
  return (
    <div>Dashboard
      <Link to={"profile"}>Profile</Link>
      <Link to={"settings"}>Settings</Link>
      <Outlet />
    </div>
  )
}

export default Dashboard