import Navbar from './components/NavBar.jsx'
import { Outlet } from '@tanstack/react-router'
const RootLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default RootLayout