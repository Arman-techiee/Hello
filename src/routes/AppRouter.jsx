import React from 'react'
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Blog from '../pages/Blog'
import Footer from '../Components/Footer'
import Home from '../pages/Home'
import UserList from '../pages/UserList'
import UserDetail from '../pages/UserDetail'
import ProtectedRoute from '../Components/ProtectedRoute'


const AppRouter = () => {
  return (
    <>
    <NavBar/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route
      path="/projects"
      element={
        <ProtectedRoute>
          <Projects />
        </ProtectedRoute>
      }
    />
    <Route path='/blog' element={<Blog/>}/>
    <Route path="/user" element={<Navigate to="/users" replace />} />
    <Route path="/users" element={<Outlet />}>
      <Route index element={<UserList />} />
      <Route path=":id" element={<UserDetail />} />
    </Route>
   </Routes>
   <Footer/>
   </>
  )
}

export default AppRouter