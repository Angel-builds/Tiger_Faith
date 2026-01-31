import Link from "next/link";
import Image from "next/image";
import { MdMail, MdLocationOn } from 'react-icons/md';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Mission Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/TF_logo.png"
                  alt="Tiger Faith Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold">Tiger Faith</h3>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Empowering the next generation through faith, community, and purpose-driven growth on campus.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-amber-400 font-bold text-lg uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  About Our Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Weekly Gatherings
                </Link>
              </li>
              <li>
                <Link
                  href="/leadership"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Volunteer Opportunities
                </Link>
              </li>
              <li>
                <Link
                  href="/give"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="text-amber-400 font-bold text-lg uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MdMail className="text-amber-400 text-xl" />
                <a
                  href="mailto:hello@tigerfaith.edu"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  hello@tigerfaith.edu
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-amber-400 text-xl" />
                <div className="text-gray-400">
                  <p>Grambling, LA &</p>
                  <p>Lancaster, PA</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Tiger Faith Ministry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}