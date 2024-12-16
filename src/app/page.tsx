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

export default function Home() {
  return (
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
  )
}
