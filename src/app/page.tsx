// font-[family-name:var(--font-fraunces)]
export default function Home() {
  return (
    <div className="bg-blue-700">
      <main className="flex flex-col gap-8 items-center justify-center min-h-screen text-neutral-50 px-4">
        <div className="flex flex-col items-center ">
          <h1 className="text-[15rem] leading-none">
            AN
            <br />
            NA
          </h1>
          <div className="flex flex-row gap-1 items-baseline">
            <h2 className="text-5xl tracking-widest">Dobson</h2>
            <div className="rounded-full w-4 h-4 bg-red-600" />
          </div>
        </div>
        <ul className="flex flex-col gap-2 text-center">
          <li>
            Literary scout for{' '}
            <a
              className="underline decoration-yellow-400 decoration-dotted hover:decoration-red-600"
              href="https://ecclesfisher.com/#team"
            >
              Eccles Fisher Associates
            </a>
          </li>
          <li>
            Alumna of the University of Oxford and University College London
          </li>
          <li>
            <a className="underline decoration-yellow-400 decoration-dotted hover:decoration-red-600 hover:cursor-pointer">
              Selected works{' '}
              <span className="text-yellow-400 hover:text-red-600">→</span>
            </a>
          </li>
        </ul>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"> */}

      {/* </footer> */}
    </div>
  )
}
