import { useState } from "react";
import PopComponent from "./PopComponent";

function FacebookSupport() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (  
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-purple-800 text-white fixed w-full z-50 shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">Facebook Support</div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-6">
            <a href="#overview" className="hover:text-purple-300">
              Overview
            </a>
            <a href="#solutions" className="hover:text-purple-300">
              Solutions
            </a>
            <a href="#testimonials" className="hover:text-purple-300">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-purple-300">
              Contact
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-purple-700 text-white flex flex-col space-y-4 py-4 px-6">
            <a href="#overview" onClick={() => setIsMenuOpen(false)}>
              Overview
            </a>
            <a href="#solutions" onClick={() => setIsMenuOpen(false)}>
              Solutions
            </a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center bg-no-repeat py-16 mt-16"
        style={{
          backgroundImage: "url('/facebookBackground.avif')",
        }}
      >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 relative z-10">
          {/* Hero Content */}
          <div className="lg:w-1/2 text-center lg:text-left text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Facebook Support Made Easy
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Get quick resolutions for account recovery, privacy concerns, ad
              management, and more. Your trusted partner for navigating
              Facebook.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start space-x-4">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition"
              >
                Get Help Now
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("solutions")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white text-purple-600 px-6 py-3 rounded-full shadow-md hover:bg-purple-100 transition"
              >
                Learn More
              </button>
            </div>
          </div>
          {/* Hero Image */}
          {/* <div className="lg:w-1/2">
            <img
              src="/360_F_394949282_FOyFFN53l0juz58dXuKjzl1CQ3Ruuq90-removebg-preview.png"
              alt="Facebook Support Illustration"
              className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
            />
          </div> */}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </header>
 

<PopComponent/>
      {/* Overview Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800">
            Why Choose Our Facebook Support?
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Comprehensive solutions for your Facebook needs, designed for
            individuals and businesses.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Account Recovery", desc: "Restore hacked or locked accounts easily." },
              { title: "Ad Management", desc: "Optimize and resolve ad performance issues." },
              { title: "Privacy Concerns", desc: "Ensure your personal information stays secure." },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-purple-800">{title}</h3>
                <p className="mt-2 text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-16" id="solutions">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800">
            Services We Provide
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: "Account Recovery", desc: "Get access to your account quickly." },
              { title: "Ad Management", desc: "Improve your Facebook Ads performance." },
              { title: "Page Optimization", desc: "Optimize your business pages for success." },
              { title: "Privacy & Security", desc: "Keep your account and data safe." },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-purple-800">{title}</h3>
                <p className="mt-2 text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800">
            Hear From Our Customers
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { text: "Amazing support! They helped me recover my account in minutes.", name: "Sarah Johnson" },
              { text: "The team provided excellent assistance with my ad campaigns.", name: "Mike Roberts" },
            ].map(({ text, name }) => (
              <div
                key={name}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <p className="italic text-gray-700">"{text}"</p>
                <h4 className="mt-4 font-semibold text-purple-800">- {name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-purple-100 to-purple-200 py-16" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 text-center">
            Get in Touch
          </h2>
          <div className="mt-8 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option>Query Type</option>
                <option>Account Recovery</option>
                <option>Ad Management</option>
                <option>Page Optimization</option>
                <option>Privacy Concerns</option>
              </select>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-purple-900 text-white text-center py-4">
        <p>© 2024 Facebook Support. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-purple-300 hover:underline mx-2">FAQ</a>
          <a href="#" className="text-purple-300 hover:underline mx-2">Privacy Policy</a>
          <a href="#" className="text-purple-300 hover:underline mx-2">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

export default FacebookSupport;
