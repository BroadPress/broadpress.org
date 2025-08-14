import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-light text-black mb-8 leading-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your newsroom's size and needs. All plans include our core multi-network
            publishing features.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white p-8 border border-gray-300">
              <h3 className="text-2xl font-serif font-medium text-black mb-4">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for small newsrooms and independent journalists</p>
              <div className="mb-8">
                <span className="text-4xl font-serif font-light text-black">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Up to 3 connected networks
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Unlimited articles and publishing
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Basic analytics dashboard
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Email support
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Standard security features
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  API access
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center border border-gray-300 text-black px-6 py-3 font-medium hover:border-black transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="bg-white p-8 border-2 border-black relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-serif font-medium text-black mb-4">Professional</h3>
              <p className="text-gray-600 mb-6">Ideal for growing newsrooms and regional media companies</p>
              <div className="mb-8">
                <span className="text-4xl font-serif font-light text-black">$99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Up to 10 connected networks
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Unlimited articles and publishing
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Advanced analytics and insights
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Priority support (24/7)
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Enhanced security features
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Custom editorial workflows
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  API access
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 border border-gray-300">
              <h3 className="text-2xl font-serif font-medium text-black mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large media networks and news organizations</p>
              <div className="mb-8">
                <span className="text-4xl font-serif font-light text-black">Custom</span>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Unlimited connected networks
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Unlimited articles and publishing
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Custom analytics and reporting
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Dedicated account manager
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Military-grade security
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  Custom integrations
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  White-label options
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">✓</span>
                  On-premise deployment
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center border border-gray-300 text-black px-6 py-3 font-medium hover:border-black transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-light text-black mb-16 text-center">Compare Plans</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-left py-4 px-6 font-serif text-lg font-medium text-black">Feature</th>
                  <th className="text-center py-4 px-6 font-serif text-lg font-medium text-black">Starter</th>
                  <th className="text-center py-4 px-6 font-serif text-lg font-medium text-black">Professional</th>
                  <th className="text-center py-4 px-6 font-serif text-lg font-medium text-black">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      />
                    </svg>
                    Connected Networks
                  </td>
                  <td className="py-4 px-6 text-center">Up to 3</td>
                  <td className="py-4 px-6 text-center">Up to 10</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="py-4 px-6 font-medium flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                    Multi-Network Publishing
                  </td>
                  <td className="py-4 px-6 text-center">✓</td>
                  <td className="py-4 px-6 text-center">✓</td>
                  <td className="py-4 px-6 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Real-Time Analytics
                  </td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                  <td className="py-4 px-6 text-center">Custom</td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="py-4 px-6 font-medium flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Editorial Workflows
                  </td>
                  <td className="py-4 px-6 text-center">Standard</td>
                  <td className="py-4 px-6 text-center">Custom</td>
                  <td className="py-4 px-6 text-center">Fully Custom</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25zM8.25 12a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z"
                      />
                    </svg>
                    Support
                  </td>
                  <td className="py-4 px-6 text-center">Email</td>
                  <td className="py-4 px-6 text-center">24/7 Priority</td>
                  <td className="py-4 px-6 text-center">Dedicated Manager</td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="py-4 px-6 font-medium flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    API Access
                  </td>
                  <td className="py-4 px-6 text-center">✓</td>
                  <td className="py-4 px-6 text-center">✓</td>
                  <td className="py-4 px-6 text-center">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-light text-black mb-16 text-center">Pricing FAQ</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-medium text-black mb-3">Is there a free trial?</h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, we offer a 14-day free trial for all plans. No credit card required to get started.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-medium text-black mb-3">Can I change plans anytime?</h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-medium text-black mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600 leading-relaxed">
                We accept all major credit cards, bank transfers, and can accommodate custom billing arrangements for
                Enterprise customers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-medium text-black mb-3">Is there a setup fee?</h3>
              <p className="text-gray-600 leading-relaxed">
                No setup fees for Starter and Professional plans. Enterprise customers receive white-glove onboarding
                included in their custom pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-light text-black mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Join newsrooms around the world who trust BroadPress for their multi-network publishing needs.
          </p>
          <Link
            href="/contact"
            className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  )
}
