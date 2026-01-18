import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="pb-4" aria-labelledby="cta-title">
      <div>
        <div className="w-full bg-gray-50 rounded-2xl p-8 md:p-16 lg:p-32 text-center">
          <h2 id="cta-title" className="text-xl md:text-2xl lg:text-3xl font-light mb-2 leading-tighter md:leading-tight title-italic text-gray-800 tracking-tighter">Let's build together</h2>
          <p className="text-xs md:text-sm text-gray-400 mb-4">start with an intro call - no commitment</p>
          <a
            href="mailto:lee@inflowdesign.co"
            className="bg-gray-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium hover:bg-gray-700 transition-all duration-300 inline-flex items-center gap-2 md:gap-3 mx-auto text-sm md:text-base"
            aria-label="Send email to lee@inflowdesign.co"
          >
            Get in touch - lee@inflowdesign.co
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

