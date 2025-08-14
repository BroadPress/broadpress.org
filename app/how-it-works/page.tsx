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
                  <li>• Rich text editor with newsroom-specific tools</li>
                  <li>• Automatic categorization and tagging</li>
                  <li>• Collaborative editing with your team</li>
                  <li>• Built-in fact-checking and source management</li>
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
                  <li>• Visual network selection interface</li>
                  <li>• Platform-specific content optimization</li>
                  <li>• Scheduling and timing controls</li>
                  <li>• Preview before publishing</li>
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
                  <li>• Instant multi-platform publishing</li>
                  <li>• Real-time analytics and engagement tracking</li>
                  <li>• Automatic social media integration</li>
                  <li>• Performance insights and recommendations</li>
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
