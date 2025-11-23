import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, Globe, MessageSquare, X } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    content: 'contact@nextgcodex.com',
    description: 'Send us an email anytime'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone',
    content: '0759627589',
    description: 'Mon-Fri, 9am-5pm EST'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Office',
    content: 'Galle, Sri Lanka',
    description: 'Visit our office'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Business Hours',
    content: '9:00 AM - 6:00 PM',
    description: 'Monday to Friday'
  }
];

const services = [
  'Custom Software Development',
  'Web Application Development',
  'Mobile App Development',
  'Cloud Solutions',
  'Database Solutions',
  'UI/UX Design',
  'Consulting Services',
  'Other'
];

const faqs = [
  {
    question: 'What\'s your typical response time?',
    answer: 'We typically respond to all inquiries within 24 hours during business days.'
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes, we offer a 30-minute free consultation to discuss your project requirements.'
  },
  {
    question: 'What industries do you work with?',
    answer: 'We work with various industries including FinTech, Healthcare, E-commerce, Education, and more.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer comprehensive maintenance and support packages for all our projects.'
  },
  {
    question: 'What\'s your development process?',
    answer: 'We follow an agile development methodology with regular updates and client feedback sessions.'
  },
  {
    question: 'Can you work with existing systems?',
    answer: 'Absolutely! We specialize in system integration and can work with your existing infrastructure.'
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Function to generate WhatsApp message and open WhatsApp
  const sendToWhatsApp = (data: typeof formData) => {
    // Format the message with all form data
    const message = `*New Contact Form Submission - NextGen CodeX*\n\n` +
                   `*Name:* ${data.name}\n` +
                   `*Email:* ${data.email}\n` +
                   `*Company:* ${data.company || 'Not provided'}\n` +
                   `*Phone:* ${data.phone || 'Not provided'}\n` +
                   `*Service Interested In:* ${data.service || 'Not specified'}\n` +
                   `*Project Budget:* ${data.budget || 'Not specified'}\n` +
                   `*Project Timeline:* ${data.timeline || 'Not specified'}\n\n` +
                   `*Project Details:*\n${data.message}\n\n` +
                   `*Submitted via Website Form*`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp URL with phone number and message
    const whatsappUrl = `https://wa.me/94759627589?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to WhatsApp
      const whatsappSuccess = sendToWhatsApp(formData);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitting(false);
      
      if (whatsappSuccess) {
        // Show success message
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          budget: '',
          timeline: '',
          message: ''
        });

        // Auto-hide success message after 6 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 6000);
      }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setIsSubmitting(false);
      // Even if there's an error, we'll show success since WhatsApp opened
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    }
  };

  const closePopup = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen">
      {/* Success Popup Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-auto shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Success!</h3>
              </div>
              <button
                onClick={closePopup}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-700 mb-6">
              Your message has been prepared and WhatsApp is opening! Please check your browser for the WhatsApp tab. 
              If WhatsApp didn't open automatically, please click send on the pre-filled message in your WhatsApp.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={closePopup}
                className="flex-1 bg-teal-600 text-white py-3 px-4 rounded-xl hover:bg-teal-700 transition-colors font-semibold"
              >
                OK
              </button>
              <a
                href="https://wa.me/94759627589"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-colors font-semibold text-center"
              >
                Open WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            Ready to transform your business with innovative digital solutions? 
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:contact@nextgcodex.com"
              className="inline-flex items-center justify-center bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg px-10 py-4 group"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </a>
            <a
              href="tel:0759627589"
              className="inline-flex items-center justify-center bg-white text-gray-900 font-semibold rounded-xl border border-gray-300 hover:border-cyan-300 hover:text-cyan-700 transition-all duration-300 transform hover:scale-105 text-lg px-10 py-4 group"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-32 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-10">
              <div className="flex items-center mb-8">
                <MessageSquare className="w-8 h-8 text-teal-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Send us a message via WhatsApp</h2>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Fill out the form below and we'll open WhatsApp with your project details pre-filled. 
                Just click "Send" in WhatsApp to contact us directly!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="+94 759 627 589"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="over-50k">Over $50,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-months-plus">6+ months</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Preparing WhatsApp...
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Open WhatsApp with Details
                    </>
                  )}
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    <Phone className="w-4 h-4 inline mr-1" />
                    We'll open WhatsApp with your details pre-filled to: <strong>0759627589</strong>
                  </p>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-teal-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Get in touch with us through any of the following methods. We're here to help you 
                  bring your digital vision to life.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mr-4 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-gray-800 font-medium">{info.content}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Direct Section */}
                <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Direct WhatsApp</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Prefer to message us directly? Click below to start a conversation on WhatsApp:
                  </p>
                  <div className="text-center">
                    <a
                      href="https://wa.me/94759627589"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 px-6 py-3"
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Open WhatsApp Directly
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">Located in the heart of Galle, Sri Lanka</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">NextGen CodeX Office</h3>
                <p className="text-gray-600">Galle, Sri Lanka</p>
                <p className="text-sm text-gray-500 mt-2">Your trusted software development partner</p>
                <div className="mt-4">
                  <p className="text-green-600 font-semibold">
                    <MessageSquare className="w-4 h-4 inline mr-1" />
                    WhatsApp: 0759627589
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;