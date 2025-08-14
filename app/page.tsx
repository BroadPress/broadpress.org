import Link from "next/link"

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-black mb-8 leading-tight">
            The WordPress Alternative for Multi-Network News Publishing
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Revolutionizing how newsrooms publish and distribute content across multiple platforms from one central hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/how-it-works"
              className="border border-gray-300 text-black px-8 py-4 text-lg font-medium hover:border-black transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">Trusted By</p>
          <div className="text-2xl font-serif font-medium text-gray-800">BIRATINFO</div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-black mb-16 text-center">
            Why BroadPress Outperforms Traditional CMS Platforms
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-serif font-medium text-black mb-4">One Article, Many Platforms</h3>
              <p className="text-gray-600 leading-relaxed">
                Publish a single news story across all your connected networks instantly.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-serif font-medium text-black mb-4">Centralized Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Edit, update, and manage all platforms from one unified dashboard.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-serif font-medium text-black mb-4">Optimized for Newsrooms</h3>
              <p className="text-gray-600 leading-relaxed">
                Interfaces and workflows designed with editorial teams in mind.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-serif font-medium text-black mb-4">Real-Time Sync</h3>
              <p className="text-gray-600 leading-relaxed">Instant content updates across every platform.</p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-serif font-medium text-black mb-4">Scalable Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed">Handles rapid growth without performance drops.</p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-serif font-medium text-black mb-4">Enterprise Security</h3>
              <p className="text-gray-600 leading-relaxed">Military-grade encryption and biometric authentication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-black mb-16 text-center">Core Features</h2>

          <div className="space-y-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-serif font-medium text-black mb-6">Smart Publishing</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Remove the guesswork from news management. BroadPress learns and adapts to your newsroom's pace,
                  keeping your content pipeline efficient and timely.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>• Intelligent Categorization</li>
                  <li>• Customizable Workflows</li>
                  <li>• Predictive Analysis</li>
                </ul>
              </div>
              <div className="bg-white p-8 border border-gray-200">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-500">Smart Publishing Dashboard</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-8 border border-gray-200">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500">Content Distribution Interface</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-serif font-medium text-black mb-6">Seamless Content Distribution</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Publishing to multiple platforms has never been easier. BroadPress ensures your news reaches audiences
                  everywhere, without requiring technical expertise.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>• Micro-Publishing</li>
                  <li>• Expert Templates</li>
                  <li>• Real-Time Analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-black mb-8">
            Ready to Transform Your Newsroom?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Join BIRATINFO and discover how BroadPress can streamline your publishing workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/vs-wordpress"
              className="border border-gray-300 text-black px-8 py-4 text-lg font-medium hover:border-black transition-colors"
            >
              Compare with WordPress
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
