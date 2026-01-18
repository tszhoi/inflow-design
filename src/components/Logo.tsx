export default function Logo() {
  return (
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
  )
}

