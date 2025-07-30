
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function Pricing() {
  const [billingType, setBillingType] = useState('monthly');

  const subscriptionPlans = [
    {
      name: 'Essential Wellness',
      monthlyPrice: 149,
      yearlyPrice: 1490,
      description: 'Perfect for those beginning their natural healing journey',
      features: [
        '2 treatments per month',
        'Access to meditation classes',
        'Basic health consultations',
        'Wellness resource library',
        'Email support',
        '10% discount on additional services'
      ],
      popular: false,
      color: 'green'
    },
    {
      name: 'Complete Healing',
      monthlyPrice: 249,
      yearlyPrice: 2490,
      description: 'Comprehensive healing plan for optimal wellness',
      features: [
        '4 treatments per month',
        'Priority scheduling',
        'Personalized treatment plans',
        'Access to all group classes',
        'Monthly progress consultations',
        'Herbal medicine consultations',
        '20% discount on additional services',
        'Phone & email support'
      ],
      popular: true,
      color: 'green'
    },
    {
      name: 'Premium Transformation',
      monthlyPrice: 399,
      yearlyPrice: 3990,
      description: 'Ultimate healing experience with unlimited access',
      features: [
        'Unlimited treatments',
        'VIP scheduling privileges',
        'Dedicated healing coordinator',
        'Custom herbal formulations',
        'Private meditation sessions',
        'Nutrition counseling',
        'Home visit consultations',
        '30% discount on workshops',
        '24/7 support hotline'
      ],
      popular: false,
      color: 'green'
    }
  ];

  const individualServices = [
    {
      category: 'Acupuncture & TCM',
      services: [
        { name: 'Initial Acupuncture Consultation', price: 120, duration: '90 minutes' },
        { name: 'Follow-up Acupuncture Session', price: 85, duration: '60 minutes' },
        { name: 'Herbal Medicine Consultation', price: 95, duration: '45 minutes' },
        { name: 'Cupping Therapy', price: 70, duration: '45 minutes' }
      ]
    },
    {
      category: 'Massage & Bodywork',
      services: [
        { name: 'Swedish Massage', price: 90, duration: '60 minutes' },
        { name: 'Deep Tissue Massage', price: 110, duration: '60 minutes' },
        { name: 'Hot Stone Massage', price: 130, duration: '75 minutes' },
        { name: 'Prenatal Massage', price: 100, duration: '60 minutes' }
      ]
    },
    {
      category: 'Energy & Spiritual Healing',
      services: [
        { name: 'Reiki Session', price: 80, duration: '60 minutes' },
        { name: 'Chakra Balancing', price: 95, duration: '75 minutes' },
        { name: 'Crystal Healing Therapy', price: 85, duration: '60 minutes' },
        { name: 'Sound Bath Healing', price: 75, duration: '60 minutes' }
      ]
    },
    {
      category: 'Wellness & Lifestyle',
      services: [
        { name: 'Meditation Class (Group)', price: 25, duration: '45 minutes' },
        { name: 'Private Meditation Session', price: 70, duration: '60 minutes' },
        { name: 'Aromatherapy Treatment', price: 85, duration: '60 minutes' },
        { name: 'Wellness Consultation', price: 120, duration: '60 minutes' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-800 mb-6">Pricing & Subscriptions</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our flexible pricing options designed to make natural healing accessible for everyone
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <div className="bg-white p-2 rounded-full shadow-sm">
                <div className="flex">
                  <button
                    onClick={() => setBillingType('monthly')}
                    className={`px-6 py-2 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      billingType === 'monthly'
                        ? 'bg-green-600 text-white'
                        : 'text-gray-600 hover:text-green-600'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingType('yearly')}
                    className={`px-6 py-2 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      billingType === 'yearly'
                        ? 'bg-green-600 text-white'
                        : 'text-gray-600 hover:text-green-600'
                    }`}
                  >
                    Yearly (Save 17%)
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subscriptionPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white rounded-2xl shadow-sm border-2 ${
                  plan.popular ? 'border-green-600' : 'border-gray-100'
                } p-8`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-800">
                        ${billingType === 'monthly' ? plan.monthlyPrice : Math.round(plan.yearlyPrice / 12)}
                      </span>
                      <span className="text-gray-600">/{billingType === 'monthly' ? 'month' : 'month'}</span>
                      {billingType === 'yearly' && (
                        <div className="text-sm text-green-600 mt-1">
                          Billed yearly: ${plan.yearlyPrice}
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-check-line text-green-600 text-sm"></i>
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact" className={`w-full block text-center py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    plan.popular
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600'
                  }`}>
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Individual Service Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Prefer to pay per session? Choose from our comprehensive menu of individual healing services
              </p>
            </div>

            <div className="space-y-12">
              {individualServices.map((category, index) => (
                <div key={index} className="bg-green-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-lg font-semibold text-gray-800">{service.name}</h4>
                          <span className="text-2xl font-bold text-green-600">${service.price}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{service.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: 'Can I cancel my subscription anytime?',
                  answer: 'Yes, you can cancel your subscription at any time. There are no cancellation fees, and you\'ll continue to have access until the end of your billing period.'
                },
                {
                  question: 'Do you offer payment plans?',
                  answer: 'We offer flexible payment options including monthly and yearly subscriptions. We also accept HSA and FSA payments for eligible services.'
                },
                {
                  question: 'Are there any hidden fees?',
                  answer: 'No hidden fees. All our pricing is transparent. The only additional costs might be for specialized herbal formulations or premium add-on services.'
                },
                {
                  question: 'Can I switch between plans?',
                  answer: 'Yes, you can upgrade or downgrade your subscription plan at any time. Changes will take effect at the start of your next billing cycle.'
                },
                {
                  question: 'Do you offer discounts for seniors or students?',
                  answer: 'Yes, we offer 15% discounts for seniors (65+) and students with valid ID. Military personnel and first responders receive 20% off all services.'
                },
                {
                  question: 'What if I need to miss an appointment?',
                  answer: 'We require 24-hour notice for cancellations. Subscription members can reschedule without penalty, while individual service bookings may incur a fee for late cancellations.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Healing Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
              Choose the plan that works best for you and start experiencing the benefits of natural healing today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white hover:bg-green-50 text-green-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                Schedule Consultation
              </Link>
              <Link href="/services" className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all cursor-pointer whitespace-nowrap">
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
