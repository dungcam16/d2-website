import React from "react";

// --- MOCK SEO Component ---
// In a real project, you'd use a library like 'react-helmet' to manage head tags.
// For this single-file component, assume TailwindCSS is configured and a font like 'Inter' is loaded in the main HTML file.
const SEO = ({ title, description, keywords, canonicalUrl, structuredData }) => {
  // This is a placeholder for SEO data. In a real Next.js or Gatsby app, this would modify the document head.
  console.log("SEO Data:", { title, description, keywords, canonicalUrl });
  return <script type="application/ld+json">{JSON.stringify(structuredData, null, 2)}</script>;
};

// --- SVG Icons (Self-contained components) ---
const CheckCircleIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ArrowRightIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CodeIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const DatabaseIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const BrainCircuitIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2a10 10 0 0 0-4.3 19.42" />
    <path d="M12 2a10 10 0 0 1 4.3 19.42" />
    <path d="M2.5 13.5a10 10 0 0 1 19 0" />
    <path d="M12 22a10 10 0 0 1-10-10" />
    <path d="M12 22a10 10 0 0 0 10-10" />
    <path d="M12 2v20" />
    <path d="M2 13.5h20" />
    <path d="M18 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    <path d="M10 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    <path d="M6 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    <path d="M18 18a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" />
  </svg>
);

// --- Page Components (All in one file) ---

const Header = () => (
  <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-800">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-white">
        D2 <span className="text-blue-400">Group</span>
      </div>
      <nav className="hidden md:flex space-x-8 text-slate-300">
        <a href="#services" className="hover:text-blue-400 transition-colors">
          Services
        </a>
        <a href="#process" className="hover:text-blue-400 transition-colors">
          Process
        </a>
        <a href="#pricing" className="hover:text-blue-400 transition-colors">
          Pricing
        </a>
        <a href="#contact" className="hover:text-blue-400 transition-colors">
          Contact
        </a>
      </nav>
      <a
        href="#contact"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-transform hover:scale-105 shadow-lg shadow-blue-600/20"
      >
        Get a Quote
      </a>
    </div>
  </header>
);

const HeroNew = () => (
  <section className="bg-slate-900 text-white py-20 md:py-32">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
        From Idea to Market-Ready AI-Powered SaaS
      </h1>
      <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
        We build scalable, high-performance SaaS applications using React, Node.js, and Supabase, infused with powerful
        AI capabilities to give you a competitive edge.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105 shadow-lg shadow-blue-600/30"
        >
          Schedule a Free Consultation
        </a>
        <a
          href="#case-studies"
          className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105"
        >
          View Our Work
        </a>
      </div>
    </div>
  </section>
);

