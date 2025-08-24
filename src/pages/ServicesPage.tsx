import { Link } from 'react-router-dom';
import { Code2, Globe, Smartphone, Cloud, Database, Shield, Zap, Users, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-12 h-12" />,
    title: 'Custom Software Development',
    description: 'We create tailored software solutions that perfectly align with your business needs and objectives.',
    features: [
      'Enterprise Applications',
      'Business Process Automation',
      'Legacy System Modernization',
      'Custom CRM & ERP Solutions',
      'API Development & Integration'
    ],
    technologies: ['React', 'Node.js', 'Python', 'Java', '.NET'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'Web Application Development',
    description: 'Modern, responsive, and scalable web applications built with cutting-edge technologies.',
    features: [
      'Progressive Web Apps (PWA)',
      'Single Page Applications (SPA)',
      'E-commerce Platforms',
      'Content Management Systems',
      'Real-time Web Applications'
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript'],
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: [
      'iOS & Android Development',
      'Cross-platform Solutions',
      'Mobile UI/UX Design',
      'App Store Optimization',
      'Mobile App Maintenance'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Cloud className="w-12 h-12" />,
    title: 'Cloud Solutions',
    description: 'Secure, scalable, and cost-effective cloud infrastructure and migration services.',
    features: [
      'Cloud Migration',
      'Infrastructure as Code',
      'Serverless Architecture',
      'Container Orchestration',
      'Cloud Security & Monitoring'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: 'Database Solutions',
    description: 'Robust database design, optimization, and management for your applications.',
    features: [
      'Database Design & Architecture',
      'Performance Optimization',
      'Data Migration',
      'Backup & Recovery Solutions',
      'Database Security'
    ],
    technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Cybersecurity Services',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
    features: [
      'Security Audits & Assessments',
      'Penetration Testing',
      'Security Architecture',
      'Compliance Management',
      'Incident Response'
    ],
    technologies: ['OWASP', 'SSL/TLS', 'OAuth', 'JWT', 'Encryption'],
    color: 'from-red-500 to-pink-500'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements and create a detailed project roadmap.',
    icon: <Users className="w-8 h-8" />
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description: 'Our team designs the system architecture and user experience.',
    icon: <Zap className="w-8 h-8" />
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We build your solution using agile methodologies and rigorous testing.',
    icon: <Code2 className="w-8 h-8" />
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description: 'We deploy your solution and provide ongoing maintenance and support.',
    icon: <Shield className="w-8 h-8" />
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Our <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            We provide comprehensive software development services to help your business thrive in the digital age. 
            From custom applications to cloud solutions, we've got you covered.
          </p>
          <Link
            to="/contact"
            className="btn-primary text-lg px-10 py-4 group"
          >
            Get Free Consultation
           
          </Link>
        </div>
        
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="card card-hover p-10 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Let's discuss your project requirements and create a custom solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="btn-primary text-lg px-10 py-4"
            >
              Start Your Project
            </Link>
            <Link
              to="/projects"
              className="btn-secondary text-lg px-10 py-4"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;