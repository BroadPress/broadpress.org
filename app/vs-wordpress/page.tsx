import Link from "next/link"

export default function VsWordPressPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-light text-black mb-8 leading-tight">
            BroadPress vs WordPress
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See why newsrooms are choosing BroadPress over WordPress for multi-network publishing. A detailed comparison
            of features, performance, and newsroom-specific capabilities.
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-light text-black mb-16 text-center">The Key Differences</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 border-2 border-black">
              <h3 className="text-2xl font-serif font-medium text-black mb-6">BroadPress</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Built specifically for multi-network news publishing
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  One-click publishing to all connected networks
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Real-time sync across all platforms
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Built-in editorial workflow tools
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Military-grade security with biometric authentication
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Optimized for high-traffic news sites
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-gray-300">
              <h3 className="text-2xl font-serif font-medium text-black mb-6">WordPress</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">×</span>
                  General-purpose CMS for all website types
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">×</span>
                  Requires multiple plugins or manual posting
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">×</span>
                  Manual sync or scheduled updates
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">×</span>
                  Requires 3rd-party plugins for editorial features
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">×</span>
                  Relies on hosting security and plugins
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">×</span>
                  Performance depends on hosting and optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-light text-black mb-16 text-center">Feature-by-Feature Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-left py-4 px-6 font-serif text-xl font-medium text-black">
                    Feature / Capability
                  </th>
                  <th className="text-center py-4 px-6 font-serif text-xl font-medium text-black">BroadPress</th>
                  <th className="text-center py-4 px-6 font-serif text-xl font-medium text-black">WordPress</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Purpose-Built for Newsrooms</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-black font-medium">✓ Yes</span>
                    <div className="text-sm text-gray-500">Designed exclusively for multi-network news publishing</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-gray-400">× No</span>
                    <div className="text-sm text-gray-500">General-purpose CMS for all types of websites</div>
                  </td>
                </tr>

                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-medium">Multi-Network Publishing</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-black font-medium">✓ Yes</span>
                    <div className="text-sm text-gray-500">One-click publish to all connected news networks</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-gray-400">× No</span>
                    <div className="text-sm text-gray-500">Requires multiple plugins or manual posting</div>
                  </td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Centralized Content Management</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-black font-medium">✓ Yes</span>
                    <div className="text-sm text-gray-500">Single dashboard to manage all sites</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-yellow-600">⚠ Possible</span>
                    <div className="text-sm text-gray-500">Possible with complex multisite setup</div>
                  </td>
                </tr>

                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-medium">Real-Time Sync</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-black font-medium">✓ Yes</span>
                    <div className="text-sm text-gray-500">Instant updates across all platforms</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-gray-400">× No</span>
                    <div className="text-sm text-gray-500">Manual sync or scheduled updates</div>
                  </td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Editorial Workflow Tools</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-black font-medium">✓ Yes</span>
                    <div className="text-sm text-gray-500">
                      Built-in approval flows, category tagging, and team roles
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-yellow-600">⚠ Possible</span>
                    <div className="text-sm text-gray-500">Requires 3rd-party plugins</div>
                  </td>
                </tr>

                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-medium">Performance Optimization</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-black font-medium">✓ Yes</span>
                    <div className="text-sm text-gray-500">Cloud-hosted, optimized for high-traffic news sites</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-yellow-600">⚠ Depends</span>
                    <div className="text-sm text-gray-500">Depends on hosting and optimization setup</div>
                  </td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Security</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-black font-medium">✓ Yes</span>
                    <div className="text-sm text-gray-500">Military-grade encryption + biometric authentication</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-yellow-600">⚠ Depends</span>
                    <div className="text-sm text-gray-500">Relies on hosting security & plugins</div>
                  </td>
                </tr>

                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-medium">Analytics</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-black font-medium">✓ Yes</span>
                    <div className="text-sm text-gray-500">Integrated real-time analytics dashboard</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-gray-400">× No</span>
                    <div className="text-sm text-gray-500">Requires external tools (Google Analytics, etc.)</div>
                  </td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Ease of Use for Newsrooms</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-black font-medium">✓ Yes</span>
                    <div className="text-sm text-gray-500">Minimal learning curve for editorial teams</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-yellow-600">⚠ Complex</span>
                    <div className="text-sm text-gray-500">Requires training and customization</div>
                  </td>
                </tr>

                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-medium">Scalability</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-black font-medium">✓ Yes</span>
                    <div className="text-sm text-gray-500">Built for rapid audience growth and high traffic</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-yellow-600">⚠ Possible</span>
                    <div className="text-sm text-gray-500">Possible with advanced hosting setup</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-light text-black mb-16 text-center">When to Choose Each Platform</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-medium text-black mb-6">Choose BroadPress If You:</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-black mr-3">•</span>
                  Run multiple news websites or networks
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">•</span>
                  Need to publish the same story across multiple platforms
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">•</span>
                  Want to reduce publishing time and complexity
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">•</span>
                  Require enterprise-grade security and performance
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">•</span>
                  Need built-in editorial workflow tools
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">•</span>
                  Want real-time analytics and insights
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-medium text-black mb-6">Choose WordPress If You:</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  Run a single website or blog
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  Need a general-purpose content management system
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  Have extensive technical resources for customization
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  Don't need multi-network publishing capabilities
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  Are comfortable managing multiple plugins and updates
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  Have time to set up complex workflows manually
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-light text-black mb-8">Ready to Make the Switch?</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            We make migrating from WordPress to BroadPress seamless. Our team handles the entire process, ensuring zero
            downtime and no lost content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Start Migration
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
    </div>
  )
}
