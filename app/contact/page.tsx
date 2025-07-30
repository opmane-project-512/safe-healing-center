
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferred_time: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      const response = await fetch('https://readdy.ai/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-id': 'safe-healing-contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          preferred_time: ''
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to start your healing journey? Get in touch with us to schedule your consultation or ask any questions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
                
                <div className="space-y-6 mb-10">
                  {[
                    {
                      icon: 'ri-map-pin-line',
                      title: 'Visit Our Center',
                      details: ['123 Healing Way', 'Wellness City, WC 12345', 'United States'],
                      action: 'Get Directions'
                    },
                    {
                      icon: 'ri-phone-line',
                      title: 'Call Us',
                      details: ['Main: (555) 123-4567', 'Emergency: (555) 123-4568'],
                      action: 'Call Now'
                    },
                    {
                      icon: 'ri-mail-line',
                      title: 'Email Us',
                      details: ['info@safehealingcenter.com', 'appointments@safehealingcenter.com'],
                      action: 'Send Email'
                    },
                    {
                      icon: 'ri-time-line',
                      title: 'Operating Hours',
                      details: ['Monday - Friday: 8:00 AM - 7:00 PM', 'Saturday: 9:00 AM - 5:00 PM', 'Sunday: 10:00 AM - 4:00 PM'],
                      action: null
                    }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                        <i className={`${contact.icon} text-xl text-green-600`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{contact.title}</h3>
                        {contact.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                        {contact.action && (
                          <button className="text-green-600 hover:text-green-700 font-medium mt-2 cursor-pointer">
                            {contact.action} →
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: 'ri-facebook-fill', name: 'Facebook' },
                      { icon: 'ri-instagram-line', name: 'Instagram' },
                      { icon: 'ri-twitter-line', name: 'Twitter' },
                      { icon: 'ri-youtube-line', name: 'YouTube' }
                    ].map((social, index) => (
                      <button
                        key={index}
                        className="w-12 h-12 flex items-center justify-center bg-green-100 hover:bg-green-200 rounded-full transition-colors cursor-pointer"
                        title={social.name}
                      >
                        <i className={`${social.icon} text-xl text-green-600`}></i>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Schedule Your Consultation</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                      <i className="ri-check-line text-2xl text-green-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      Your consultation request has been received. We'll contact you within 24 hours to confirm your appointment.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-green-600 hover:text-green-700 font-medium cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form id="safe-healing-contact" onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Service
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm pr-8"
                        >
                          <option value="">Select a service</option>
                          <option value="acupuncture">Acupuncture & TCM</option>
                          <option value="herbal">Herbal Medicine</option>
                          <option value="massage">Massage Therapy</option>
                          <option value="meditation">Meditation & Mindfulness</option>
                          <option value="aromatherapy">Aromatherapy</option>
                          <option value="energy">Energy Healing & Reiki</option>
                          <option value="consultation">General Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Appointment Time
                      </label>
                      <input
                        type="text"
                        name="preferred_time"
                        value={formData.preferred_time}
                        onChange={(e) => setFormData({...formData, preferred_time: e.target.value})}
                        placeholder="e.g., Weekday mornings, Saturday afternoons"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value.slice(0, 500)})}
                        placeholder="Tell us about your health goals, any specific concerns, or questions you have about our services..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm h-32 resize-none"
                        required
                        maxLength={500}
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        {formData.message.length}/500 characters
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Send Message & Request Consultation
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us</h2>
              <p className="text-lg text-gray-600">
                Located in the heart of Wellness City, our center is easily accessible and offers plenty of parking
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4155!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
