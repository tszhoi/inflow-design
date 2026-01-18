import { Check } from 'lucide-react'

export default function Pricing() {
  return (
    <section className="py-8" aria-labelledby="pricing-title">
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Subscription Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 w-full md:flex-1">
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
            
            
          </div>

          {/* Project-Based Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 w-full md:flex-1">
            <div className="mb-8">
              <h3 className="text-2xl font-medium text-gray-800 mb-2">Project</h3>
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
            
            
          </div>
        </div>
      </div>
    </section>
  )
}

