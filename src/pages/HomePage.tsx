import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Smartphone, Cloud, Globe, Star, Users, Coffee, Award } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: '50+', icon: <Award className="w-6 h-6" /> },
  { label: 'Happy Clients', value: '25+', icon: <Users className="w-6 h-6" /> },
  { label: 'Years Experience', value: '3+', icon: <Coffee className="w-6 h-6" /> },
  { label: 'Success Rate', value: '100%', icon: <Star className="w-6 h-6" /> }
];

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Custom Software Development',
    description: 'Tailored solutions designed to meet your specific business needs and challenges.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies.'
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.'
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud Solutions',
    description: 'Secure, scalable cloud infrastructure and migration services.'
  }
];

const testimonials = [
  {
    name: 'Sahan Liyanage',
    role: 'CEO, TechStart.lk',
    content: 'Their team delivered our project ahead of schedule with exceptional quality. Truly impressed with their professionalism.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5
  },
  {
    name: 'Amal Perera',
    role: 'CTO, Innovation Labs',
    content: 'The custom software they built transformed our operations. Highly recommend their services to any business.',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5
  },
  {
    name: 'Rusiru Madusanka',
    role: 'Product Manager, InnovateCo',
    content: 'From concept to deployment, their team was with us every step of the way. Outstanding results!',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5
  }
];

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left py-32 flex flex-col md:flex-row items-center justify-between">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Transforming Ideas into
              <span className="block bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              We create innovative software solutions that drive business growth and technological advancement.
              From custom web applications to mobile apps and cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="btn-primary text-lg px-10 py-4 group"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="flex items-center space-x-2 text-white hover:text-cyan-300 transition-colors text-lg px-8 py-4 border border-white/30 rounded-xl hover:border-cyan-300"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>

          {/* Logo */}
          <div className="mt-12 md:mt-0 flex-shrink-0">
            <img
              src="/images/logo.png" // Replace with the path to your logo icon image
              alt="NextGen CodeX Logo"
              className="w-32 h-auto object-contain"
            />
            
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-32 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive software development services to help your business thrive in the digital age
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="card card-hover p-8 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="btn-secondary text-lg px-8 py-4"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-cyan-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-16">What Our Clients Say</h2>

          <div className="relative">
            <div className="card p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonials[activeTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeTestimonial === index ? 'bg-teal-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Let's discuss your project and create something amazing together.
            Get in touch for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="btn-primary text-lg px-10 py-4"
            >
              Get Started Today
            </Link>
            <Link
              to="/projects"
              className="btn-secondary text-lg px-10 py-4"
            >
              View Our Work
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;