import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import AdminDashboard from './pages/AdminDashboard'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatAssistant from './components/ChatAssistant'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] flex flex-col justify-between">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ChatAssistant />
      <BackToTop />
    </div>
  )
}
