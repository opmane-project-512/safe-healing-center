
'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-emerald-900 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <i className="ri-leaf-line text-3xl text-white"></i>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                  Safe Healing Center
                </span>
                <p className="text-emerald-200 text-sm font-medium">Modern Wellness Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 max-w-md font-light text-lg leading-relaxed">
              Pioneering the future of holistic wellness through innovative healing technologies and time-honored traditional practices.
            </p>
            
            <div className="flex space-x-4">
              {[
                { icon: 'ri-facebook-fill', name: 'Facebook', color: 'from-blue-500 to-blue-600' },
                { icon: 'ri-instagram-line', name: 'Instagram', color: 'from-pink-500 to-purple-600' },
                { icon: 'ri-twitter-line', name: 'Twitter', color: 'from-blue-400 to-cyan-500' },
                { icon: 'ri-youtube-line', name: 'YouTube', color: 'from-red-500 to-red-600' },
                { icon: 'ri-linkedin-line', name: 'LinkedIn', color: 'from-blue-600 to-blue-700' }
              ].map((social, index) => (
                <button
                  key={index}
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${social.color} flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-xl cursor-pointer animate-bounce-subtle`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  title={social.name}
                >
                  <i className={`${social.icon} text-lg text-white`}></i>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                Quick Navigation
              </h3>
              <ul className="space-y-3">
                {[
                  { href: '/about', label: 'About Us', icon: 'ri-team-line' },
                  { href: '/services', label: 'Our Services', icon: 'ri-hand-heart-line' },
                  { href: '/pricing', label: 'Investment Plans', icon: 'ri-price-tag-3-line' },
                  { href: '/contact', label: 'Get in Touch', icon: 'ri-chat-4-line' }
                ].map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href} 
                      className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-lg bg-emerald-800 group-hover:bg-emerald-600 flex items-center justify-center transition-all duration-300">
                        <i className={`${item.icon} text-sm`}></i>
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Contact Info
            </h3>
            <ul className="space-y-4">
              {[
                { icon: 'ri-phone-line', info: '(555) 123-4567', type: 'tel:+15551234567' },
                { icon: 'ri-mail-line', info: 'info@safehealingcenter.com', type: 'mailto:info@safehealingcenter.com' },
                { icon: 'ri-map-pin-line', info: '123 Healing Way, Wellness City', type: null }
              ].map((contact, index) => (
                <li key={index} className="group">
                  {contact.type ? (
                    <a 
                      href={contact.type} 
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <i className={`${contact.icon} text-lg text-white`}></i>
                      </div>
                      <span className="font-medium">{contact.info}</span>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center">
                        <i className={`${contact.icon} text-lg text-white`}></i>
                      </div>
                      <span className="font-medium">{contact.info}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-emerald-800/50 to-teal-800/50 backdrop-blur-sm border border-emerald-700/30">
              <div className="flex items-center space-x-2 mb-2">
                <i className="ri-time-line text-emerald-300"></i>
                <span className="text-emerald-200 font-medium">Operating Hours</span>
              </div>
              <p className="text-gray-300 text-sm">Mon-Fri: 8AM-7PM</p>
              <p className="text-gray-300 text-sm">Sat: 9AM-5PM | Sun: 10AM-4PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Safe Healing Center. All rights reserved. | Designed for modern wellness.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-gray-400 hover:text-emerald-300 transition-colors duration-300 cursor-pointer">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-emerald-300 transition-colors duration-300 cursor-pointer">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-emerald-300 transition-colors duration-300 cursor-pointer">
                Accessibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}