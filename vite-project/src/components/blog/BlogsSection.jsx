import React from "react";

// Local blog images
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import blog4 from "../../assets/images/blog4.webp";
import blog5 from "../../assets/images/blog5.png";
import blog6 from "../../assets/images/blog6.jpg";

export default function BlogsSection() {
  const blogs = [
    {
      img: blog1,
      title: "Aspergillosis: Types, Causes, Symptoms, Diagnosis & Treatment",
      content:
        "Aspergillosis is a fungal infection caused by Aspergillus. It affects the lungs and can lead to breathing issues, allergies, and other complications.",
      date: "November 24, 2025",
    },
    {
      img: blog2,
      title: "Stomach Cancer: Causes, Symptoms, Prevention & Effective Treatments",
      content:
        "Stomach cancer develops in the lining of the stomach and often shows symptoms in advanced stages. Early diagnosis is key for effective treatment.",
      date: "November 19, 2025",
    },
    {
      img: blog3,
      title: "Bladder Cyst: Causes, Symptoms, Diagnosis & Treatment",
      content:
        "A bladder cyst is a fluid-filled sac that forms inside the bladder. Most cysts are noncancerous but require proper diagnosis and care.",
      date: "October 22, 2025",
    },
    {
      img: blog4,
      title: "Heart Attack: Early Signs, Causes & Emergency Care",
      content:
        "A heart attack occurs when blood flow to the heart is blocked. Recognizing symptoms early can save lives and prevent heart damage.",
      date: "October 10, 2025",
    },
    {
      img: blog5,
      title: "Diabetes: Types, Warning Signs & Long-Term Complications",
      content:
        "Diabetes affects how your body uses blood sugar. Early detection and lifestyle changes are essential for long-term health.",
      date: "September 14, 2025",
    },
    {
      img: blog6,
      title: "Kidney Stones: Causes, Symptoms & Best Treatment Options",
      content:
        "Kidney stones are hard deposits that form inside the kidneys and cause severe pain. Proper hydration helps prevent stone formation.",
      date: "August 30, 2025",
    },
  ];

  return (
    <section id="blogs-section" className="w-full py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Latest Health Blogs
        </h2>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
            >
              
              {/* Image */}
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-md"
              />

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {blog.title}
              </h3>

              {/* Content */}
              <p className="text-gray-600 text-sm mt-2">
                {blog.content}
              </p>

              {/* Read More */}
              <p className="mt-3 text-red-600 font-medium cursor-pointer hover:underline">
                Read More »
              </p>

              {/* Date */}
              <p className="text-gray-500 text-sm mt-3 border-t pt-2">
                {blog.date}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
