import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-light text-black mb-8 leading-tight">
            How BroadPress Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From story creation to multi-platform publishing, BroadPress streamlines your entire newsroom workflow in
            three simple steps.
          </p>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-6xl font-serif font-light text-gray-300 mr-4">01</span>
                  <h2 className="text-3xl font-serif font-medium text-black">Create Your Story</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Write, edit, and format your news article using our intuitive editor designed specifically for
                  journalists. Add images, videos, and multimedia content with ease.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    Rich text editor with newsroom-specific tools
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                    Automatic categorization and tagging
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                      />
                    </svg>
                    Collaborative editing with your team
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Built-in fact-checking and source management
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 border border-gray-200">
                <div className="h-64 bg-white border border-gray-200 p-6">
                  <div className="h-4 bg-gray-200 mb-4"></div>
                  <div className="h-3 bg-gray-100 mb-2"></div>
                  <div className="h-3 bg-gray-100 mb-2"></div>
                  <div className="h-3 bg-gray-100 mb-4"></div>
                  <div className="h-20 bg-gray-50 border border-gray-200 mb-4"></div>
                  <div className="h-3 bg-gray-100 mb-2"></div>
                  <div className="h-3 bg-gray-100"></div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gray-50 p-8 border border-gray-200">
                  <div className="h-64 bg-white border border-gray-200 p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="h-16 bg-gray-100 border border-gray-200 p-2">
                        <div className="h-2 bg-gray-200 mb-1"></div>
                        <div className="h-2 bg-gray-200"></div>
                      </div>
                      <div className="h-16 bg-gray-100 border border-gray-200 p-2">
                        <div className="h-2 bg-gray-200 mb-1"></div>
                        <div className="h-2 bg-gray-200"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 bg-gray-100 border border-gray-200"></div>
                      <div className="h-12 bg-gray-100 border border-gray-200"></div>
                      <div className="h-12 bg-gray-100 border border-gray-200"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <span className="text-6xl font-serif font-light text-gray-300 mr-4">02</span>
                  <h2 className="text-3xl font-serif font-medium text-black">Select Your Networks</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Choose which of your connected news networks should receive this story. Customize the content for each
                  platform while maintaining your core message.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                      />
                    </svg>
                    Visual network selection interface
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                      />
                    </svg>
                    Platform-specific content optimization
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Scheduling and timing controls
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    Preview before publishing
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-6xl font-serif font-light text-gray-300 mr-4">03</span>
                  <h2 className="text-3xl font-serif font-medium text-black">Publish Everywhere</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  With one click, your story goes live across all selected networks simultaneously. Monitor performance,
                  engagement, and reach from your unified dashboard.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Instant multi-platform publishing
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Real-time analytics and engagement tracking
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                    Automatic social media integration
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                    Performance insights and recommendations
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 border border-gray-200">
                <div className="h-64 bg-white border border-gray-200 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-3 w-20 bg-gray-200"></div>
                    <div className="h-8 w-16 bg-black"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200">
                      <div className="h-2 w-24 bg-gray-200"></div>
                      <div className="h-2 w-12 bg-green-400"></div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200">
                      <div className="h-2 w-20 bg-gray-200"></div>
                      <div className="h-2 w-12 bg-green-400"></div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200">
                      <div className="h-2 w-28 bg-gray-200"></div>
                      <div className="h-2 w-12 bg-green-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-light text-black mb-12">The Result</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl font-serif font-light text-black mb-4">75%</div>
              <p className="text-gray-600">Less time spent on publishing</p>
            </div>
            <div>
              <div className="text-4xl font-serif font-light text-black mb-4">3x</div>
              <p className="text-gray-600">Faster content distribution</p>
            </div>
            <div>
              <div className="text-4xl font-serif font-light text-black mb-4">100%</div>
              <p className="text-gray-600">Consistent messaging across platforms</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            BIRATINFO reduced their publishing time from hours to minutes while reaching 3x more readers.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-light text-black mb-8">Ready to Streamline Your Workflow?</h2>
          <p className="text-xl text-gray-600 mb-12">
            See how BroadPress can transform your newsroom's publishing process.
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
              Compare Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
