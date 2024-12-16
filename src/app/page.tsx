import { Oi } from 'next/font/google'
import { ExternalLink, InternalLink } from './components/Links'

const oi = Oi({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center justify-center  h-screen w-full px-4 py-2">
      <div className="h-16" />
      <div className="flex flex-col items-center">
        <div
          className={`flex flex-row gap-1 items-baseline justify-center text-center w-fit`}
        >
          <h1
            className={`${oi.className} text-[9rem] tracking-widest leading-[9rem] translate-x-2`}
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
        <li>
          <InternalLink href={'mailto:annadobson@outlook.com'}>
            Contact
          </InternalLink>
        </li>
      </ul>
    </main>
  )
}
