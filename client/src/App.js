import { BrowserRouter, Routes, Route } from "react-router-dom";
import { checkAuth } from 'react-router-dom'
import Home from './components/home/Home'
import Header from "./components/utils/Header";
import Footer from "./components/utils/Footer";
import BlogPage from "./components/blogs/Blogs.jsx"
import AboutUs from "./components/about/AboutUs";
import Tour from "./components/tour/Tour";
import TalesOfFire from './components/tours/TalesOfFire'
import Dazzling from './components/tours/Dazzling'
import HeliCopterTour from './components/tours/HelicopterTour'
import GameOfThrones from './components/tours/GameOfThrones'
import Geothermal from './components/tours/Geothermal'
import Eruption from './components/tours/EruptionEscapade'
import OurFleet from './components/our_fleet/OurFleet'
import Admin from './components/adminDashboard/AdminLogin'
import AdminHeader from "./components/adminDashboard/AdminHeader";
import AdminSidebar from "./components/adminDashboard/AdminSidebar";
import AdminCreateBlogs from "./components/adminDashboard/AdminCreateBlogs";
import AdminBlogs from "./components/adminDashboard/AdminBlogs";
import AdminEditBlog from "./components/adminDashboard/AdminEditBlog";
import AdminBlogPage from "./components/adminDashboard/AdminBlogPage";
import { UserContextProvider } from "./components/utils/UserContext";
import PrivateTours from "./components/privatetours/PrivateTours";
import ModrudalurKettle from "./components/tours/ModrudalurKettle";
import StuðlagilCanyon from "./components/tours/StuðlagilCanyon";
import { useState, useEffect } from "react";
import AdminPanel from "./pages/AdminPanel";
import Cart from "./components/utils/Cart"

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
function AdminLayout({ children }) {
  return (
    <>
      <AdminHeader />
      {children}
      <AdminSidebar />
    </>
  )
}

function AdminLayout2({ children }) {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  )
}

function App() {
  const [auth, setAuth] = useState(false)
  var token = "";
  const checkAuth = async () => {
    token = localStorage.getItem('token')
    if (token) {
      setAuth(true);
    } else {
      setAuth(false)
    }
  }
  useEffect(() => {
    checkAuth();
  }, [auth]);

  return (
    <div className="App" style={{ fontFamily: "'Merriweather', serif" }}>

      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Layout><Home /></Layout>}
            />
              <Route
              path="/cart/:id"
              element={<Layout><Cart /></Layout>}
            />
            <Route
              path="/aboutus"
              element={<Layout><AboutUs /></Layout>}
            />
            <Route
              path="/blogs"
              element={<Layout><BlogPage /></Layout>}
            />
            <Route
              path="/Our-Fleet"
              element={<Layout><OurFleet /></Layout>}
            />
            <Route
              path="/PrivateTours"
              element={<Layout><PrivateTours /></Layout>}
            />
            <Route
              path="/Tour"
              element={<Layout><Tour /></Layout>}
            />
            <Route
              path="/TalesOfFire"
              element={<Layout><TalesOfFire /></Layout>}
            />
            <Route
              path="/Dazzling"
              element={<Layout><Dazzling /></Layout>}
            />
            <Route
              path="/Eruption-Escapade"
              element={<Layout><Eruption /></Layout>}
            />
            <Route
              path="/Bewildering-Geothermal"
              element={<Layout><Geothermal /></Layout>}
            />
            <Route
              path="/Helicopter"
              element={<Layout><HeliCopterTour /></Layout>}
            />
            <Route
              path="/Helicopter-Game-Of-Thrones"
              element={<Layout><GameOfThrones /></Layout>}
            />
            <Route
              path="/ModrudalurKettle"
              element={<Layout><ModrudalurKettle /></Layout>}
            />
            <Route
              path="/StuðlagilCanyon"
              element={<Layout><StuðlagilCanyon /></Layout>}
            />

            <Route
              path='/admin'

              element={<AdminLayout><Admin /></AdminLayout>}
            />

            <Route
              path="/panel"
              element={
                <AdminPanel />
              }
            />
            <Route
              path="/create-blog"
              element={<AdminLayout2><AdminCreateBlogs /></AdminLayout2>}
            />
            <Route
              path="/admin-blog"
              element={<AdminLayout2><AdminBlogs /></AdminLayout2>}
            />
            <Route
              path="/Admin-blogs/:id"
              element={<AdminLayout2><AdminBlogPage /></AdminLayout2>}
            />
            <Route
              path="/edit/:id"
              element={<AdminLayout2><AdminEditBlog /></AdminLayout2>}
            />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;