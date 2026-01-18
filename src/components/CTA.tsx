import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function CTA() {
  const [copied, setCopied] = useState(false)
  const email = 'lee@inflowdesign.co'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <section className="pb-4" aria-labelledby="cta-title">
      <div>
        <div className="w-full bg-gray-50 rounded-2xl p-8 md:p-16 lg:p-32 text-center">
          <h2 id="cta-title" className="text-xl md:text-2xl lg:text-3xl font-light mb-2 leading-tighter md:leading-tight title-italic text-gray-800 tracking-tighter">Let's build together</h2>
          <p className="text-xs md:text-sm text-gray-400 mb-4">start with an intro call - no commitment</p>
          <button
            onClick={handleCopyEmail}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 inline-flex items-center gap-2 md:gap-3 mx-auto text-sm md:text-base min-w-[280px] md:min-w-[320px] ${
              copied 
                ? 'bg-gray-200 text-gray-800 justify-center' 
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
            aria-label="Copy email address to clipboard" 
          >
            {copied ? 'Copied. Talk soon.' : `Get in touch at ${email}`}
            {copied ? (
              <Check className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" aria-hidden="true" />
            ) : (
              <Copy className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

