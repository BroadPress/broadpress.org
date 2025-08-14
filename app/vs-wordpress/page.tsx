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
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                      Purpose-Built for Newsrooms
                    </div>
                  </td>
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
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                        />
                      </svg>
                      Multi-Network Publishing
                    </div>
                  </td>
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
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                      Centralized Content Management
                    </div>
                  </td>
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
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      Real-Time Sync
                    </div>
                  </td>
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
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                      Editorial Workflow Tools
                    </div>
                  </td>
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
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      Performance Optimization
                    </div>
                  </td>
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
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      Security
                    </div>
                  </td>
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
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      Analytics
                    </div>
                  </td>
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
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Ease of Use for Newsrooms
                    </div>
                  </td>
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
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                      Scalability
                    </div>
                  </td>
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
