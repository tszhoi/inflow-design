export type Category = 'Startup' | 'Crypto' | 'Small Business' | 'Enterprise'

export interface BentoCard {
  id: number
  category: Category[]
  title?: string
  description?: string
  image?: string
  span?: 'wide' | 'tall' | 'normal'
}

