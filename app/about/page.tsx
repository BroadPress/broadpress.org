import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-light text-black mb-8 leading-tight">About BroadPress</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're revolutionizing how newsrooms publish and distribute content across multiple platforms, making
            journalism more efficient and impactful.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-medium text-black mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To empower newsrooms with technology that amplifies their reach while simplifying their workflow. Every
                story deserves to be heard, and every journalist deserves tools that work as hard as they do.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that great journalism shouldn't be limited by technical barriers or time-consuming publishing
                processes.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-medium text-black mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A world where newsrooms can focus entirely on what they do best—telling important stories—while
                technology handles the complexity of multi-platform distribution.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where every news organization, regardless of size, has access to enterprise-grade
                publishing tools.
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
              <h3 className="text-2xl font-serif font-medium text-black mb-4">The Problem We Saw</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Newsrooms were spending more time managing technology than creating content. Journalists were logging
                into multiple dashboards, copying and pasting the same story across different platforms, and losing
                precious hours that could be spent on reporting.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-medium text-black mb-4">Our Solution</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                BroadPress was born from the simple idea that publishing should be as easy as writing. We built a
                platform specifically for newsrooms, designed around their workflows, and optimized for the speed and
                reliability that breaking news demands.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-medium text-black mb-4">Proven Results</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, BIRATINFO and other forward-thinking news organizations use BroadPress to reach wider audiences
                while reducing their publishing time by 75%. Our platform handles millions of page views and ensures
                that important stories reach readers faster than ever before.
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
              <h3 className="text-xl font-serif font-medium text-black mb-4">Journalism First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every feature we build serves the fundamental goal of helping journalists tell better stories and reach
                more people.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-serif font-medium text-black mb-4">Simplicity</h3>
              <p className="text-gray-600 leading-relaxed">
                Complex problems deserve elegant solutions. We believe powerful tools should be intuitive and accessible
                to everyone.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-serif font-medium text-black mb-4">Reliability</h3>
              <p className="text-gray-600 leading-relaxed">
                News doesn't wait. Our platform is built to handle breaking news, high traffic, and the demanding pace
                of modern journalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-light text-black mb-8">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-12">Ready to transform how your newsroom publishes content?</p>
          <Link
            href="/contact"
            className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}
