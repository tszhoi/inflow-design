import React, { useState, useEffect, useRef } from 'react'
import { MeshGradient } from '@paper-design/shaders-react'
import { 
  Palette, 
  Smartphone, 
  Rocket, 
  Gamepad2, 
  ShoppingCart, 
  ArrowRight,
  Megaphone,
  TrendingUp,
  Check,
  Globe,
  Users
} from 'lucide-react'

interface Service {
  id: number
  title: string
  icon: React.ReactNode
}

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

type Category = 'Startup' | 'Crypto' | 'Small Business' | 'Corporate'

interface BentoCard {
  id: number
  category: Category[]
  title?: string
  description?: string
  image?: string
  span?: 'wide' | 'tall' | 'normal'
}

const bentoCards: BentoCard[] = [
  {
    id: 1,
    category: ['Startup'],
    span: 'wide',
    image: '/wavy.png',
  },
  {
    id: 2,
    category: ['Startup'],
    span: 'tall',
    image: '/jupitrr.png',
  },
  {
    id: 3,
    category: ['Small Business'],
    span: 'tall',
  },
  {
    id: 4,
    category: ['Small Business'],
    span: 'wide',
    image: '/brighthome.png',
  },
  {
    id: 5,
    category: ['Small Business'],
    span: 'wide',
    image: '/beautyspace.png',
  },
  {
    id: 6,
    category: ['Crypto'],
    span: 'wide',
    image: '/Coinfrs.png',
  },
  {
    id: 7,
    category: ['Startup'],
    span: 'wide',
    image: '/remotion.png',
  },
  {
    id: 8,
    category: ['Crypto'],
    span: 'tall',
    image: '/gero.png',
  },
  {
    id: 9,
    category: ['Crypto'],
    span: 'wide',
    image: '/buzzup.png',
  },
  {
    id: 10,
    category: ['Corporate'],
    span: 'tall',
  },
  {
    id: 11,
    category: ['Corporate'],
    span: 'wide',
  },
  {
    id: 12,
    category: ['Corporate'],
    span: 'wide',
  },
]

