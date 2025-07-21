import React from 'react'
import { 
  Palette, 
  Smartphone, 
  Rocket, 
  Gamepad2, 
  ShoppingCart, 
  Zap,
  Bitcoin,
  ArrowRight,
  Megaphone,
  Sparkles,
  TrendingUp,
  Check,
  Eye,
  Zap as Lightning,
  Heart,
  Globe,
  Users,
  TrendingUp as Growth
} from 'lucide-react'

interface Project {
  id: number
  title: string
  icon: React.ReactNode
  bgColor: string
  mockupColor: string
}

interface Service {
  id: number
  title: string
  icon: React.ReactNode
}

const projects: Project[] = [
  {
    id: 1,
    title: "Crypto Wallet",
    icon: <Bitcoin className="w-6 h-6" />,
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
    mockupColor: "from-blue-400 to-indigo-500"
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    icon: <Zap className="w-6 h-6" />,
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    mockupColor: "from-green-400 to-emerald-500"
  },
  {
    id: 3,
    title: "E-commerce",
    icon: <ShoppingCart className="w-6 h-6" />,
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    mockupColor: "from-orange-400 to-red-500"
  },
  {
    id: 4,
    title: "Mobile Game",
    icon: <Gamepad2 className="w-6 h-6" />,
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    mockupColor: "from-purple-400 to-pink-500"
  },
  {
    id: 5,
    title: "Startup MVP",
    icon: <Rocket className="w-6 h-6" />,
    bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50",
    mockupColor: "from-teal-400 to-cyan-500"
  },
  {
    id: 6,
    title: "DeFi Interface",
    icon: <Bitcoin className="w-6 h-6" />,
    bgColor: "bg-gradient-to-br from-indigo-50 to-violet-50",
    mockupColor: "from-indigo-400 to-violet-500"
  }
]