const TrustBar = () => (
  <div className="bg-slate-800 py-8 border-y border-slate-700">
    <div className="container mx-auto px-6">
      <p className="text-center text-slate-400 text-sm font-semibold tracking-widest uppercase mb-6">
        Powering Innovation with an Elite Tech Stack
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-4">
        {["React", "Node.js", "Supabase", "Next.js", "OpenAI", "Vercel", "AWS", "TypeScript"].map((tech) => (
          <span key={tech} className="text-slate-300 font-mono text-lg">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProblemSolution = () => (
  <section className="py-20 bg-slate-900 text-slate-300">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">Stuck Between a Great Idea and a Flawless Execution?</h2>
        <p className="mb-6">
          Launching a SaaS product involves navigating a minefield of challenges: technical debt, scalability
          nightmares, slow time-to-market, and the daunting task of integrating meaningful AI.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircleIcon className="text-blue-400 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
            <span>
              Finding a cohesive, full-stack team that masters both product architecture and cutting-edge AI is a major
              bottleneck.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="text-blue-400 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
            <span>
              Building a scalable, secure, and maintainable architecture from day one is non-negotiable but often
              overlooked.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="text-blue-400 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
            <span>
              AI integration should be a core value driver, not a complex, tacked-on feature that fails to deliver.
            </span>
          </li>
        </ul>
      </div>
      <div className="bg-slate-800 p-8 rounded-xl shadow-2xl border border-slate-700">
        <h3 className="text-2xl font-bold text-blue-400 mb-4">Your End-to-End SaaS Development Partner</h3>
        <p className="text-slate-300">
          D2 Group operates as your dedicated technical co-founder. We architect and execute the entire development
          lifecycle—from strategy and UI/UX to a fully deployed, scalable, and AI-native SaaS platform. We build it
          right, so you can focus on conquering your market.
        </p>
      </div>
    </div>
  </section>
);

const ServicesNew = () => (
  <section id="services" className="py-20 bg-slate-800">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">Our In-Depth SaaS Development Services</h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          We provide a comprehensive suite of services to architect, build, and scale your product.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-slate-900 p-8 rounded-lg shadow-lg border border-slate-700">
          <CodeIcon className="w-12 h-12 text-blue-400 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Full-Stack Engineering</h3>
          <p className="text-slate-400">
            We build responsive, high-performance frontends with React & Next.js, and create robust, secure, and
            scalable backends with Node.js, ensuring a clean, maintainable codebase for future growth.
          </p>
        </div>
        <div className="bg-slate-900 p-8 rounded-lg shadow-lg border border-slate-700">
          <DatabaseIcon className="w-12 h-12 text-blue-400 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Supabase & Database Architecture</h3>
          <p className="text-slate-400">
            We leverage Supabase for rapid development of auth, storage, and real-time capabilities. Our experts design
            efficient, scalable data models that grow with your user base without compromising performance.
          </p>
        </div>
        <div className="bg-slate-900 p-8 rounded-lg shadow-lg border border-slate-700">
          <BrainCircuitIcon className="w-12 h-12 text-blue-400 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Custom AI & LLM Integration</h3>
          <p className="text-slate-400">
            Elevate your product with intelligent features. We integrate custom AI workflows, develop advanced RAG
            systems with GPT-4/Claude, and implement data analysis tools to make your SaaS truly smart.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const TemplateLibrary = () => (
  <section className="py-20 bg-slate-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">Build Powerful, Market-Defining Features</h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          We don't just build apps; we engineer experiences. Here are some of the advanced features we can build for
          you.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-2">AI-Powered Analytics Dashboards</h3>
          <p className="text-slate-400">
            Transform raw data into actionable insights with dashboards that allow users to ask questions in natural
            language.
          </p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-2">Real-time Collaborative Workspaces</h3>
          <p className="text-slate-400">
            Build Google Docs-style applications where users can collaborate seamlessly on documents, designs, or
            projects.
          </p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-2">Automated Subscription & Billing</h3>
          <p className="text-slate-400">
            Integrate Stripe or other payment gateways to handle complex subscription tiers, metered usage, and
            automated invoicing.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const CaseStudySpotlight = () => (
  <section id="case-studies" className="py-20 bg-slate-800">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">Real-World Success Stories</h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          See how we've helped companies like yours launch and scale their SaaS products.
        </p>
      </div>
      <div className="bg-slate-900 rounded-xl overflow-hidden md:flex items-center shadow-lg border border-slate-700">
        <div className="md:w-1/2 p-8 md:p-12">
          <p className="text-blue-400 font-semibold mb-2">InnovateTech</p>
          <h3 className="text-3xl font-bold text-white mb-4">
            Scaling a B2B Analytics Platform from MVP to Enterprise-Ready
          </h3>
          <p className="text-slate-300 mb-6">
            InnovateTech needed to rebuild their MVP to handle enterprise-level traffic and complex data visualizations.
            We engineered a scalable backend on Node.js, a dynamic frontend with React, and integrated a real-time data
            pipeline with Supabase, resulting in a 300% performance increase and a 40% reduction in churn.
          </p>
          <a href="#" className="font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-2">
            Read the Full Case Study <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
        <div
          className="md:w-1/2 h-64 md:h-auto bg-cover bg-center"
          style={{ backgroundImage: "url('https://placehold.co/800x600/1e293b/38bdf8?text=Analytics+Dashboard')" }}
        ></div>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-20 bg-slate-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white">Our Agile & Transparent Development Process</h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          From concept to launch and beyond, we ensure clarity, collaboration, and exceptional results at every stage.
        </p>
      </div>
      <div className="relative">
        <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-700"></div>
        <div className="grid md:grid-cols-6 gap-8 text-center relative">
          {[
            { num: 1, title: "Discovery & Strategy" },
            { num: 2, title: "Architecture & UI/UX" },
            { num: 3, title: "Agile Sprints" },
            { num: 4, title: "AI Model Integration" },
            { num: 5, title: "Rigorous QA & Testing" },
            { num: 6, title: "Deployment & Scaling" },
          ].map((step) => (
            <div key={step.num} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-blue-500 flex items-center justify-center text-blue-400 text-2xl font-bold mb-4 z-10 shadow-lg">
                {step.num}
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsNew = () => (
  <section className="py-20 bg-slate-800">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">What Our Clients Say</h2>
        <p className="text-slate-400 mt-4">We are proud to be the technical engine behind their success.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
          <p className="text-slate-300 italic mb-6">
            "D2 Group transformed our MVP into a full-fledged, scalable SaaS platform. Their expertise in both React and
            Node.js is exceptional. They are not just coders; they are true product partners who genuinely cared about
            our success."
          </p>
          <div>
            <p className="font-bold text-white">Jane Doe, CEO</p>
            <p className="text-blue-400">InnovateTech</p>
          </div>
        </div>
        <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
          <p className="text-slate-300 italic mb-6">
            "The AI features D2 Group integrated have become our main selling point. They understood our business needs
            and delivered a technical solution that provided immense value to our customers. The RAG system they built
            is flawless."
          </p>
          <div>
            <p className="font-bold text-white">John Smith, Founder</p>
            <p className="text-blue-400">DataWize</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-20 bg-slate-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">Flexible Pricing for Every Stage</h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          We offer clear, value-driven pricing models to fit your project needs.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        <div className="bg-slate-800 border border-slate-700 p-8 rounded-xl shadow-lg flex flex-col">
          <h3 className="text-2xl font-bold text-blue-400 mb-2">MVP Launch</h3>
          <p className="text-slate-400 mb-6 flex-grow">
            Perfect for startups to quickly validate an idea and launch a core product.
          </p>
          <p className="text-4xl font-bold text-white mb-6">Starts at $15k</p>
          <ul className="space-y-3 text-slate-300 mb-8">
            <li className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 mr-3 text-blue-400" />
              Core Feature Development
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 mr-3 text-blue-400" />
              UI/UX Implementation
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 mr-3 text-blue-400" />
              Database & Auth Setup
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 mr-3 text-blue-400" />
              Cloud Deployment
            </li>
          </ul>
          <a
            href="#contact"
            className="mt-auto w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Get a Custom Quote
          </a>
        </div>
        <div className="bg-blue-600 p-8 rounded-xl shadow-2xl ring-4 ring-blue-500 flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-2">Growth Tier</h3>
          <p className="text-blue-100 mb-6 flex-grow">
            For established businesses looking to scale, add features, and integrate AI.
          </p>
          <p className="text-4xl font-bold text-white mb-6">Project-Based</p>
          <ul className="space-y-3 text-blue-50 mb-8">
            <li className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 mr-3 text-white" />
              Everything in MVP Launch
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 mr-3 text-white" />
              Advanced Feature Modules
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 mr-3 text-white" />
              AI & LLM Integration
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 mr-3 text-white" />
              Scalability Consulting
            </li>
          </ul>
          <a
            href="#contact"
            className="mt-auto w-full text-center bg-white hover:bg-blue-100 text-blue-700 font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Book a Strategy Call
          </a>
        </div>
        <div className="bg-slate-800 border border-slate-700 p-8 rounded-xl shadow-lg flex flex-col">
          <h3 className="text-2xl font-bold text-blue-400 mb-2">Dedicated Team</h3>
          <p className="text-slate-400 mb-6 flex-grow">
            A full-time, dedicated development team for ongoing projects and support.
          </p>
          <p className="text-4xl font-bold text-white mb-6">Monthly Retainer</p>
          <ul className="space-y-3 text-slate-300 mb-8">
            <li className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 mr-3 text-blue-400" />
              Full Development Team
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 mr-3 text-blue-400" />
              Product Management
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 mr-3 text-blue-400" />
              Continuous Development
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 mr-3 text-blue-400" />
              Priority Support
            </li>
          </ul>
          <a
            href="#contact"
            className="mt-auto w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Inquire About Retainers
          </a>
        </div>
      </div>
    </div>
  </section>
);

const BlogInsights = () => (
  <section className="py-20 bg-slate-800">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">From Our Blog</h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Insights on SaaS development, AI integration, and scaling your tech startup.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
          <div className="p-6">
            <p className="text-sm text-blue-400 mb-2">SaaS Strategy</p>
            <h3 className="text-xl font-bold text-white mb-4">5 Mistakes to Avoid When Building Your First SaaS MVP</h3>
            <a href="#" className="font-semibold text-white hover:text-blue-400 transition-colors">
              Read More &rarr;
            </a>
          </div>
        </div>
        <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
          <div className="p-6">
            <p className="text-sm text-blue-400 mb-2">AI Integration</p>
            <h3 className="text-xl font-bold text-white mb-4">How RAG Can Revolutionize Your SaaS Product's UX</h3>
            <a href="#" className="font-semibold text-white hover:text-blue-400 transition-colors">
              Read More &rarr;
            </a>
          </div>
        </div>
        <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
          <div className="p-6">
            <p className="text-sm text-blue-400 mb-2">Tech Stack</p>
            <h3 className="text-xl font-bold text-white mb-4">
              Why We Chose Supabase Over Firebase for Our New Projects
            </h3>
            <a href="#" className="font-semibold text-white hover:text-blue-400 transition-colors">
              Read More &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-slate-900">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-white">Let's Build Your Next SaaS Product</h2>
        <p className="text-slate-400 mt-4 mb-8">
          Have an idea or an existing project that needs expertise? Reach out to us for a free, no-obligation
          consultation.
        </p>
        <div className="bg-slate-800 p-8 md:p-12 rounded-xl shadow-2xl text-left border border-slate-700">
          <form>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-slate-300 mb-2 font-semibold">
                Tell us about your project
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Send Inquiry <ArrowRightIcon className="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
    <div className="container mx-auto px-6 py-8 text-center">
      <p>&copy; {new Date().getFullYear()} D2 Group. All Rights Reserved.</p>
      <p className="text-sm text-slate-500">Your Partner in AI-Powered SaaS Development.</p>
    </div>
  </footer>
);

// --- Main App Component ---
// This is the final component that assembles the entire page.
const SaasLandingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "SaaS Product Development",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Full-stack SaaS application development with React, Node.js, Supabase, and custom AI capabilities. We take your idea from concept to a scalable, market-ready product.",
    areaServed: {
      "@type": "Place",
      name: "Global - US, Australia, Europe",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SaaS Development Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full-Stack Development (React, Node.js)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Supabase Integration & Backend Architecture" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & RAG System Integration" } },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-100">
      <SEO
        title="AI-Powered SaaS Development | D2 Group | React, Node.js, Supabase"
        description="Expert full-stack SaaS development agency. We build scalable applications with React, Node.js, Supabase, and custom AI integrations for startups and enterprises."
        keywords="SaaS development, full-stack agency, React developer, Node.js development, Supabase expert, AI integration, LLM developer, product development, software agency"
        canonicalUrl="/saas-development"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <HeroNew />
        <TrustBar />
        <ProblemSolution />
        <ServicesNew />
        <TemplateLibrary />
        <CaseStudySpotlight />
        <Process />
        <TestimonialsNew />
        <Pricing />
        <BlogInsights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default SaasLandingPage;