function App() {
  const [showLogo, setShowLogo] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Category>('Startup')
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, height: 0, top: 0 })
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Hero section is 70vh, so show logo when scrolled past that
      const heroHeight = window.innerHeight * 0.7
      setShowLogo(window.scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    // Check initial scroll position
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const categories: Category[] = ['Startup', 'Crypto', 'Small Business', 'Corporate']
    let currentIndex = categories.indexOf(selectedCategory)

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % categories.length
      setSelectedCategory(categories[currentIndex])
    }, 5000) // 5 seconds

    return () => clearInterval(interval)
  }, [selectedCategory])

  useEffect(() => {
    const updateIndicator = () => {
      const button = buttonRefs.current[selectedCategory]
      const container = containerRef.current
      if (button && container) {
        const containerRect = container.getBoundingClientRect()
        const buttonRect = button.getBoundingClientRect()
        setIndicatorStyle({
          left: buttonRect.left - containerRect.left,
          width: buttonRect.width,
          height: buttonRect.height,
          top: buttonRect.top - containerRect.top
        })
      }
    }
    
    // Small delay to ensure buttons are rendered
    const timeout = setTimeout(updateIndicator, 0)
    window.addEventListener('resize', updateIndicator)
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('resize', updateIndicator)
    }
  }, [selectedCategory])

  const filteredCards = bentoCards
    .filter(card => card.category.includes(selectedCategory))
    .sort((a, b) => {
      // Put tall cards first (on the left)
      if (a.span === 'tall' && b.span !== 'tall') return -1
      if (a.span !== 'tall' && b.span === 'tall') return 1
      return 0
    })

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Company Name - Bottom Left */}
      {showLogo && (
        <header className="fixed bottom-4 left-8 z-50">
          <img src="/inflow.svg" alt="Inflow Design Co." className="w-48 h-16 opacity-50" />
        </header>
      )}

      {/* Main Content */}
      <main className="pt-8 px-8">
        {/* Hero Section */}
        <section className="h-[50vh] relative overflow-hidden" aria-labelledby="hero-title">
          {/* Mesh Gradient Background with Content */}
          <div className="absolute inset-0 flex items-center justify-between">
            <MeshGradient 
              speed={0.3} 
              scale={1.20} 
              distortion={0.76} 
              swirl={1} 
              colors={['#CADBEA', '#3791EF', '#4EAEFF']} 
              style={{ 
                borderRadius: '16px', 
                height: '100%', 
                width: '100%',
                maxWidth: '100vw',
                maxHeight: '100vh',
                objectFit: 'cover',
                position: 'absolute',
                inset: 0
              }} 
            />
            <div className="w-full relative px-8 flex justify-start items-center">
              <div className="text-left animate-fade-in">
                <div className="flex justify-start mb-1">
                  <img src="/inflowgrey.svg" alt="Inflow Design Co." className="w-48 h-16 brightness-0 invert" />
                </div>
                <h2 id="hero-title" className="text-3xl text-white md:text-6xl font-sans font-medium mb-4 leading-tighter md:leading-tight tracking-[-0.08em]">
                  Crafting design that flows
                </h2>
                <p className="text-lg leading-tighter text-white tracking-tighter">Design partner for your business</p>
              </div>
            </div>
            
            {/* Country List - Bottom right */}
            <div className="absolute bottom-5 right-5 z-10">
              <p className="text-lg text-white tracking-tighter">Hong Kong, San Francisco, London, Vancouver</p>
            </div>
            
            {/* Category Toggle - Filter Projects - Overlay at bottom left */}
            <div className="absolute bottom-4 left-4 z-10">
              <div 
                ref={containerRef}
                className="relative inline-flex items-center gap-0.5 rounded-full p-1 shadow-sm backdrop-blur-md bg-white/60 border border-gray-200/60" 
                style={{ border: 'none', outline: 'none' }}
              >
                {/* Sliding Indicator */}
                {indicatorStyle.width > 0 && (
                  <div
                    className="absolute bg-white/60 rounded-full transition-all duration-300 ease-out"
                    style={{
                      left: `${indicatorStyle.left}px`,
                      width: `${indicatorStyle.width}px`,
                      height: `${indicatorStyle.height}px`,
                      top: `${indicatorStyle.top}px`
                    }}
                  />
                )}
                {(['Startup', 'Crypto', 'Small Business', 'Corporate'] as Category[]).map((category) => (
                  <button
                    key={category}
                    ref={(el) => (buttonRefs.current[category] = el)}
                    onClick={() => setSelectedCategory(category)}
                    className={`relative px-4 py-1.5 rounded-full font-book text-base transition-colors duration-100 whitespace-nowrap ${
                      selectedCategory === category
                        ? 'text-blue-500'
                        : 'text-gray-400 hover:text-blue-500 hover:bg-gray-50/30'
                    }`}
                    aria-pressed={selectedCategory === category}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid - Project Showcase */}
        <section className="mt-4 mb-8" aria-labelledby="projects-title">
          <div className="mx-auto relative">
            <h2 id="projects-title" className="sr-only">Our Projects</h2>
            
            {/* Bento Grid */}
            {filteredCards.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[250px] md:auto-rows-[350px] relative">
                {filteredCards.map((card) => {
                  const isWide = card.span === 'wide'
                  const isTall = card.span === 'tall'
                  
                  return (
                    <article 
                      key={card.id}
                      className={`group ${isWide ? 'col-span-1 row-span-1' : isTall ? 'col-span-1 row-span-1 md:row-span-2' : 'col-span-1 row-span-1'}`}
                    >
                      <div className="relative bg-gray-100 h-full overflow-hidden rounded-xl">
                        {card.image && card.category.includes(selectedCategory) && (
                          <div className="absolute overflow-hidden left-12 top-10 h-full min-h-full w-auto shadow-xl rounded-lg">
                            <img 
                              src={card.image} 
                              alt={card.title || `Project ${card.id}`}
                              className="w-full object-contain"
                            />
                          </div>
                        )}
                      </div>
                    </article>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-16 text-gray-500">
                <p>No projects found for this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials - Client Logos */}
        <section className="px-4 py-4" aria-labelledby="testimonials-title">
          <div className="mx-auto">
            <h2 id="testimonials-title" className="sr-only">Client Testimonials</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
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

        {/* Services */}
        <section className="px-4 pt-32 pb-32 bg-white" aria-labelledby="services-title">
          <div className="max-w-4xl mt-1 mx-auto">
            <h2 id="services-title" className="sr-only">Our Services</h2>
            <div className="flex flex-wrap justify-center gap-8 items-center">
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
        <section className="py-48 bg-[#3791EF] rounded-xl relative overflow-hidden" aria-labelledby="values-title">
          {/* Background Circle Pattern */}
          <div className="absolute -bottom-20 -right-60 transform -translate-x-1/2 translate-y-1/2 w-[550px] h-[550px] bg-white rounded-full opacity-90"></div>
          
          <div className="max-w-4xl mx-auto text-left relative z-10">
            <div>
              <h2 className="text-xl md:text-2xl font-light mb-8 leading-tighter md:leading-tight title-italic text-gray-50 tracking-tighter">as your design partner</h2>
              <blockquote className="text-2xl md:text-4xl font-medium text-gray-50 tracking-tighter" style={{ lineHeight: '1.5' }}>
                High-craft design with full flexibility <br/> You have the time to focus on what matters most
              </blockquote>
              
              <div className="mt-8 flex flex-wrap gap-8 items-center">
                <div className="flex items-center gap-3">
                  <div className="text-blue-50" aria-hidden="true">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="text-blue-50">24/7 Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-blue-50" aria-hidden="true">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-blue-50">Talents from Hong Kong, London, San Francisco, Vancouver</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="px-4 py-16" aria-labelledby="pricing-title">
          <div className="max-w-4xl mx-auto">
            <h2 id="pricing-title" className="text-xl py-8 md:text-2xl lg:text-3xl font-light mb-2 leading-tighter md:leading-tight title-italic text-gray-800 tracking-tighter">what our pricing looks like</h2>
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
                
                <a 
                  href="mailto:lee@inflowdesign.co?subject=Subscription%20Inquiry"
                  className="w-full bg-gray-800 text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-700 transition-colors inline-block text-center"
                >
                  Get Started
                </a>
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
                  onClick={() => window.open('mailto:lee@inflowdesign.co')}
                  className="w-full bg-gray-800 text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-700 transition-colors"
                >
                  Start Project
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Card Design */}
        <section className="px-4 md:px-8 lg:px-48 py-8" aria-labelledby="cta-title">
          <div className="w-full">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-16 lg:p-32 text-center">
              <h2 id="cta-title" className="text-xl md:text-2xl lg:text-3xl font-light mb-2 leading-tighter md:leading-tight title-italic text-gray-800 tracking-tighter">Let's build together</h2>
              <p className="text-xs md:text-sm text-gray-400 mb-4">start with an intro call - no commitment</p>
              <button 
                onClick={() => window.open('mailto:lee@inflowdesign.co')}
                className="bg-gray-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 md:gap-3 mx-auto text-sm md:text-base"
                aria-label="Send email to lee@inflowdesign.co"
              >
                Get in touch
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Minimal */}
      <footer className="py-6 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; 2025 inflow design co.</p>
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