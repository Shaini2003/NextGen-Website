import { Link } from 'react-router-dom';
import { Users, Target, Award, Heart, Code, Globe, Smartphone, Cloud, CheckCircle, Linkedin } from 'lucide-react';

const team = [

    {
      id: 1,
      name: 'Gangul Ranaweera',
      role: 'CEO & Founder',
      image: 'images/g.png',
      bio: 'Vision-driven founder with 2+ years of experience in software engineering, solution architecture, and business strategy. Leads innovation, project direction, and overall company growth.',
      social: {
        linkedin: 'https://www.linkedin.com/in/gangul-ranaweera-959325339/',
      },
    },
    {
      id: 2,
      name: 'Tharindu Herath',
      role: 'Co-Founder',
      image: 'images/th.png',
      bio: 'Tech-focused co-founder with strong expertise in backend engineering, cloud deployment, and scalable system architecture. Ensures high-performance, secure, and reliable development workflows.',
      social: {
        linkedin: 'https://www.linkedin.com/in/tharindu-herath-b648271bb/',
      },
    },
    {
      id: 3,
      name: 'Januli Tharinya',
      role: 'Business Analyst',
      image: 'images/ja.png',
      bio: 'Detail-oriented Business Analyst skilled in requirement gathering, process mapping, UI/UX documentation, and transforming client needs into actionable development tasks.',
      social: {
        linkedin: 'https://www.linkedin.com/in/januli-tarinya-samaraweera-8bb4281b4',
      },
    },
    {
      id: 4,
      name: 'Duvindu Nimsara',
      role: 'UI/UX Designer',
      image: 'images/d.png',
      bio: 'Creative UI/UX Designer specializing in user-centered design, wireframing, prototyping, and crafting modern digital experiences that blend aesthetics with functionality.',
      social: {
        linkedin: 'https://www.linkedin.com/in/duvindu-nimsara/',
      },
    },
    {
      id: 5,
      name: 'Sadeepa Nimsara',
      role: 'AI / ML Engineer',
      image: 'images/sadeepa.png',
      bio: 'AI/ML engineer skilled in predictive modeling, computer vision, and data-driven automation. Focused on building intelligent solutions that enhance business performance.',
      social: {
        linkedin: 'https://www.linkedin.com/in/sadeepa-nimsara',
      },
    },
  ];
  

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Innovation',
    description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Collaboration',
    description: 'We work closely with our clients as partners to achieve shared success and goals.'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Passion',
    description: 'We love what we do and bring enthusiasm and dedication to every project.'
  }
];

const achievements = [
  { number: '50+', label: 'Projects Completed' },
  { number: '25+', label: 'Happy Clients' },
  { number: '3+', label: 'Years Experience' },
  { number: '100%', label: 'Success Rate' }
];

const services = [
  { icon: <Code className="w-6 h-6" />, name: 'Custom Software Development' },
  { icon: <Globe className="w-6 h-6" />, name: 'Web Application Development' },
  { icon: <Smartphone className="w-6 h-6" />, name: 'Mobile App Development' },
  { icon: <Cloud className="w-6 h-6" />, name: 'Cloud Solutions' }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                About <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">NextGen CodeX</span>
              </h1>
              <p className="text-xl md:text-2xl text-cyan-100 mb-8 leading-relaxed">
                We're not just building software — we're building digital experiences that drive growth,
                innovation, and success for businesses worldwide.
              </p>
              <Link
                to="/contact"
                className="btn-primary text-lg px-10 py-4 group"
              >
                Work With Us
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-center space-y-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                      <div className="text-cyan-100">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2021, NextGen CodeX emerged from a simple yet powerful vision: to bridge the gap
                  between innovative technology and real-world business solutions. Based in Sri Lanka, we've
                  grown from a small team of passionate developers to a comprehensive digital solutions provider.
                </p>
                <p>
                  Our journey began when we recognized that many businesses were struggling to adapt to the
                  rapidly evolving digital landscape. We saw an opportunity to help companies not just survive,
                  but thrive in the digital age through custom software solutions.
                </p>
                <p>
                  Today, we specialize in modern website development, mobile applications, and business
                  automation solutions designed to elevate brands and streamline operations for businesses
                  of all sizes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">2021</div>
                <div className="text-gray-600">Company Founded</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">25+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card card-hover p-8 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="card card-hover p-8 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <Link to={member.social.linkedin} className="text-gray-600 hover:text-teal-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">What We Do</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We provide comprehensive digital solutions that help businesses transform their operations
                and achieve their goals in the digital age.
              </p>
              <div className="space-y-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mr-4">
                      {service.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{service.name}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/services"
                className="btn-primary text-lg px-8 py-4"
              >
                Explore Our Services
              </Link>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                {[
                  'Innovative, future-ready tech solutions',
                  'Dedicated client support and transparent communication',
                  'Affordable pricing tailored for growing businesses',
                  'Creative and detail-focused development team',
                  'Proven track record of successful projects',
                  'Ongoing maintenance and support services'
                ].map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            At NextGen CodeX, your success is our mission. Let's build the future — together.
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
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;