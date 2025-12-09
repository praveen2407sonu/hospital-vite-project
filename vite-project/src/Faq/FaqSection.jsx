import React, { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What are the visiting hours of the hospital?",
      answer:
        "The hospital visiting hours are from **8:00 AM to 8:00 PM** daily. Certain critical care units may have restricted hours.",
    },
    {
      question: "How can I book an appointment with a doctor?",
      answer:
        "You can book an appointment through our **online portal**, by calling our reception, or by visiting the hospital directly.",
    },
    {
      question: "Does the hospital provide ambulance services?",
      answer:
        "Yes, our hospital provides **24-hour ambulance services** for emergencies. You can call **0141-2551500** to request an ambulance.",
    },
    {
      question: "Which departments are available in the hospital?",
      answer:
        "Our hospital has multiple departments including **Cardiology, Neurology, Orthopedics, Pediatrics, Surgery, Radiology, and Emergency services**.",
    },
    {
      question: "Are there any facilities for online consultations?",
      answer:
        "Yes, the hospital offers **telemedicine services** for patients who prefer online consultations with our doctors.",
    },
    // ✅ New Questions
    {
      question: "Is health insurance accepted?",
      answer:
        "Yes, we accept most major **health insurance plans**. Please contact our billing department for detailed information.",
    },
    {
      question: "Are there special facilities for senior citizens?",
      answer:
        "The hospital provides **priority care and dedicated facilities** for senior citizens to ensure comfort and safety.",
    },
    {
      question: "What safety measures are in place for patients?",
      answer:
        "We follow strict **sanitization, hygiene, and infection control protocols** to ensure the safety of all patients and staff.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <button
                className="w-full text-left px-4 py-4 bg-white flex justify-between items-center focus:outline-none hover:bg-gray-100 transition"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <span className="text-gray-500 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-4 bg-gray-50 text-gray-700 text-sm">
                  {/* Render **bold** words with <span> and color */}
                  {faq.answer.split("**").map((part, i) =>
                    i % 2 === 1 ? (
                      <span key={i} className="font-semibold text-blue-600">
                        {part}
                      </span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