const services: Service[] = [
  {
    id: 1,
    title: "UI/UX Design",
    icon: <Palette className="w-4 h-4" />
  },
  {
    id: 2,
    title: "Product Design",
    icon: <Smartphone className="w-4 h-4" />
  },
  {
    id: 3,
    title: "Marketing Design",
    icon: <Megaphone className="w-4 h-4" />
  },
  {
    id: 4,
    title: "Startup Consulting",
    icon: <Rocket className="w-4 h-4" />
  },
  {
    id: 5,
    title: "Growth Marketing",
    icon: <TrendingUp className="w-4 h-4" />
  },
  {
    id: 6,
    title: "Game Development",
    icon: <Gamepad2 className="w-4 h-4" />
  },
  {
    id: 7,
    title: "E-commerce Solutions",
    icon: <ShoppingCart className="w-4 h-4" />
  }
]

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Company Name - Bottom Left */}
      <header className="fixed bottom-4 left-8 z-50">
        <img src="/inflow.svg" alt="Inflow Design Co." className="w-48 h-16" />
      </header>

      {/* Main Content */}
      <main className="pt-8">
        {/* Hero Section */}
        <section className="h-[70vh] flex items-center justify-center px-4" aria-labelledby="hero-title">
          <div className="max-w-3xl mx-auto -mt-20">
            <div className="text-center animate-fade-in">
              <div className="flex justify-center mb-2">
                <img src="/inflowgrey.svg" alt="Inflow Design Co." className="w-48 h-16" />
              </div>
              <h2 id="hero-title" className="text-4xl md:text-6xl font-light mb-4 leading-tighter md:leading-tight title-italic tracking-tighter">
                Crafting design that flows
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-tighter tracking-tighter">design partner for your business</p>
            </div>
          </div>
        </section>

        {/* Project Cards - Pure Visual */}
        <section className="px-4 pb-12 -mt-20" aria-labelledby="projects-title">
          <div className="max-w-7xl mx-auto relative">
            <h2 id="projects-title" className="sr-only">Our Projects</h2>
            <div className="grid grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="space-y-6 -mt-6">
                <article className="group cursor-pointer animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <div className={`aspect-[5/6] ${projects[0].bgColor} rounded-xl p-4 transition-all duration-500 hover:scale-105 hover:shadow-xl`}>
                    {/* UI Mockup */}
                    <div className="h-full flex flex-col">
                      {/* Mockup Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-red-400"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                        <div className="text-xs text-gray-500">{projects[0].title}</div>
                      </div>
                      
                      {/* Mockup Content */}
                      <div className="flex-1 bg-white rounded-lg p-3 shadow-sm">
                        <div className="space-y-2">
                          {/* Header Bar */}
                          <div className="flex items-center justify-between">
                            <div className="w-16 h-2 bg-gray-200 rounded"></div>
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-200 to-gray-300"></div>
                          </div>
                          
                          {/* Content Blocks */}
                          <div className="space-y-1">
                            <div className="w-full h-1 bg-gray-100 rounded"></div>
                            <div className="w-3/4 h-1 bg-gray-100 rounded"></div>
                            <div className="w-1/2 h-1 bg-gray-100 rounded"></div>
                          </div>
                          
                          {/* Action Button */}
                          <div className="pt-1">
                            <div className={`w-12 h-4 rounded bg-gradient-to-r ${projects[0].mockupColor} opacity-80`}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                
                <article className="group cursor-pointer animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <div className={`aspect-[5/6] ${projects[1].bgColor} rounded-xl p-4 transition-all duration-500 hover:scale-105 hover:shadow-xl`}>
                    <div className="h-full flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-red-400"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                        <div className="text-xs text-gray-500">{projects[1].title}</div>
                      </div>
                      <div className="flex-1 bg-white rounded-lg p-3 shadow-sm">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="w-16 h-2 bg-gray-200 rounded"></div>
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-200 to-gray-300"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="w-full h-1 bg-gray-100 rounded"></div>
                            <div className="w-3/4 h-1 bg-gray-100 rounded"></div>
                            <div className="w-1/2 h-1 bg-gray-100 rounded"></div>
                          </div>
                          <div className="pt-1">
                            <div className={`w-12 h-4 rounded bg-gradient-to-r ${projects[1].mockupColor} opacity-80`}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* Middle Column - Lower Position */}
              <div className="space-y-6 pt-8">
                <article className="group cursor-pointer animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <div className={`aspect-[5/6] ${projects[2].bgColor} rounded-xl p-4 transition-all duration-500 hover:scale-105 hover:shadow-xl`}>
                    <div className="h-full flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-red-400"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                        <div className="text-xs text-gray-500">{projects[2].title}</div>
                      </div>
                      <div className="flex-1 bg-white rounded-lg p-3 shadow-sm">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="w-16 h-2 bg-gray-200 rounded"></div>
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-200 to-gray-300"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="w-full h-1 bg-gray-100 rounded"></div>
                            <div className="w-3/4 h-1 bg-gray-100 rounded"></div>
                            <div className="w-1/2 h-1 bg-gray-100 rounded"></div>
                          </div>
                          <div className="pt-1">
                            <div className={`w-12 h-4 rounded bg-gradient-to-r ${projects[2].mockupColor} opacity-80`}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                
                <article className="group cursor-pointer animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <div className={`aspect-[5/6] ${projects[3].bgColor} rounded-xl p-4 transition-all duration-500 hover:scale-105 hover:shadow-xl`}>
                    <div className="h-full flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-red-400"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                        <div className="text-xs text-gray-500">{projects[3].title}</div>
                      </div>
                      <div className="flex-1 bg-white rounded-lg p-3 shadow-sm">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="w-16 h-2 bg-gray-200 rounded"></div>
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-200 to-gray-300"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="w-full h-1 bg-gray-100 rounded"></div>
                            <div className="w-3/4 h-1 bg-gray-100 rounded"></div>
                            <div className="w-1/2 h-1 bg-gray-100 rounded"></div>
                          </div>
                          <div className="pt-1">
                            <div className={`w-12 h-4 rounded bg-gradient-to-r ${projects[3].mockupColor} opacity-80`}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* Right Column */}
              <div className="space-y-6 -mt-6">
                <article className="group cursor-pointer animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <div className={`aspect-[5/6] ${projects[4].bgColor} rounded-xl p-4 transition-all duration-500 hover:scale-105 hover:shadow-xl`}>
                    <div className="h-full flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-red-400"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                        <div className="text-xs text-gray-500">{projects[4].title}</div>
                      </div>
                      <div className="flex-1 bg-white rounded-lg p-3 shadow-sm">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="w-16 h-2 bg-gray-200 rounded"></div>
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-200 to-gray-300"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="w-full h-1 bg-gray-100 rounded"></div>
                            <div className="w-3/4 h-1 bg-gray-100 rounded"></div>
                            <div className="w-1/2 h-1 bg-gray-100 rounded"></div>
                          </div>
                          <div className="pt-1">
                            <div className={`w-12 h-4 rounded bg-gradient-to-r ${projects[4].mockupColor} opacity-80`}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                
                <article className="group cursor-pointer animate-slide-up" style={{ animationDelay: '0.5s' }}>
                  <div className={`aspect-[5/6] ${projects[5].bgColor} rounded-xl p-4 transition-all duration-500 hover:scale-105 hover:shadow-xl`}>
                    <div className="h-full flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-red-400"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                        <div className="text-xs text-gray-500">{projects[5].title}</div>
                      </div>
                      <div className="flex-1 bg-white rounded-lg p-3 shadow-sm">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="w-16 h-2 bg-gray-200 rounded"></div>
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-200 to-gray-300"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="w-full h-1 bg-gray-100 rounded"></div>
                            <div className="w-3/4 h-1 bg-gray-100 rounded"></div>
                            <div className="w-1/2 h-1 bg-gray-100 rounded"></div>
                          </div>
                          <div className="pt-1">
                            <div className={`w-12 h-4 rounded bg-gradient-to-r ${projects[5].mockupColor} opacity-80`}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Client Logos */}
        <section className="px-4 py-16" aria-labelledby="testimonials-title">
          <div className="max-w-4xl mx-auto">
            <h2 id="testimonials-title" className="sr-only">Client Testimonials</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {/* Row 1 (formerly Row 2) */}
              <div className="flex justify-center">
                <img src="/logo05.png" alt="Client Logo" className="h-6" />
              </div>
              
              <div className="flex justify-center">
                <img src="/logo06.png" alt="Client Logo" className="h-8" />
              </div>
              
              <div className="flex justify-center">
                <img src="/logo07.png" alt="Client Logo" className="h-10" />
              </div>
              
              <div className="flex justify-center opacity-70">
                <img src="/logo08.png" alt="Client Logo" className="h-20" />
              </div>

              {/* Row 2 (formerly Row 1) */}
              <div className="flex justify-center">
                <img src="/logo01.png" alt="Client Logo" className="h-6" />
              </div>
              
              <div className="flex justify-center">
                <img src="/logo02.png" alt="Client Logo" className="h-20" />
              </div>
              
              <div className="flex justify-center">
                <img src="/logo03.png" alt="Client Logo" className="h-8" />
              </div>
              
              <div className="flex justify-center">
                <img src="/logo04.png" alt="Client Logo" className="h-24" />
              </div>
            </div>
          </div>
        </section>

        {/* Combined Focus & Services */}
        <section className="px-4 pt-8 pb-32 bg-white" aria-labelledby="focus-title">
          <div className="max-w-4xl mx-auto">
            <h2 id="focus-title" className="text-2xl md:text-4xl font-light mb-16 leading-tighter md:leading-tight title-italic text-gray-800 tracking-tighter">we specialise in</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">0-1 Startups</h3>
                <p className="text-gray-600">Building products from idea to launch</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">AI</h3>
                <p className="text-gray-600">Next-generation AI-powered experiences</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Bitcoin className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Crypto</h3>
                <p className="text-gray-600">DeFi, Web3, and blockchain solutions</p>
              </div>
            </div>

            <h2 id="services-title" className="text-2xl md:text-4xl font-light mb-12 leading-tighter md:leading-tight title-italic text-gray-800 tracking-tighter">and covering everything between</h2>
            <div className="flex flex-wrap gap-8 items-center">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="flex items-center gap-3"
                >
                  <div className="text-gray-600" aria-hidden="true">
                    {service.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{service.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Values */}
        <section className="px-4 py-48 bg-gray-900 relative overflow-hidden" aria-labelledby="values-title">
          {/* Background Circle Pattern */}
          <div className="absolute -bottom-20 -right-60 transform -translate-x-1/2 translate-y-1/2 w-[550px] h-[550px] bg-white rounded-full opacity-90"></div>
          
          <div className="max-w-4xl mx-auto text-left relative z-10">
            <div>
              <h2 className="text-2xl md:text-2xl font-light mb-8 leading-tighter md:leading-tight title-italic text-gray-50 tracking-tighter">as your design partner</h2>
              <blockquote className="text-2xl md:text-4xl font-medium text-gray-50 tracking-tighter" style={{ lineHeight: '1.5' }}>
                High-craft design with full flexibility <br/> You have the time to focus on what matters most
              </blockquote>
              
              <div className="mt-8 flex flex-wrap gap-8 items-center">
                <div className="flex items-center gap-3">
                  <div className="text-gray-200" aria-hidden="true">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="text-gray-200">24/7 Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-gray-200" aria-hidden="true">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-gray-200">Talents from Hong Kong, London, San Francisco, Vancouver</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="px-4 py-16" aria-labelledby="pricing-title">
          <div className="max-w-4xl mx-auto">
            <h2 id="pricing-title" className="text-2xl md:text-4xl font-light mb-8 leading-tighter md:leading-tight title-italic text-gray-800 tracking-tighter">what our pricing looks like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Subscription Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="mb-8">
                  <h3 className="text-2xl font-medium text-gray-800 mb-2">Subscription</h3>
                  <p className="text-gray-600 mb-4">Ongoing design support</p>
                  <div className="mb-4">
                    <span className="text-sm text-gray-500">Starting from</span>
                    <div className="mt-2">
                      <span className="text-4xl font-semibold text-gray-800">$2,500</span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Unlimited design revisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Priority support & communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">UI/UX design & prototyping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Monthly strategy sessions</span>
                  </li>
                </ul>
                
                <button 
                  onClick={() => window.open('mailto:lee@inflowdesign.co?subject=Subscription%20Inquiry')}
                  className="w-full bg-gray-800 text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-700 transition-colors"
                >
                  Get Started
                </button>
              </div>

              {/* Project-Based Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="mb-8">
                  <h3 className="text-2xl font-medium text-gray-800 mb-2">Project-based</h3>
                  <p className="text-gray-600 mb-4">One-time design projects</p>
                  <div className="mb-4">
                    <span className="text-sm text-gray-500">Starting from</span>
                    <div className="mt-2">
                      <span className="text-4xl font-semibold text-gray-800">$5,000</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Component library</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">High-fidelity prototypes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Developer handoff files</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Unlimited revisions during project</span>
                  </li>
                </ul>
                
                <button 
                  onClick={() => window.open('mailto:lee@inflowdesign.co?subject=Project%20Inquiry')}
                  className="w-full bg-gray-800 text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-700 transition-colors"
                >
                  Start Project
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Card Design */}
        <section className="px-48 py-8" aria-labelledby="cta-title">
          <div className="w-full">
            <div className="bg-gray-50 rounded-2xl p-32 text-center">
              <h2 id="cta-title" className="text-2xl md:text-3xl font-light mb-2 leading-tighter md:leading-tight title-italic text-gray-800 tracking-tighter">Let's build together</h2>
              <p className="text-sm text-gray-400 mb-4">start with an intro call - no commitment</p>
              <button 
                onClick={() => window.open('mailto:lee@inflowdesign.co')}
                className="bg-gray-800 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-700 transition-all duration-300 flex items-center gap-3 mx-auto"
                aria-label="Send email to lee@inflowdesign.co"
              >
                Get in touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Minimal */}
      <footer className="py-6 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; 2025 Inflow Design Co.</p>
        </div>
      </footer>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Inflow Design Co.",
          "description": "We design digital experiences that flow. Specializing in product design, UI/UX, and startup consulting for 0-1 companies and crypto projects.",
          "url": "https://inflowdesign.co",
          "logo": "https://inflowdesign.co/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "lee@inflowdesign.co",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://twitter.com/inflowdesign",
            "https://linkedin.com/company/inflow-design"
          ],
          "serviceType": [
            "Product Design",
            "UI/UX Design", 
            "Startup Consulting",
            "Game Development",
            "E-commerce Solutions"
          ],
          "areaServed": "Worldwide",
          "foundingDate": "2025"
        })}
      </script>
    </div>
  )
}

export default App 