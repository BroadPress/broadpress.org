import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-light text-black mb-8 leading-tight">About BroadPress</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We’re transforming how enterprises build, manage, and publish dynamic websites, making content management faster, scalable, and more efficient.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 mr-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                  <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76" strokeWidth="1.5" />
                </svg>
                <h2 className="text-3xl font-serif font-medium text-black">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To empower enterprises with technology that simplifies website management, accelerates content delivery, and ensures consistent, high-quality digital presence.

              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that great business content shouldn’t be limited by technical barriers or time-consuming publishing processes.

              </p>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 mr-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
                </svg>
                <h2 className="text-3xl font-serif font-medium text-black">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A world where enterprises can focus entirely on creating impactful content while technology handles the complexity of website management and dynamic publishing.

              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where every business, regardless of size, has access to powerful, enterprise-grade content management tools.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-light text-black mb-12 text-center">The BroadPress Story</h2>

          <div className="space-y-12">
            <div>
              <div className="flex items-center mb-4">
                <svg className="w-7 h-7 mr-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                    strokeWidth="1.5"
                  />
                  <line x1="12" y1="9" x2="12" y2="13" strokeWidth="1.5" />
                  <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="1.5" />
                </svg>
                <h3 className="text-2xl font-serif font-medium text-black">The Problem We Saw</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Enterprises were spending more time managing website technology than creating and sharing content. Teams struggled with multiple dashboards, repetitive updates, and complex workflows, losing valuable time that could be spent on business growth.

              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <svg className="w-7 h-7 mr-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21h6" strokeWidth="1.5" />
                  <path d="M12 17v4" strokeWidth="1.5" />
                  <path d="M12 3a6 6 0 0 1 6 6c0 2-3 2.5-3 5H9c0-2.5-3-3-3-5a6 6 0 0 1 6-6z" strokeWidth="1.5" />
                </svg>
                <h3 className="text-2xl font-serif font-medium text-black">Our Solution</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                BroadPress was created with a simple goal: managing and publishing website content should be as easy as creating it. We built a platform specifically for businesses, with a component-based architecture, pre-structured templates, and optimized performance for dynamic, enterprise-grade websites.

              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <svg className="w-7 h-7 mr-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" strokeWidth="1.5" />
                  <polyline points="17,6 23,6 23,12" strokeWidth="1.5" />
                </svg>
                <h3 className="text-2xl font-serif font-medium text-black">Proven Results</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, forward-thinking companies use BroadPress to streamline content management, reduce website update time by 90%, and deliver a faster, more consistent digital experience. BroadPress powers dynamic websites with global reach, ensuring businesses connect with their audiences efficiently and effectively.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-light text-black mb-16 text-center">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                    strokeWidth="1.5"
                  />
                  <path d="M18 14h-8" strokeWidth="1.5" />
                  <path d="M15 18h-5" strokeWidth="1.5" />
                  <path d="M10 6h8v4h-8V6z" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-black mb-4">Content First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every feature we build serves the fundamental goal of helping businesses create, manage, and share content efficiently.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3" strokeWidth="1.5" />
                  <path d="M21 8h-3a2 2 0 0 1-2-2V3" strokeWidth="1.5" />
                  <path d="M3 16h3a2 2 0 0 1 2 2v3" strokeWidth="1.5" />
                  <path d="M16 21v-3a2 2 0 0 1 2-2h3" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-black mb-4">Simplicity</h3>
              <p className="text-gray-600 leading-relaxed">
                Complex workflows deserve elegant solutions. We believe powerful tools should be intuitive, clean, and easy to use for everyone.

              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1.5" />
                  <path d="M9 12l2 2 4-4" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-black mb-4">Reliability</h3>
              <p className="text-gray-600 leading-relaxed">
                Business content can’t wait. BroadPress is built to handle high traffic, dynamic updates, and the fast pace of modern digital operations.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-light text-black mb-8">Join BroadPress</h2>
          <p className="text-xl text-gray-600 mb-12">Ready to transform how your enterprise manages and publishes content!</p>
          <Link
            href="/contact"
            className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Get Free Counsultation
          </Link>
        </div>
      </section>
    </div>
  )
}
