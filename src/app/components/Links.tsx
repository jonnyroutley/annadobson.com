import Link from "next/link";

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <span className="flex-row gap-1 items-baseline z-50">
      <a
        className="underline decoration-yellow-400 underline-offset-4 hover:decoration-red-600 peer transition-colors ease-in-out duration-200 break-words"
        href={href}
      >
        {children}
      </a>
      <span className="text-red-600 ml-1 mr-2">→</span>
    </span>
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
    <Link
      href={href}
      className="inline-flex flex-row gap-1 items-baseline underline underline-offset-4 decoration-yellow-400  hover:decoration-red-600 peer transition-colors ease-in-out duration-200"
    >
      {children}
    </Link>
  );
}
