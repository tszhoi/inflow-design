import React from 'react'
import { Category, BentoCard } from '../types'

interface ProjectShowcaseProps {
  selectedCategory: Category
  bentoCards: BentoCard[]
}

export default function ProjectShowcase({ selectedCategory, bentoCards }: ProjectShowcaseProps) {
  const filteredCards = bentoCards
    .filter(card => card.category.includes(selectedCategory))
    .sort((a, b) => {
      // Put tall cards first (on the left)
      if (a.span === 'tall' && b.span !== 'tall') return -1
      if (a.span !== 'tall' && b.span === 'tall') return 1
      return 0
    })

  return (
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
  )
}

