import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip" style={{width: '40px', height: '40px', filter: 'invert(100%)'}}>
            <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="347.666" y="139" width="44.3349" height="221.675" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M202.643 360.287C263.75 360.287 313.287 310.75 313.287 249.643C313.287 188.537 263.75 139 202.643 139C141.537 139 92 188.537 92 249.643C92 310.75 141.537 360.287 202.643 360.287ZM202.645 316.029C239.309 316.029 269.031 286.307 269.031 249.643C269.031 212.979 239.309 183.257 202.645 183.257C165.981 183.257 136.259 212.979 136.259 249.643C136.259 286.307 165.981 316.029 202.645 316.029Z" fill="black"/>
            </svg>

            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"

                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/" className="btn-sm text-black hover:text-white bg-white hover:bg-purple-500 ml-3">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
