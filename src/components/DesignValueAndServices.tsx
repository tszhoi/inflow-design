import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Globe, Users, Palette, Smartphone, Rocket, Gamepad2, ShoppingCart, Megaphone, TrendingUp } from 'lucide-react'

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

export default function DesignValueAndServices() {
  const [isVisible, setIsVisible] = useState(false)
  const blueCardRef = useRef<HTMLElement | null>(null)
  const cardRefs = useRef<HTMLDivElement[]>([])
  const animationDelays = useMemo(
    () => services.map(() => Math.random() * 1.5),
    []
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (blueCardRef.current) {
      observer.observe(blueCardRef.current)
    }

    return () => {
      if (blueCardRef.current) {
        observer.unobserve(blueCardRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Design Values */}
      <section 
        ref={blueCardRef}
        className="mt-4 py-48 bg-[#3791EF] rounded-xl relative overflow-hidden pb-54" 
        aria-labelledby="values-title"
      >
        {/* Background Circle Pattern */}
        <div className="absolute -top-24 right-8 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-white rounded-full opacity-90"></div>
        
        <div className=" w-auto px-20 text-left relative z-10">
          <div>
            <h2 className="text-xl md:text-2xl font-light mb-8 leading-tighter md:leading-tight title-italic text-gray-50 tracking-tighter">as your design partner</h2>
            <blockquote className="text-2xl md:text-4xl font-medium text-gray-50 tracking-tighter" style={{ lineHeight: '1.5' }}>
              We focus on high-craft design with full flexibility, <br/>and you focus on your business.
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

        {/* Services Cards - Inside Blue Card */}
        <div className="absolute bottom-8 left-0 right-0 px-20 z-20">
          <h2 id="services-title" className="sr-only">Our Services</h2>
          <div className="flex flex-wrap justify-start gap-2">
            {services.map((service, index) => (
              <div 
                key={service.id}
                ref={(el) => {
                  if (el) cardRefs.current[index] = el
                }}
                className={`bg-gradient-to-br from-white/100 to-white/90 rounded-xl px-4 py-4 flex items-center gap-4 w-fit backdrop-blur-md shadow-xs ${
                  isVisible ? 'animate-fall-in' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${1 + animationDelays[index]}s`,
                }}
              >
                <div className="text-blue-500" aria-hidden="true">
                  {service.icon}
                </div>
                <span className="text-blue-500 font-medium text-sm whitespace-nowrap">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

