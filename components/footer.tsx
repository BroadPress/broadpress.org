import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-xl font-bold text-black mb-4">BroadPress</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              The WordPress alternative for multi-network news publishing. Revolutionizing how newsrooms publish and
              distribute content.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-black mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-it-works" className="text-gray-600 hover:text-black">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/vs-wordpress" className="text-gray-600 hover:text-black">
                  vs WordPress
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-black">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-black mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black">
                  About
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-600 hover:text-black">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2024 BroadPress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
