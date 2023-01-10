import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clubLogo from '../assets/clubLogo.png'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '#', current: false,link:"/ClubWebsite",color:"lime" },
  { name: 'Events', href: '#', current: false,link:"/ClubWebsite/event",color:"purple" },
  { name: 'Team', href: '#', current: false,link:"/ClubWebsite/team",color:"yellow" },
  { name: 'Contact', href: '#', current: false,link:"/ClubWebsite/contact",color:"rose" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div style={{position:'fixed',width:'100vw',zIndex:'100'}}>
    <Disclosure as="nav" className="bg-slate-800" style={{backgroundColor:'black'}}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={clubLogo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={clubLogo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                      <Link to={navigation[0].link}>
                      <a
                        href="/"
                        className={classNames(
                          navigation.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-emerald-600 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={navigation[0].current ? 'page' : undefined}
                      >
                        {navigation[0].name}
                      </a></Link>
                      <Link to={navigation[1].link}>
                      <a
                        href="/"
                        className={classNames(
                          navigation.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-violet-600 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={navigation[1].current ? 'page' : undefined}
                      >
                        {navigation[1].name}
                      </a></Link>
                      <Link to={navigation[2].link}>
                      <a
                        href="/"
                        className={classNames(
                          navigation.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-yellow-600 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={navigation[2].current ? 'page' : undefined}
                      >
                        {navigation[2].name}
                      </a></Link>
                      <Link to={navigation[3].link}>
                      <a
                        href="/"
                        className={classNames(
                          navigation.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-rose-600 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={navigation[3].current ? 'page' : undefined}
                      >
                        {navigation[3].name}
                      </a></Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link to={item.link}>
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button></Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  )
}