import { useState, useEffect, useRef } from 'react'
import { MeshGradient } from '@paper-design/shaders-react'
import { Category } from './types'
import { bentoCards } from './data/bentoCards'
import Logo from './components/Logo'
import DesignValueAndServices from './components/DesignValueAndServices'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

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
    const categories: Category[] = ['Startup', 'Crypto', 'Small Business', 'Enterprise']
    let currentIndex = categories.indexOf(selectedCategory)

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % categories.length
      setSelectedCategory(categories[currentIndex])
    }, 5000) // 5 seconds

    return () => clearInterval(interval)
  }, [selectedCategory])

  // Preload all project images on page load for better performance
  useEffect(() => {
    const preloadImages = () => {
      const imageUrls = bentoCards
        .filter(card => card.image)
        .map(card => card.image!)
      
      imageUrls.forEach((imageUrl) => {
        const img = new Image()
        img.src = imageUrl
      })
    }

    // Preload images after a short delay to not block initial render
    const timeout = setTimeout(preloadImages, 100)
    return () => clearTimeout(timeout)
  }, [])

  // Update indicator position for category toggle
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
    
    const timeout = setTimeout(updateIndicator, 0)
    window.addEventListener('resize', updateIndicator)
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('resize', updateIndicator)
    }
  }, [selectedCategory])

  // Filter and sort cards for ProjectShowcase
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
                {(['Startup', 'Crypto', 'Small Business', 'Enterprise'] as Category[]).map((category) => (
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

        <Logo />
        <DesignValueAndServices />
        <Pricing />
        <CTA/>
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
