"use client";
export function EmailLink() {
  return (
    <a
      href="mailto:contact@annadobson.com"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      contact@annadobson.com
    </a>
  );
}
