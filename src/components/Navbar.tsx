import Link from 'next/link';
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 border-b bg-white px-5">
      <div className="flex h-full items-center justify-between gap-x-10">
        <h1 className="hidden w-1/6 flex-none text-3xl lg:inline-block">
          <span className="font-bold">Zens</span>Store
        </h1>
        <div className="grow">
          <form>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2 ps-10 text-sm outline-none placeholder:font-light placeholder:text-gray-400 focus:ring-1 focus:ring-gray-500"
                placeholder="Search products..."
              />
            </div>
          </form>
        </div>
        <div className="flex w-1/4 flex-none items-center justify-end gap-x-5 lg:w-1/6">
          <Link
            href="#"
            className="rounded-full border bg-gray-200 px-1.5 py-1.5 hover:bg-gray-300"
          >
            <ShoppingCartIcon className="h-5 w-5 text-gray-700" />
          </Link>
          <Link
            href="#"
            className="rounded border border-black bg-white px-2 py-1 text-sm font-medium tracking-wide text-black hover:border-black/85 hover:text-black/85"
          >
            Login
          </Link>
          <Link
            href="#"
            className="hidden rounded border border-black bg-black px-2 py-1 text-sm tracking-wide text-white hover:bg-black/85 lg:inline-block"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
