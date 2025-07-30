
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: 'ri-heart-pulse-line',
      title: 'Acupuncture & Traditional Chinese Medicine',
      duration: '60-90 minutes',
      description: 'Ancient healing art that stimulates specific points on the body to restore energy balance and promote natural healing.',
      benefits: ['Pain relief', 'Stress reduction', 'Improved circulation', 'Enhanced immunity'],
      image: 'https://readdy.ai/api/search-image?query=Acupuncture%20treatment%20session%2C%20professional%20practitioner%20inserting%20needles%2C%20calm%20patient%20lying%20on%20treatment%20table%2C%20serene%20wellness%20center%20environment%2C%20traditional%20Chinese%20medicine%20tools%2C%20natural%20lighting%2C%20peaceful%20atmosphere&width=500&height=300&seq=acupuncture1&orientation=landscape'
    },
    {
      icon: 'ri-plant-line',
      title: 'Herbal Medicine Consultation',
      duration: '45-60 minutes',
      description: 'Personalized herbal formulations using organic, sustainably sourced plants to support your body\'s healing processes.',
      benefits: ['Natural detoxification', 'Immune support', 'Digestive health', 'Hormonal balance'],
      image: 'https://readdy.ai/api/search-image?query=Herbal%20medicine%20consultation%2C%20organic%20herbs%20and%20plants%2C%20natural%20remedies%2C%20healing%20practitioner%20explaining%20herbs%2C%20wellness%20center%20apothecary%2C%20traditional%20medicine%20bottles%2C%20earth%20tones%2C%20holistic%20health%20consultation&width=500&height=300&seq=herbal1&orientation=landscape'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Therapeutic Massage',
      duration: '60-90 minutes',
      description: 'Comprehensive massage therapy including Swedish, deep tissue, and hot stone techniques for total relaxation.',
      benefits: ['Muscle tension relief', 'Improved flexibility', 'Better sleep', 'Stress reduction'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20massage%20therapy%20session%2C%20skilled%20therapist%20working%20on%20client%2C%20peaceful%20spa%20room%2C%20natural%20oils%20and%20stones%2C%20calming%20atmosphere%2C%20wellness%20center%20massage%20table%2C%20earth%20tones%2C%20relaxation%20therapy&width=500&height=300&seq=massage1&orientation=landscape'
    },
    {
      icon: 'ri-meditation-line',
      title: 'Meditation & Mindfulness Training',
      duration: '30-60 minutes',
      description: 'Guided meditation sessions and mindfulness practices to cultivate inner peace and mental clarity.',
      benefits: ['Stress management', 'Better focus', 'Emotional balance', 'Inner peace'],
      image: 'https://readdy.ai/api/search-image?query=Group%20meditation%20session%2C%20people%20sitting%20peacefully%2C%20guided%20meditation%20class%2C%20serene%20wellness%20center%20meditation%20room%2C%20natural%20elements%2C%20soft%20lighting%2C%20mindfulness%20practice%2C%20zen%20atmosphere&width=500&height=300&seq=meditation1&orientation=landscape'
    },
    {
      icon: 'ri-flower-line',
      title: 'Aromatherapy & Essential Oils',
      duration: '45-75 minutes',
      description: 'Therapeutic use of essential oils through inhalation, topical application, and aromatherapy massage.',
      benefits: ['Mood enhancement', 'Anxiety relief', 'Better sleep', 'Energy boost'],
      image: 'https://readdy.ai/api/search-image?query=Aromatherapy%20treatment%20session%2C%20essential%20oil%20bottles%2C%20diffuser%20with%20natural%20scents%2C%20peaceful%20wellness%20environment%2C%20organic%20plant%20extracts%2C%20calming%20spa%20atmosphere%2C%20therapeutic%20oils%2C%20holistic%20healing&width=500&height=300&seq=aroma1&orientation=landscape'
    },
    {
      icon: 'ri-rainbow-line',
      title: 'Energy Healing & Reiki',
      duration: '60-90 minutes',
      description: 'Gentle energy healing techniques to balance chakras, clear energy blockages, and restore spiritual harmony.',
      benefits: ['Energy balance', 'Spiritual healing', 'Emotional release', 'Deep relaxation'],
      image: 'https://readdy.ai/api/search-image?query=Reiki%20energy%20healing%20session%2C%20practitioner%20hands%20hovering%20over%20client%2C%20peaceful%20treatment%20room%2C%20chakra%20symbols%2C%20spiritual%20healing%20environment%2C%20soft%20lighting%2C%20energy%20work%20therapy%2C%20holistic%20wellness%20center&width=500&height=300&seq=reiki1&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="relative py-20 bg-cover bg-center bg-top" 
                 style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Various%20natural%20healing%20modalities%20display%2C%20healing%20crystals%2C%20herbs%2C%20essential%20oils%2C%20massage%20tools%2C%20meditation%20elements%2C%20wellness%20center%20services%20overview%2C%20holistic%20health%20tools%2C%20earth%20tones%2C%20serene%20atmosphere&width=1920&height=600&seq=services-hero&orientation=landscape')`}}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-6">Our Healing Services</h1>
              <p className="text-xl max-w-3xl mx-auto text-gray-100">
                Comprehensive natural healing modalities designed to restore balance and promote optimal wellness
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full">
                        <i className={`${service.icon} text-2xl text-green-600`}></i>
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
                        <p className="text-green-600 font-medium">{service.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits:</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-5 h-5 flex items-center justify-center">
                              <i className="ri-check-line text-green-600 text-sm"></i>
                            </div>
                            <span className="text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap inline-block">
                      Book This Service
                    </Link>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover object-top rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">How We Approach Your Healing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive process ensures you receive the most effective treatment for your unique needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Initial Consultation',
                  description: 'Comprehensive health assessment and discussion of your wellness goals.',
                  icon: 'ri-user-search-line'
                },
                {
                  step: '2',
                  title: 'Personalized Plan',
                  description: 'Customized treatment plan tailored to your specific needs and preferences.',
                  icon: 'ri-file-list-line'
                },
                {
                  step: '3',
                  title: 'Treatment Sessions',
                  description: 'Regular healing sessions with our experienced practitioners.',
                  icon: 'ri-hand-heart-line'
                },
                {
                  step: '4',
                  title: 'Ongoing Support',
                  description: 'Continuous monitoring and adjustment of your treatment plan.',
                  icon: 'ri-heart-pulse-line'
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <i className={`${step.icon} text-2xl text-white`}></i>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-green-600 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Healing Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
              Book a consultation today and discover which healing modalities are right for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white hover:bg-green-50 text-green-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                Schedule Consultation
              </Link>
              <Link href="/pricing" className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all cursor-pointer whitespace-nowrap">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
