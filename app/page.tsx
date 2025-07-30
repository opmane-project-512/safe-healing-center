"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import bannerImage from "./assets/img/new_banner.png";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/50 via-emerald-700/90 to-teal-900/50 z-25"></div>
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-110 animate-slow-zoom"
            style={{ backgroundImage: `url(${bannerImage.src})` }}
          ></div>

          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div
              className={`text-center text-white transform transition-all duration-1500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="mb-8">
                <div className="inline-flex items-center mb-6">
                  <div className="w-3 h-3 mr-3"></div>
                </div>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent animate-gradient">
                  Transform
                </span>
                <br />
                <span className="text-white">Your Wellness</span>
              </h1>

              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-100 font-light leading-relaxed animate-fade-in-up delay-300">
                Experience the future of holistic healing with our innovative
                blend of ancient wisdom and modern wellness technology
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-500">
                <Link
                  href="/services"
                  className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 hover:-translate-y-1 cursor-pointer whitespace-nowrap overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <span className="relative z-10">Explore Services</span>
                  <i className="ri-arrow-right-line ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                </Link>
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-emerald-800 hover:shadow-2xl hover:shadow-white/25 hover:-translate-y-1 cursor-pointer whitespace-nowrap"
                >
                  Book Consultation
                  <i className="ri-calendar-line ml-2 transform group-hover:scale-110 transition-transform duration-300"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Floating particles animation */}
          <div className="absolute inset-0 z-15">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                }}
              ></div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/30 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full mb-6 animate-bounce-subtle">
                <i className="ri-heart-pulse-line text-emerald-600 mr-2"></i>
                <span className="text-emerald-700 font-medium">
                  Our Modalities
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
                Healing Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Cutting-edge wellness solutions that merge traditional healing
                with modern innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "ri-pulse-line",
                  title: "Acupuncture & TCM",
                  description:
                    "Precision healing through traditional Chinese medicine enhanced with modern diagnostic techniques.",
                  gradient: "from-emerald-400 to-teal-400",
                },
                {
                  icon: "ri-seedling-line",
                  title: "Herbal Medicine",
                  description:
                    "Scientifically-formulated organic compounds designed for optimal bioavailability and effectiveness.",
                  gradient: "from-teal-400 to-cyan-400",
                },
                {
                  icon: "ri-brain-line",
                  title: "Mindfulness Training",
                  description:
                    "Neuroscience-backed meditation techniques for enhanced mental clarity and emotional balance.",
                  gradient: "from-cyan-400 to-blue-400",
                },
                {
                  icon: "ri-hand-heart-line",
                  title: "Therapeutic Touch",
                  description:
                    "Advanced massage therapy combining multiple modalities for comprehensive physical restoration.",
                  gradient: "from-blue-400 to-indigo-400",
                },
                {
                  icon: "ri-flask-line",
                  title: "Aromatherapy",
                  description:
                    "Molecularly-pure essential oils delivered through innovative diffusion and application methods.",
                  gradient: "from-indigo-400 to-purple-400",
                },
                {
                  icon: "ri-wireless-charging-line",
                  title: "Energy Healing",
                  description:
                    "Bio-energetic field restoration using advanced frequency therapy and traditional Reiki practices.",
                  gradient: "from-purple-400 to-pink-400",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 border border-gray-100 hover:border-emerald-200 animate-slide-in-up overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>

                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="absolute bottom-6 right-6 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <i className="ri-arrow-right-up-line text-2xl text-emerald-500"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-32 bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-800 relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
                  <i className="ri-star-line text-emerald-300 mr-2"></i>
                  <span className="text-emerald-200 font-medium">
                    Why Choose Us
                  </span>
                </div>

                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                  Excellence in Every Detail
                </h2>

                <p className="text-xl text-emerald-100 mb-12 font-light leading-relaxed">
                  We combine cutting-edge technology with time-tested healing
                  traditions to deliver unprecedented wellness outcomes.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      icon: "ri-shield-check-line",
                      title: "Certified Excellence",
                      description:
                        "Board-certified practitioners with advanced specializations in holistic medicine.",
                      color: "emerald",
                    },
                    {
                      icon: "ri-leaf-line",
                      title: "Sustainable Practices",
                      description:
                        "Environmentally conscious approach with ethically sourced organic materials.",
                      color: "teal",
                    },
                    {
                      icon: "ri-user-heart-line",
                      title: "Personalized Care",
                      description:
                        "AI-enhanced treatment planning for completely customized healing journeys.",
                      color: "cyan",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-6 group animate-slide-in-right"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-r from-${feature.color}-400 to-${feature.color}-500 flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <i
                          className={`${feature.icon} text-2xl text-white`}
                        ></i>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-200 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-emerald-100 font-light leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <Link
                    href="/about"
                    className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-emerald-800 hover:shadow-2xl hover:-translate-y-1 cursor-pointer whitespace-nowrap"
                  >
                    Discover Our Story
                    <i className="ri-arrow-right-line ml-3 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20wellness%20center%20interior%20with%20contemporary%20design%2C%20professional%20healing%20practitioner%2C%20sleek%20equipment%2C%20natural%20lighting%2C%20minimalist%20aesthetic%2C%20high-tech%20medical%20spa%2C%20luxury%20treatment%20room%2C%20geometric%20elements&width=600&height=600&seq=modern-about&orientation=squarish"
                  alt="Modern healing environment"
                  className="relative w-full h-96 object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl flex items-center justify-center shadow-2xl animate-bounce-subtle">
                  <i className="ri-heart-pulse-line text-3xl text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mb-6">
                <i className="ri-chat-quote-line text-emerald-600 mr-2"></i>
                <span className="text-emerald-700 font-medium">
                  Client Stories
                </span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
                Transformation Stories
              </h2>
              <p className="text-xl text-gray-600 font-light">
                Real results from real people
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "Yoga Studio Owner",
                  content:
                    "The innovative approach here completely transformed my chronic pain management. The blend of technology and traditional healing is revolutionary.",
                  rating: 5,
                  image:
                    "https://readdy.ai/api/search-image?query=Professional%20wellness%20client%20portrait%2C%20peaceful%20expression%2C%20modern%20spa%20environment%2C%20satisfied%20customer%2C%20natural%20lighting%2C%20contemporary%20setting%2C%20healthy%20lifestyle&width=100&height=100&seq=client1&orientation=squarish",
                },
                {
                  name: "Marcus Thompson",
                  role: "Tech Executive",
                  content:
                    "Their personalized wellness program helped me achieve work-life balance I never thought possible. The results speak for themselves.",
                  rating: 5,
                  image:
                    "https://readdy.ai/api/search-image?query=Professional%20business%20executive%20client%2C%20relaxed%20and%20healthy%20appearance%2C%20modern%20wellness%20center%20background%2C%20satisfied%20customer%20testimonial%2C%20contemporary%20portrait&width=100&height=100&seq=client2&orientation=squarish",
                },
                {
                  name: "Dr. Elena Rodriguez",
                  role: "Healthcare Professional",
                  content:
                    "As a medical professional, I appreciate their evidence-based approach to holistic healing. Outstanding integration of science and wellness.",
                  rating: 5,
                  image:
                    "https://readdy.ai/api/search-image?query=Professional%20healthcare%20worker%20client%2C%20confident%20smile%2C%20modern%20medical%20spa%20setting%2C%20satisfied%20doctor%20testimonial%2C%20contemporary%20wellness%20environment&width=100&height=100&seq=client3&orientation=squarish",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-emerald-200 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 flex items-center justify-center"
                      >
                        <i
                          className="ri-star-fill text-yellow-400 text-lg animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        ></i>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-600 mb-8 italic font-light text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-2xl object-cover ring-2 ring-emerald-200 group-hover:ring-emerald-400 transition-all duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center">
                        <i className="ri-check-line text-xs text-white"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-emerald-600 font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-bounce-subtle">
              <i className="ri-rocket-line text-white mr-2"></i>
              <span className="text-white font-medium">
                Ready to Transform?
              </span>
            </div>

            <h2 className="text-6xl font-bold mb-8 text-white leading-tight">
              Begin Your
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent block">
                Healing Revolution
              </span>
            </h2>

            <p className="text-2xl mb-12 max-w-4xl mx-auto text-emerald-100 font-light leading-relaxed">
              Join thousands who have discovered the future of wellness through
              our innovative healing solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group relative px-10 py-5 bg-white text-emerald-600 rounded-2xl text-xl font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-white/25 hover:-translate-y-2 cursor-pointer whitespace-nowrap overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Start Your Journey
                </span>
                <i className="ri-arrow-right-line ml-3 transform group-hover:translate-x-2 transition-transform duration-300"></i>
              </Link>

              <Link
                href="/pricing"
                className="group px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl text-xl font-bold transition-all duration-300 hover:bg-white hover:text-emerald-600 hover:shadow-2xl hover:-translate-y-2 cursor-pointer whitespace-nowrap"
              >
                View Investment
                <i className="ri-price-tag-3-line ml-3 transform group-hover:scale-110 transition-transform duration-300"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
