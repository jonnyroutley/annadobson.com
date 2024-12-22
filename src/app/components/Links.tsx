import Link from "next/link";

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex flex-row gap-1 items-baseline">
      <a
        className="underline decoration-yellow-400 underline-offset-4 hover:decoration-red-600 peer transition-colors ease-in-out duration-200"
        href={href}
      >
        {children}
      </a>
      <span className="text-red-600">→</span>
    </div>
  );
}

export function InternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex flex-row gap-1 items-baseline">
      <Link
        href={href}
        className="underline underline-offset-4 decoration-yellow-400  hover:decoration-red-600 peer transition-colors ease-in-out duration-200"
      >
        {children}
      </Link>
    </div>
  );
}
