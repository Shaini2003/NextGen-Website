import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Filter } from 'lucide-react';

// ---------------------- PROJECT DATA ----------------------
const projects = [
  // COMPLETED PROJECTS
  {
    id: 1,
    title: 'Dinetha Astrological Website',
    description: 'A personal astrological website to share horoscope insights and services using React and Tailwind CSS.',
    image: 'images/dinetha.png',
    category: 'Web Development',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'FireBase'],
    liveUrl: 'https://dinethaastrological.com/',
    githubUrl: '#',
    featured: true,
    status: 'completed'
  },
  {
    id: 2,
    title: 'Share Taxi Sri Lanka – Tourist Shared Taxi Platform',
    description: 'Sri Lanka’s first shared taxi service designed for tourists.',
    image: 'images/sharetaxi.png',
    category: 'Taxi Service Platform',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'Node.js'],
    liveUrl: 'https://sharetaxisrilanka.com/',
    githubUrl: '#',
    featured: true,
    status: 'completed'
  },
  {
    id: 4,
    title: 'AL Glass (Pvt) Ltd – Premium Glass Solutions Website',
    description: 'Corporate website with product showcases and quote request system.',
    image: 'images/al.png',
    category: 'Business Website',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'Node.js'],
    liveUrl: 'https://alglasspvt.com/',
    githubUrl: '#',
    featured: false,
    status: 'completed'
  },

  // ONGOING PROJECTS
  {
    id: 3,
    title: 'CeyLuxe Journeys – AI-Powered Tourism & Travel Platform',
    description: 'AI-based trip planning system for tourists.',
    image: 'images/cey.png',
    category: 'Travel & Tourism Website',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'Node.js'],
    liveUrl: 'https://tourism-website-ceyluxe-r2pf.vercel.app/',
    githubUrl: '#',
    featured: false,
    status: 'ongoing'
  },
  {
    id: 5,
    title: 'Vengase Lifestyle – Modern Fashion E-Commerce Platform',
    description: 'Fashion e-commerce website with sleek UI.',
    image: 'images/vengase.png',
    category: 'E-Commerce',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'Node.js'],
    liveUrl: 'https://vengase.vercel.app/',
    githubUrl: '#',
    featured: false,
    status: 'ongoing'
  },
  {
    id: 6,
    title: 'Luxiris Gems – Premium Gem & Jewellery E-Commerce Platform',
    description: 'Luxury gem shopping platform with HD showcases.',
    image: 'images/gem.png',
    category: 'E-Commerce',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'Node.js'],
    liveUrl: 'https://gem-site-frontend.vercel.app/',
    githubUrl: '#',
    featured: true,
    status: 'ongoing'
  },
  {
    id: 7,
    title: 'LIMONA – Customizable Fashion E-Commerce Platform',
    description: 'Customizable clothing fashion platform.',
    image: 'images/limona.png',
    category: 'E-Commerce',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    status: 'ongoing'
  },
  {
    id: 8,
    title: 'Ceylon Bliss – AI-Enhanced Travel & Adventure Platform',
    description: 'AI-powered travel planning & adventure booking.',
    image: 'images/b.png',
    category: 'Travel & Tourism Website',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    status: 'ongoing'
  },
];

// Filter categories
const categories = ['All', 'Web Development', 'Mobile App', 'E-Commerce', 'Portfolio', 'Education', 'Healthcare'];


// ---------------------- UI COMPONENT ----------------------
const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFeatured, setShowFeatured] = useState(false);

  const filteredProjects = (statusType: string) =>
    projects.filter((project) => {
      const isCategoryMatch =
        selectedCategory === 'All' || project.category === selectedCategory;

      const isFeaturedMatch = !showFeatured || project.featured;

      return project.status === statusType && isCategoryMatch && isFeaturedMatch;
    });

  const completedProjects = filteredProjects('completed');
  const ongoingProjects = filteredProjects('ongoing');

  const ProjectCard = ({ project, index }) => (
    <div
      key={project.id}
      className="card card-hover overflow-hidden group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {project.category}
        </div>

        {project.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}

        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined, idx: Key | null | undefined) => (
            <span
              key={idx}
              className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          {project.liveUrl !== '#' ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-teal-600 font-medium"
            >
              View Live Project
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          ) : (
            <span className="text-gray-400 font-medium">Coming Soon</span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* ------------------ HERO SECTION ------------------ */}
      <section className="py-32 bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 text-white text-center">
        <h1 className="text-6xl font-bold mb-6">
          Our <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-10">
          Explore digital solutions crafted for businesses across multiple industries.
        </p>
        <Link to="/contact" className="btn-primary px-10 py-4 text-lg">
          Start Your Project
        </Link>
      </section>

      {/* ------------------ FILTER SECTION ------------------ */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-700" />
              <span className="text-lg font-medium">Filter Projects:</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'bg-white border text-gray-700 hover:bg-teal-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <label className="flex items-center space-x-3 mt-6 lg:mt-0 cursor-pointer">
              <input
                type="checkbox"
                checked={showFeatured}
                onChange={() => setShowFeatured(!showFeatured)}
                className="sr-only"
              />
              <div
                className={`w-12 h-6 rounded-full transition-colors ${
                  showFeatured ? 'bg-teal-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow translate-x-${
                    showFeatured ? '6' : '0.5'
                  } mt-0.5 transition-transform`}
                />
              </div>
              <span>Featured Only</span>
            </label>
          </div>

          {/* ------------------ COMPLETED PROJECTS ------------------ */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Completed Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {completedProjects.length > 0 ? (
              completedProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <p>No completed projects found.</p>
            )}
          </div>

          {/* ------------------ ONGOING PROJECTS ------------------ */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ongoing Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjects.length > 0 ? (
              ongoingProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <p>No ongoing projects found.</p>
            )}
          </div>
        </div>
      </section>

      {/* ------------------ STATS SECTION ------------------ */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold">50+</p>
            <p>Projects Completed</p>
          </div>
          <div>
            <p className="text-4xl font-bold">25+</p>
            <p>Happy Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold">8</p>
            <p>Industries Served</p>
          </div>
          <div>
            <p className="text-4xl font-bold">100%</p>
            <p>Success Rate</p>
          </div>
        </div>
      </section>

      {/* ------------------ CTA SECTION ------------------ */}
      <section className="py-32 bg-gray-900 text-center text-white">
        <h2 className="text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-10 text-xl">
          Contact us and let's build something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/contact" className="btn-primary px-10 py-4 text-lg">
            Get Started Today
          </Link>
          <Link to="/services" className="btn-secondary px-10 py-4 text-lg">
            View Our Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
