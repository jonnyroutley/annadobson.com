import { Oi } from 'next/font/google'

const oi = Oi({
  weight: '400',
  subsets: ['latin'],
})

export function BigLetter({ letter }: { letter: string }) {
  return (
    <div className="relative inline-block">
      <div
        className={`${oi.className} text-[4rem] leading-[3.5rem] relative z-10`}
      >
        <p className="translate-y-[0.9rem]">{letter}</p>
      </div>
    </div>
  )
}
