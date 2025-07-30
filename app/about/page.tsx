
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="relative py-20 bg-cover bg-center bg-top" 
                 style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Peaceful%20healing%20center%20interior%20with%20natural%20elements%2C%20wooden%20furniture%2C%20plants%2C%20soft%20natural%20lighting%2C%20meditation%20space%2C%20earth%20tones%2C%20wellness%20sanctuary%2C%20serene%20atmosphere%2C%20holistic%20health%20environment&width=1920&height=600&seq=about-hero&orientation=landscape')`}}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-6">About Safe Healing Center</h1>
              <p className="text-xl max-w-3xl mx-auto text-gray-100">
                Dedicated to restoring balance and promoting wellness through time-tested natural healing practices
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Safe Healing Center was founded in 2015 with a simple yet profound mission: to provide accessible, effective natural healing services that honor both ancient wisdom and modern understanding of wellness.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our journey began when our founder, Dr. Elena Martinez, experienced her own transformative healing through traditional Chinese medicine after conventional treatments had failed to address her chronic health issues. This personal experience ignited a passion for holistic healing that led to the creation of our center.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we continue to grow and evolve, always staying true to our core values of compassionate care, natural healing, and treating each person as a unique individual with their own healing journey.
                </p>
              </div>
              
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20wellness%20center%20founder%20portrait%2C%20professional%20woman%20in%20natural%20healing%20environment%2C%20peaceful%20expression%2C%20warm%20lighting%2C%20plants%20in%20background%2C%20holistic%20health%20practitioner%2C%20serene%20wellness%20space%2C%20earth%20tones&width=600&height=500&seq=founder1&orientation=landscape"
                  alt="Our founder"
                  className="w-full h-80 object-cover object-top rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission & Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in the power of natural healing to transform lives and communities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: 'ri-heart-line',
                  title: 'Compassionate Care',
                  description: 'Every client receives personalized attention and care tailored to their unique needs and healing journey.'
                },
                {
                  icon: 'ri-leaf-line',
                  title: 'Natural Healing',
                  description: 'We harness the power of nature using only organic, sustainably sourced materials and time-tested methods.'
                },
                {
                  icon: 'ri-community-line',
                  title: 'Holistic Wellness',
                  description: 'We treat the whole person - mind, body, and spirit - addressing root causes rather than just symptoms.'
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-6 mx-auto">
                    <i className={`${value.icon} text-2xl text-green-600`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Mission Statement</h3>
              <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
                "To empower individuals on their journey to optimal health and wellness through safe, effective natural healing modalities that honor the body's innate ability to heal itself. We are committed to providing compassionate, personalized care that addresses the root causes of imbalance while fostering long-term wellness and vitality."
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Healing Team</h2>
              <p className="text-xl text-gray-600">
                Experienced, certified practitioners dedicated to your wellness journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Dr. Elena Martinez',
                  role: 'Founder & Traditional Chinese Medicine Practitioner',
                  experience: '15+ years',
                  specialties: ['Acupuncture', 'Herbal Medicine', 'Holistic Wellness'],
                  image: 'https://readdy.ai/api/search-image?query=Professional%20female%20TCM%20practitioner%2C%20warm%20smile%2C%20natural%20wellness%20center%20background%2C%20healing%20hands%2C%20serene%20expression%2C%20traditional%20medicine%20expert%2C%20earth%20tones%2C%20peaceful%20atmosphere&width=400&height=400&seq=doctor1&orientation=squarish'
                },
                {
                  name: 'Michael Thompson',
                  role: 'Licensed Massage Therapist & Reiki Master',
                  experience: '12+ years',
                  specialties: ['Deep Tissue Massage', 'Energy Healing', 'Stress Relief'],
                  image: 'https://readdy.ai/api/search-image?query=Professional%20male%20massage%20therapist%2C%20calming%20presence%2C%20wellness%20center%20setting%2C%20healing%20hands%2C%20peaceful%20expression%2C%20natural%20health%20practitioner%2C%20warm%20lighting%2C%20therapeutic%20environment&width=400&height=400&seq=therapist1&orientation=squarish'
                },
                {
                  name: 'Dr. Sarah Chen',
                  role: 'Naturopathic Doctor & Aromatherapist',
                  experience: '10+ years',
                  specialties: ['Naturopathy', 'Essential Oils', 'Nutritional Healing'],
                  image: 'https://readdy.ai/api/search-image?query=Professional%20female%20naturopathic%20doctor%2C%20gentle%20smile%2C%20natural%20healing%20environment%2C%20essential%20oils%20and%20herbs%20in%20background%2C%20holistic%20health%20expert%2C%20serene%20wellness%20space%2C%20earth%20tones&width=400&height=400&seq=naturopath1&orientation=squarish'
                }
              ].map((member, index) => (
                <div key={index} className="bg-green-50 p-8 rounded-2xl shadow-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover object-top rounded-full mx-auto mb-6"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-green-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.experience} experience</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Commitment to Excellence</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: 'ri-award-line',
                      title: 'Certified & Licensed',
                      description: 'All practitioners hold relevant certifications and licenses in their specialties.'
                    },
                    {
                      icon: 'ri-shield-check-line',
                      title: 'Safety First',
                      description: 'We maintain the highest standards of safety and cleanliness in all our treatments.'
                    },
                    {
                      icon: 'ri-heart-pulse-line',
                      title: 'Continuous Learning',
                      description: 'Our team regularly updates their knowledge with the latest in natural healing practices.'
                    },
                    {
                      icon: 'ri-customer-service-line',
                      title: 'Personalized Service',
                      description: 'Every treatment plan is customized to meet your individual health goals.'
                    }
                  ].map((commitment, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-full flex-shrink-0">
                        <i className={`${commitment.icon} text-xl text-white`}></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{commitment.title}</h3>
                        <p className="text-green-100">{commitment.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Clean%20modern%20wellness%20center%20treatment%20room%2C%20natural%20lighting%2C%20plants%2C%20organized%20healing%20space%2C%20professional%20medical%20equipment%2C%20serene%20atmosphere%2C%20earth%20tones%2C%20holistic%20health%20environment%2C%20safety%20standards&width=600&height=500&seq=facility1&orientation=landscape"
                  alt="Our facility"
                  className="w-full h-80 object-cover object-top rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
