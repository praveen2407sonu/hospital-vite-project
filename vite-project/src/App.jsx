
import './App.css';
import Banner from './components/banner/Banner';
 import Doctors from './components/doctors/Doctors';
 import Facilities from './components/facilities/Facilities';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Partners from './components/partners/Partners';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import HospitalSlider from './components/slider/HospitalSlider';
// import AboutUs from './components/about/AboutUs';
import Contact from './components/contact/Contact';
import ChatbotButton from './components/chaetboot/ChatbotButton';
import Departments from './components/department/Departments';
import GallerySection from './components/gallery/GallerySection';
import BlogsSection from './components/blog/BlogsSection';
import EmergencySection from './components/emergency/EmergencySection';
import FAQSection from './Faq/FaqSection';
// import TopBar from './components/topbar/TopBar';
function App() {
  

  return (
    <> 
      {/* <TopBar/> */}
     <Navbar  />
      <HospitalSlider/>
      {/* <AboutUs/> */}
      <Banner />
      <Services />
    
      <Doctors />
       <Partners />
      <Facilities />
      < Departments/>
      <GallerySection/>
      <BlogsSection/>
      <EmergencySection/>
      <Testimonials /> 
      <Contact/>
      <FAQSection/>
      <ChatbotButton/>
       <Footer />
    </> 
    
  );
}

export default App;







 










