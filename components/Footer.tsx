import React from "react";
import { Twitter, Youtube, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Twitter",
    href: "#",
    icon: Twitter,
  },
  {
    name: "YouTube",
    href: "#",
    icon: Youtube,
  },
  {
    name: "GitHub",
    href: "#",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
];

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "API", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Support", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <h2 className="text-2xl font-bold">
                <span className="text-red-500">AI.</span>TUBER.
              </h2>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Transform your YouTube content with AI-powered analysis and
              optimization.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors">
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-muted">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI.TUBER. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
