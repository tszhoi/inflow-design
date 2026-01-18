import React, { useState, useEffect, useRef } from 'react'
import { MeshGradient } from '@paper-design/shaders-react'
import { Category } from '../types'

interface HeroProps {
  selectedCategory: Category
  onCategoryChange: (category: Category) => void
}

export default function Hero({ selectedCategory, onCategoryChange }: HeroProps) {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, height: 0, top: 0 })
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  const containerRef = useRef<HTMLDivElement | null>(null)

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

  return (
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
                onClick={() => onCategoryChange(category)}
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
  )
}

