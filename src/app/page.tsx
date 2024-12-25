import Image from "next/image";
import { FlipCard, TiltCard } from "./components/Card";
import { EmailLink } from "./components/EmailLink";
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
        <li className="text-2xl">
          <h1>Anna Dobson</h1>
        </li>
        <li className="italic">Literary Scout</li>
        <li>
          <EmailLink />
        </li>
      </ul>
      <span className="text-red-600 animate-pulse text-3xl">→</span>
    </div>
  );
}

function Back() {
  return (
    <div className="flex flex-col md:gap-6 gap-12 items-center rounded-sm justify-center border-2 border-yellow-300 shadow-xl h-full">
      <div className="flex flex-col items-center">
        <Image
          src="/profile.JPG"
          alt="Profile photo"
          width={150}
          height={150}
          className="rounded-full h-28 w-28 object-cover mt-6"
        />
      </div>
      <div className="px-6 flex flex-col gap-3 text-left md:text-center">
        <h1>Hi, I'm Anna.</h1>
        <div>
          Current literary scout for{" "}
          <ExternalLink href="https://ecclesfisher.com/#team">
            Eccles Fisher Associates.
          </ExternalLink>
        </div>
        <div className="">
          Previous student of{" "}
          <span className="italic">Issues in Modern Culture</span> at{" "}
          <ExternalLink href=""> University College London</ExternalLink>
          and <span className="italic">French & Russian</span> at the{" "}
          <ExternalLink href="">University of Oxford.</ExternalLink>
        </div>
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
