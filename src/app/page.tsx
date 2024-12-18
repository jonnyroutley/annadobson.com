import { BigLetter } from './components/Letter'
import { ExternalLink, InternalLink } from './components/Links'

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center justify-center h-screen w-full px-4 py-2 ">
      <div className="h-16" />
      <div className="flex flex-col gap-8 items-center rounded-sm justify-center md:max-w-lg border-2 px-12 py-24 sm:py-8 shadow-xl">
        <div className="flex flex-col items-center ">
          <div
            className={`flex flex-col gap-2 items-baseline justify-center text-center w-fit`}
          >
            <div className="flex flex-row gap-2">
              <BigLetter letter="A" />
              <BigLetter letter="N" />
            </div>
            <div className="flex flex-row gap-2">
              <BigLetter letter="N" />
              <BigLetter letter="A" />
            </div>
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
      </div>
    </main>
  )
}
