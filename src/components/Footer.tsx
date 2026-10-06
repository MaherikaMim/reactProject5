

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-white pt-12 pb-8 py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
      
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
      
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 font-bold text-white text-xs">
                DS
              </div>
              <span className="text-xl font-bold text-gray-900">
                Dev <span className="text-pink-500">Stack</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-gray-700">
              <a href="#" className="hover:text-gray-900">
                GitHub
              </a>
              <a href="#" className="hover:text-gray-900">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-900">
                LinkedIn
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Product
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Projects
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

       
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

      
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-100 pt-6 text-xs text-gray-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="mt-2 flex gap-4 sm:mt-0">
            <a href="#" className="hover:text-gray-600">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;