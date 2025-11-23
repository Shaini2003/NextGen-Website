import React, { useState, useEffect, TouchEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Smartphone, Cloud, Globe, Star, Users, Coffee, Award } from 'lucide-react';

// CSS Styles (included as inline styles and Tailwind classes)
const styles = `
  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #0d9488, #0891b2);
    color: white;
    font-weight: 600;
    border-radius: 12px;
    transition: all 0.3s ease;
    transform: scale(1);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  .btn-primary:hover {
    background: linear-gradient(to right, #0f766e, #0e7490);
    transform: scale(1.05);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .btn-primary:focus {
    outline: 2px solid #06b6d4;
    outline-offset: 2px;
  }
  .btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: white;
    color: #111827;
    font-weight: 600;
    border-radius: 12px;
    border: 1px solid #d1d5db;
    transition: all 0.3s ease;
    transform: scale(1);
  }
  .btn-secondary:hover {
    border-color: #67e8f9;
    color: #155e75;
    transform: scale(1.05);
  }
  .btn-secondary:focus {
    outline: 2px solid #06b6d4;
    outline-offset: 2px;
  }
  .card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  .card:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .card-hover:hover {
    transform: translateY(-8px);
  }
  .gradient-text {
    background: linear-gradient(to right, #0d9488, #0891b2);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .section-padding {
    padding: 96px 0;
  }
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }
  .animate-fade-in-up {
    animation: fade-in-up 1s ease-out;
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  html {
    scroll-behavior: smooth;
  }
  button:focus-visible,
  a:focus-visible {
    outline: 2px solid #06b6d4;
    outline-offset: 2px;
  }
`;

// Props interface for ErrorBoundary
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// Error Boundary Component
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('HomePage Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-6">We're sorry, but there was an error loading the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all duration-300"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// SEO Component
const SEO = () => {
  return (
    <>
      <title>Your Company - Custom Software Development</title>
      <meta 
        name="description" 
        content="We create innovative software solutions including web development, mobile apps, and cloud solutions. Transform your business with our expertise." 
      />
      <meta 
        name="keywords" 
        content="software development, web development, mobile apps, cloud solutions, custom software" 
      />
      <meta property="og:title" content="Your Company - Custom Software Development" />
      <meta 
        property="og:description" 
        content="We create innovative software solutions including web development, mobile apps, and cloud solutions." 
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Your Company - Custom Software Development" />
      <meta 
        name="twitter:description" 
        content="We create innovative software solutions including web development, mobile apps, and cloud solutions." 
      />
    </>
  );
};

// Data
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

// Main HomePage Component
const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Touch swipe handlers for testimonials
  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    } else if (isRightSwipe) {
      setActiveTestimonial((prev) => 
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        {/* Inject CSS Styles */}
        <style>{styles}</style>
        
        {/* SEO Meta Tags */}
        <SEO />

        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900"
          aria-labelledby="hero-heading"
        >
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
            <div className="animate-fade-in-up max-w-4xl">
              <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Transforming Ideas into
                <span className="block bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-cyan-100 mb-12 leading-relaxed">
                We create innovative software solutions that drive business growth and technological advancement.
                From custom web applications to mobile apps and cloud solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Link
                  to="/contact"
                  className="btn-primary text-lg px-10 py-4 group"
                >
                  Start Your Project
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  to="/services"
                  className="flex items-center space-x-2 text-white hover:text-cyan-300 transition-colors text-lg px-8 py-4 border border-white/30 rounded-xl hover:border-cyan-300"
                >
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section 
          className="section-padding bg-gradient-to-br from-neutral-50 to-white"
          aria-labelledby="services-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold gradient-text mb-8">
                Our Services
              </h2>
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
                  <div 
                    className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
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
                className="btn-secondary text-lg px-8 py-4 group"
              >
                View All Services
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
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
        <section 
          className="section-padding bg-white"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold gradient-text mb-16">
              What Our Clients Say
            </h2>

            <div 
              className="relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="card p-8 md:p-12">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-6 h-6 text-yellow-400 fill-current" 
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[activeTestimonial].avatar}
                    alt={`Portrait of ${testimonials[activeTestimonial].name}`}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
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
                    aria-label={`View testimonial from ${testimonials[index].name}`}
                    aria-current={activeTestimonial === index ? 'true' : 'false'}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-br from-gray-900 to-gray-800 relative">
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
                className="btn-primary text-lg px-10 py-4 group"
              >
                Get Started Today
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                to="/projects"
                className="btn-secondary text-lg px-10 py-4 group"
              >
                View Our Work
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;