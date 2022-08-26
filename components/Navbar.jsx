import Link from 'next/link'
import CustomSeparatos from './CustomSeparator'

export default function Navbar () {
  return (
    <header className="absolute top-0 left-0 w-full z-40 py-2">
      <div className='mx-auto w-10/12 max-w-[1300px] '>
        <div className='border-b border-white pb-2'>
          <div className='flex justify-between'>
            <div>
              <Link href="/">
                <a className='flex items-center'>
                  <img className='h-[50%] w-2/3' src="/images/logo-humboldt.svg" alt="logo humboldt" />
                </a>
              </Link>
            </div>
            <nav className='lg:self-end'>
              {/* DESKTOP */}
              <ul className='hidden lg:flex text-white gap-x-14'>
                <li>
                  <Link href="/colombia">
                    <a>
                      Colombia
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      Regiones
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      Grupos
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      Temáticas
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/explorador">
                    <a>
                      Explorador
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      Más
                    </a>
                  </Link>
                </li>
              </ul>

              {/* MOBILE */}
            </nav>
          </div>
        </div>
        <div>
          <CustomSeparatos />
        </div>
      </div>
    </header>
  )
}
