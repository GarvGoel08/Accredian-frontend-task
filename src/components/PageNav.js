import React from 'react'

export default function PageNav() {
  const navLinks = [
    {
      name: "Refer",
      href: "#refer",
    },
    {
      name: "Benifits",
      href: "#benifits",
    },
    {
      name: "FAQs",
      href: "#faqs",
    },
    {
      name: "Support",
      href: "#support",
    }
  ]
  return (
    <div className="flex justify-center py-6 items-center">
      <div className="flex rounded-full flex-row px-6 md:px-12 py-[9.6px] items-center justify-between gap-6 md:gap-10 bg-theme/15">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`text-neutral-800 ${link.href === "#refer" ? "text-theme" : ""} relative text-sm md:text-xl`}
          >
            {link.name}
            <div className={`absolute w-1 h-1 ${link.href === "#refer" ? "" : "hidden"} bg-theme rounded-full bottom-[-4px] left-1/2 transform -translate-x-1/2`}></div>
          </a>
        ))}
      </div>
    </div>
  )
}
