import Image from "next/image";
import { FlipCard, TiltCard } from "./components/Card";
import { BigLetter } from "./components/Letter";
import { ExternalLink, InternalLink } from "./components/Links";

function Front() {
  return (
    <div className="flex flex-col gap-12 md:gap-6 items-center rounded-sm justify-center border-2 border-yellow-300 shadow-xl h-full">
      <div className="flex flex-col items-center">
        <div
          className={
            "flex flex-col gap-2 items-baseline justify-center text-center w-fit"
          }
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
      <ul className="flex flex-col gap-1 text-center items-center max-w-md z-10 mt-1">
        <li className="text-2xl">Anna Dobson</li>
        <li className="italic">Literary Scout</li>
        <li>
          <a className="" href="mailto:contact@annadobs.com">
            contact@annadobson.com
          </a>
        </li>
      </ul>
      <span className="text-red-600 animate-pulse text-3xl">→</span>
    </div>
  );
}

function Back() {
  return (
    <div className="flex flex-col gap-6 items-center rounded-sm justify-center border-2 border-yellow-300 shadow-xl h-full">
      <div className="flex flex-col items-center">
        <Image
          src="/profile.JPG"
          alt="Profile photo"
          width={150}
          height={150}
          className="rounded-full h-28 w-28 object-cover"
        />
      </div>
      <div className="px-6 flex flex-col text-center gap-3">
        <p>Hi, I'm Anna.</p>
        <div>
          I'm currently working as a literary scout for{" "}
          <ExternalLink href="https://ecclesfisher.com/#team">
            Eccles Fisher Associates.
          </ExternalLink>
        </div>
        <p>
          Previously, I studied{" "}
          <span className="italic">Issues in Modern Culture</span> at University
          College London and <span className="italic">French & Russian</span> at
          the University of Oxford.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-full px-4 py-2 ">
      <FlipCard front={Front()} back={Back()} />
    </main>
  );
}
