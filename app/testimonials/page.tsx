import Link from "next/link"

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-light text-black mb-8 leading-tight">
            What Newsrooms Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how news organizations around the world are transforming their publishing workflows with BroadPress.
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl font-serif font-light text-black mb-8 leading-relaxed">
            "BroadPress reduced our publishing time from 3 hours to 15 minutes. We can now focus on what we do best—
            telling important stories."
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gray-300 mr-4 overflow-hidden">
              <img src="/jacob-benhard-headshot.png" alt="Jacob Benhard" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-medium text-black">Jacob Benhard</p>
              <p className="text-gray-600">Editor-in-Chief, Jasper Times Daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200">
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "The multi-network publishing feature is a game-changer. We publish to 12 different sites with one
                click."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 overflow-hidden flex-shrink-0">
                  <img src="/sarah-chen-digital-director-headshot.png" alt="Sarah Chen" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-black">Sarah Chen</p>
                  <p className="text-gray-600 text-sm">Digital Director, Metro News Network</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "Our editorial team was up and running in 24 hours. The interface is intuitive and built for
                journalists."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 overflow-hidden flex-shrink-0">
                  <img
                    src="/michael-rodriguez-headshot.png"
                    alt="Michael Rodriguez"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-black">Michael Rodriguez</p>
                  <p className="text-gray-600 text-sm">Managing Editor, Valley Tribune</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "The real-time analytics help us understand our audience better and make data-driven editorial
                decisions."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 overflow-hidden flex-shrink-0">
                  <img src="/emily-watson-analytics-manager-headshot.png" alt="Emily Watson" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-black">Emily Watson</p>
                  <p className="text-gray-600 text-sm">Analytics Manager, City Herald</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "Security was our biggest concern. BroadPress's military-grade encryption gives us complete peace of
                mind."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 overflow-hidden flex-shrink-0">
                  <img src="/david-park-cto-headshot.png" alt="David Park" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-black">David Park</p>
                  <p className="text-gray-600 text-sm">CTO, Regional Media Group</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "We've increased our publishing speed by 300% while maintaining quality. Our readers get news faster
                than ever."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 overflow-hidden flex-shrink-0">
                  <img src="/lisa-thompson-publisher-headshot.png" alt="Lisa Thompson" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-black">Lisa Thompson</p>
                  <p className="text-gray-600 text-sm">Publisher, Independent Daily</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "The migration from WordPress was seamless. Zero downtime, zero lost content. Impressive support team."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 overflow-hidden flex-shrink-0">
                  <img src="/james-wilson-headshot.png" alt="James Wilson" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-black">James Wilson</p>
                  <p className="text-gray-600 text-sm">Technical Director, News Collective</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-light text-black mb-16 text-center">Jasper Times Daily Case Study</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif font-medium text-black mb-4">The Challenge</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Jasper Times Daily was managing 8 different news websites manually, spending 3+ hours per story to
                publish across all platforms. Their editorial team was frustrated with the repetitive work, and breaking
                news often reached audiences hours later than competitors.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-medium text-black mb-4">The Solution</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                BroadPress integrated all 8 websites into one unified dashboard. Stories could be published
                simultaneously across all platforms with customized formatting for each site's audience and design.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-medium text-black mb-4">The Results</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-serif font-light text-black mb-2">75%</div>
                  <p className="text-gray-600">Reduction in publishing time</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif font-light text-black mb-2">3x</div>
                  <p className="text-gray-600">Faster breaking news delivery</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif font-light text-black mb-2">40%</div>
                  <p className="text-gray-600">Increase in overall readership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-light text-black mb-8">Join These Success Stories</h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to transform your newsroom's publishing workflow like these organizations?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Start Your Success Story
            </Link>
            <Link
              href="/pricing"
              className="border border-gray-300 text-black px-8 py-4 text-lg font-medium hover:border-black transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
