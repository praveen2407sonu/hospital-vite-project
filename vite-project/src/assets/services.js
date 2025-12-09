import vaccine from "../assets/images/vaccine.jpg";
// import selfcare from "../assets/images/self-care.jpg";
import laboratory from "../assets/images/lab.png";
import treatment from "../assets/images/treatment.jpg";
import pethealth from "../assets/images/pet.avif";
import symptoms from "../assets/images/symptom.png";
import checkup from "../assets/images/checkup.jpg";

const services = [
  {
    image: vaccine,
    name: "Vaccination",
    body: "We provide safe and effective vaccines for all age groups.",
  },
  {
    image: treatment,
    name: "General Clinic",
    body: "Expert doctors available for routine checkups & treatment.",
  },
  // {
  //   image: selfcare,
  //   name: "Self Care Guidance",
  //   body: "Personalized health plans to maintain your well-being.",
  // },
  {
    image: laboratory,
    name: "Laboratory Tests",
    body: "Advanced pathology and diagnostic lab services.",
  },
  {
    image: treatment,
    name: "Emergency Care",
    body: "24/7 emergency medical assistance and trauma care.",
  },
  {
    image: pethealth,
    name: "Health & Wellness",
    body: "Complete health packages for a healthier lifestyle.",
  },
  {
    image: symptoms,
    name: "Symptoms Checker",
    body: "Identify signs early and get medical suggestions.",
  },
  {
    image: checkup,
    name: "Routine Checkup",
    body: "Full body health checkup with detailed reports.",
  },
];

export default services;
