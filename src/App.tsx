import React from 'react'
import { 
  Palette, 
  Smartphone, 
  Rocket, 
  Gamepad2, 
  ShoppingCart, 
  Zap,
  Bitcoin,
  ArrowRight
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
    title: "Startup Consulting",
    icon: <Rocket className="w-4 h-4" />
  },
  {
    id: 4,
    title: "Game Development",
    icon: <Gamepad2 className="w-4 h-4" />
  },
  {
    id: 5,
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
        <section className="h-[80vh] flex items-center justify-center px-4" aria-labelledby="hero-title">
          <div className="max-w-3xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="flex justify-center mb-4">
                <img src="/inflowgrey.svg" alt="Inflow Design Co." className="w-48 h-16" />
              </div>
              <h2 id="hero-title" className="text-3xl md:text-5xl font-light mb-6 leading-tighter md:leading-tight title-italic tracking-tighter">
                Crafting design that flows
              </h2>
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
              {/* Row 1 */}
              <div className="flex justify-center">
                <span className="text-gray-400 font-medium text-sm">Company A</span>
              </div>
              
              <div className="flex justify-center">
                <span className="text-gray-400 font-medium text-sm">Company B</span>
              </div>
              
              <div className="flex justify-center">
                <span className="text-gray-400 font-medium text-sm">Company C</span>
              </div>
              
              <div className="flex justify-center">
                <span className="text-gray-400 font-medium text-sm">Company D</span>
              </div>

              {/* Row 2 */}
              <div className="flex justify-center">
                <span className="text-gray-400 font-medium text-sm">Company E</span>
              </div>
              
              <div className="flex justify-center">
                <span className="text-gray-400 font-medium text-sm">Company F</span>
              </div>
              
              <div className="flex justify-center">
                <span className="text-gray-400 font-medium text-sm">Company G</span>
              </div>
              
              <div className="flex justify-center">
                <span className="text-gray-400 font-medium text-sm">Company H</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services - With Descriptions */}
        <section className="px-4 py-16" aria-labelledby="services-title">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 id="services-title" className="text-3xl md:text-5xl font-light mb-12 leading-tighter md:leading-tight title-italic text-gray-800 tracking-tighter">Covering everything between</h2>
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
          </div>
        </section>

        {/* CTA - Minimal */}
        <section className="px-4 pb-12" aria-labelledby="cta-title">
          <div className="max-w-2xl mx-auto text-center">
            <h2 id="cta-title" className="sr-only">Get in Touch</h2>
            <button 
              onClick={() => window.open('mailto:lee@inflowdesign.co')}
              className="group bg-gray-800 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 mx-auto"
              aria-label="Send email to lee@inflowdesign.co"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
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