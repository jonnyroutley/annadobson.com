import Link from 'next/link'
import { InternalLink } from './Links'

export function Header() {
  return (
    <div className="absolute w-full px-4 py-2 z-10">
      <div className="inline-flex flex-row items-baseline gap-1 w-full">
        <Link className="text-5xl font-bold" href={'/'}>
          A
        </Link>
        <div className="rounded-full w-4 h-4 bg-red-600  shrink-0" />
        <nav className="ml-4 w-full">
          <ul className="flex flex-row gap-4 w-full justify-end">
            {/* <li>
              <InternalLink href={'/works'}>Selected works</InternalLink>
            </li> */}
            <li>
              <InternalLink href={'mailto:annadobson@outlook.com'}>
                Contact
              </InternalLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
