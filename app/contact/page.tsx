export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-light text-black mb-8 leading-tight">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Move your cluttered, old scripted, non performing, slow loading website to BroadPress. Get free counselling from the industry experts.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-medium text-black mb-8">Send us a message</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Name of Organization/ Enterprise
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="demo">Request a Demo</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your organisation/ enterprise and how we can help..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-medium text-black mb-8">Other ways to reach us</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif font-medium text-black mb-4">Sales & Demos</h3>
                  <p className="text-gray-600 mb-2">Ready to see BroadPress in action?</p>
                  <a href="mailto:sales@broadpress.org" className="text-black hover:text-gray-600 transition-colors">
                    sales@broadpress.org
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-medium text-black mb-4">Technical Support</h3>
                  <p className="text-gray-600 mb-2">Need help with your BroadPress account?</p>
                  <a href="mailto:support@broadpress.org" className="text-black hover:text-gray-600 transition-colors">
                    support@broadpress.org
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-medium text-black mb-4">Partnerships</h3>
                  <p className="text-gray-600 mb-2">Interested in partnering with us?</p>
                  <a href="mailto:partners@broadpress.org" className="text-black hover:text-gray-600 transition-colors">
                    partners@broadpress.org
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-medium text-black mb-4">Response Time</h3>
                  <p className="text-gray-600">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-serif font-light text-black mb-16 text-center">Frequently Asked Questions</h2>

    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-serif font-medium text-black mb-3">How quickly can we get started?</h3>
        <p className="text-gray-600 leading-relaxed">
          Most businesses can have BroadPress up and running within 48 hours. We provide full onboarding support and training for your team.

        </p>
      </div>

      <div>
        <h3 className="text-xl font-serif font-medium text-black mb-3">Do you offer a free trial?</h3>
        <p className="text-gray-600 leading-relaxed">
         Yes! BroadPress offers a 14-day free trial with full access to all features. No credit card is required to get started.

        </p>
      </div>

      <div>
        <h3 className="text-xl font-serif font-medium text-black mb-3">Can you migrate our existing content?</h3>
        <p className="text-gray-600 leading-relaxed">
          Absolutely. Our team will help you migrate your existing content from WordPress or other CMS platforms at no additional cost.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-serif font-medium text-black mb-3">What kind of support do you provide?</h3>
        <p className="text-gray-600 leading-relaxed">
          We provide 24/7 technical support, dedicated account management, and comprehensive training resources to ensure your team’s success.

        </p>
      </div>

      <div>
        <h3 className="text-xl font-serif font-medium text-black mb-3">Can we add more pages later?</h3>
        <p className="text-gray-600 leading-relaxed">
          Yes. You can upgrade your plan at any time to accommodate additional pages and sections as your website grows.

        </p>
      </div>

      <div>
        <h3 className="text-xl font-serif font-medium text-black mb-3">Is API integration supported?</h3>
        <p className="text-gray-600 leading-relaxed">
          Yes. BroadPress supports API access for custom integrations with third-party tools, internal systems, or other enterprise applications.

        </p>
      </div>

      <div>
        <h3 className="text-xl font-serif font-medium text-black mb-3">Can multiple teams collaborate on content?</h3>
        <p className="text-gray-600 leading-relaxed">
        Absolutely. BroadPress includes collaborative editing, component-based layouts, and workflow tools to allow multiple teams to work efficiently.

        </p>
      </div>

      <div>
        <h3 className="text-xl font-serif font-medium text-black mb-3">How secure is BroadPress?</h3>
        <p className="text-gray-600 leading-relaxed">
          BroadPress offers enterprise-grade security, including global server regions, CDN support, Cloudinary-managed storage, and advanced encryption to protect your content.

        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
