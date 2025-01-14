import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import { useUserStore } from "../stores/useUserStore";

const navigation = [
  // { name: 'Dashboard', href: '#', current: true },
  // { name: 'Team', href: '#', current: false },
  // { name: 'Projects', href: '#', current: false },
  // { name: 'Calendar', href: '#', current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const currentUser = useUserStore((e) => e.user);

  console.log(currentUser);

  console.log(currentUser === null);
  return (
    <Disclosure as="nav" className="bg-white-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <a className="home-link">
                    <Link href={`/`}>
                      <Image
                        className="block lg:hidden h-10 w-auto"
                        src="/images/ezydine-logo.png"
                        alt="Ezydine Logo"
                        width="40"
                        height="40"
                      />
                    </Link>
                  </a>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {currentUser === null ? (
                <div className="absolute inset-y-0 right-0 flex gap-4 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <a
                    href={"/auth/signin/"}
                    className={classNames(
                      "bg-gray-900 text-white",
                      "px-3 py-2 rounded-md text-sm font-medium"
                    )}
                    aria-current={"page"}
                  >
                    Signin
                  </a>
                  <Link href={"/auth/signup/"}>
                    <div
                      className={classNames(
                        "bg-purple-200 text-gray-900",
                        "px-3 py-2 rounded-md text-sm font-medium",
                        "cursor-pointer"
                      )}
                      aria-current={"page"}
                    >
                      Signup
                    </div>
                  </Link>
                </div>
              ) : (
                <div className="absolute inset-y-0 right-0 flex gap-4 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link href={"/add_menu_item"}>
                    <div
                      className={classNames(
                        "bg-gray-900 text-white",
                        "px-3 py-2 rounded-md text-sm font-medium",
                        "cursor-pointer"
                      )}
                      aria-current={"page"}
                    >
                      Manage Menu
                    </div>
                  </Link>
                  <Link href={"/auth/logout/"}>
                    <div
                      className={classNames(
                        "bg-purple-200 text-gray-900",
                        "px-3 py-2 rounded-md text-sm font-medium",
                        "cursor-pointer"
                      )}
                      aria-current={"page"}
                    >
                      Logout
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
