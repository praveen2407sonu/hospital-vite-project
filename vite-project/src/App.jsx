import './App.css';
import { Routes, Route } from "react-router-dom";

import Banner from './components/banner/Banner';
import Doctors from './components/doctors/Doctors';
import Facilities from './components/facilities/Facilities';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Partners from './components/partners/Partners';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import HospitalSlider from './components/slider/HospitalSlider';
import Contact from './components/contact/Contact';
import ChatbotButton from './components/chaetboot/ChatbotButton';
import Departments from './components/department/Departments';
import GallerySection from './components/gallery/GallerySection';
import BlogsSection from './components/blog/BlogsSection';
import EmergencySection from './components/emergency/EmergencySection';
import FAQSection from './Faq/FaqSection';

import AboutHospital from "./pages/AboutHospital";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";
import OurServicesPage from "./pages/OurServicesPage";
import NewsMediaPage from "./pages/NewsMediaPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <HospitalSlider />
              <Banner />
              <Services />
              <Doctors />
              <Facilities />
              <Departments />
              <GallerySection />
              <BlogsSection />
              <EmergencySection />
              <Testimonials /> 
              <Contact />
              <FAQSection />
              <Partners />
            </>
          }
        />

        {/* ABOUT HOSPITAL PAGE */}
        <Route path="/about-hospital" element={<AboutHospital />} />

        {/* BLOG PAGE */}
        <Route path="/blogs" element={<BlogsPage />} />

        {/* NEW CONTACT PAGE */}
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/our-services" element={<OurServicesPage />} />

          <Route path="/news-media" element={<NewsMediaPage />} />

      </Routes>

      <ChatbotButton />
      <Footer />
    </>
  );
}

export default App;
