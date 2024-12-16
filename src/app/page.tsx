import { Oi } from 'next/font/google'

// font-[family-name:var(--font-fraunces)]
function ExternalLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <div className="inline-flex flex-row gap-1 items-baseline">
      <a
        className="underline decoration-yellow-400 decoration-dotted hover:decoration-red-600 peer transition-colors ease-in-out duration-200"
        href={href}
      >
        <>{children}</>
      </a>
      <span className="text-red-600">→</span>
    </div>
  )
}

const oi = Oi({
  weight: ['400'],
  subsets: ['latin'],
})

function Header() {
  return (
    <div className="absolute w-full px-4 py-2">
      <div className="inline-flex flex-row items-baseline gap-1 w-full">
        <p className="text-5xl font-bold">A</p>
        <div className="rounded-full w-4 h-4 bg-red-600  shrink-0" />
        <nav className="ml-4 w-full">
          <ul className="flex flex-row gap-4 w-full justify-end">
            <li>Selected works</li>
            {/* <li>About</li> */}
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-[#1d16f0] text-xl font-semibold overflow-hidden">
      {/* <Button /> */}
      <Header />
      <div className="relative">
        <main className="flex flex-col gap-8 items-center justify-center text-neutral-50 h-screen w-full px-4 py-2">
          <div className="h-16" />
          <div className="flex flex-col items-center">
            <div
              className={`flex flex-row gap-1 items-baseline justify-center text-center w-fit`}
            >
              <h1
                className={`${oi.className} text-[10rem] tracking-widest leading-[9rem] translate-x-2`}
              >
                AN
                <br />
                NA
              </h1>
              {/* <h1 className="text-3xl">Anna Dobson</h1> */}
              {/* <div className="rounded-full w-2 h-2 bg-red-600  shrink-0" /> */}
            </div>
          </div>
          <ul className="flex flex-col gap-2 text-center items-center max-w-md z-10">
            <li>
              Literary scout for{' '}
              <ExternalLink href="https://ecclesfisher.com/#team">
                Eccles Fisher Associates
              </ExternalLink>
            </li>
            <li>
              Alumna of the University of Oxford and University College London
            </li>
            <li className="flex flex-row gap-1 items-baseline">
              <ExternalLink href="">Selected works</ExternalLink>
            </li>
          </ul>
        </main>
      </div>
    </div>
  )
}
