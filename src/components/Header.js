import React from "react";

export default function Header() {
  return (
    <div className="bg-theme/15 text-neutral-800 font-medium flex items-center justify-center gap-3 md:gap-5 text-xs md:text-lg p-4">
      <p>Navigate your ideal career path with tailored expert advice</p>
      <a className="text-theme whitespace-nowrap" href="#contact">
        Contact Expert
      </a>
    </div>
  );
}
