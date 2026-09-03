import { Routes, Route, useLocation } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Events from "./pages/Events";
import LinkHub from "./pages/LinkHub";
import AdminMenu from "./pages/AdminMenu";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatAssistant from "./components/ChatAssistant";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import HomePromoPopup from "./components/Home/HomePromoPopup";

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  if (isAdminRoute) {
    return (
      <div className="min-h-screen bg-[#faf7f2]">
        <ScrollToTop />
        <Routes>
          <Route path="/admin" element={<AdminMenu />} />
          <Route path="/admin/*" element={<AdminMenu />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-cream)] flex flex-col justify-between">
      <ScrollToTop />
      <HomePromoPopup />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/events" element={<Events />} />
          <Route path="/links" element={<LinkHub />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ChatAssistant />
      <BackToTop />
    </div>
  );
}

