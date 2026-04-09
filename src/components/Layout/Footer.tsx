
import React from 'react';
import { MoveRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const XIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

interface FooterSectionProps {
    title: string;
    links: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
    <div className="flex items-start gap-8">
        <h4 className="text-white text-2xl font-bold [writing-mode:vertical-lr] rotate-180 tracking-tight">
            {title}
        </h4>
        <ul className="space-y-6">
            {links.map((link) => (
                <li key={link}>
                    <a
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-300 hover:text-white flex items-center gap-2 group transition-colors text-sm font-medium"
                    >
                        {link}
                        <MoveRight
                        size={14}
                        className="opacity-60 group-hover:translate-x-1 group-hover:opacity-100 transition-all"
                    />
                </a>
        </li>
      ))}
    </ul>
  </div >
);

const Footer: React.FC = () => {
    const coursera = [
        { label: "What We Offer", href: "#" },
        { label: "Leadership", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Catalog", href: "#" },
        { label: "Mini Coursera Plus", href: "#" },
    ];

    const community = [
        { label: "Partners", href: "#" },
        { label: "Beta Testers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "The Mini Coursera Podcast", href: "#" },
        { label: "Tech Blog", href: "#" },
        { label: "Teaching Center", href: "#" },
    ];

    const more = [
        { label: "Press", href: "#" },
        { label: "Investors", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Privacy", href: "#" },
        { label: "Help", href: "#" },
    ];

    const footerData = [
        {
            title: "Our Company",
            links: coursera.map((i) => i.label),
        },
        {
            title: "Our Terms",
            links: community.map((i) => i.label),
        },
        {
            title: "Features",
            links: more.slice(0, 5).map((i) => i.label),
        },
    ];

    const socialIcons = [
        { icon: <XIcon />, href: "#" },
        { icon: <Youtube size={20} />, href: "#" },
        { icon: <Facebook size={20} />, href: "#" },
        { icon: <Linkedin size={20} />, href: "#" },
        { icon: <Instagram size={20} />, href: "#" },
    ];

    return (
        <footer className="rounded-t-3xl w-full bg-white pt-12 ml-10">
            <div className="bg-[#1e1e1e] mx-4 md:mx-10 rounded-t-[40px] px-16 py-16 flex flex-wrap justify-between items-start gap-12">
                {footerData.map((section) => (
                    <FooterSection
                        key={section.title}
                        title={section.title}
                        links={section.links}
                    />
                ))}
            </div>

            <div className="py-8 flex justify-center gap-6">
                {socialIcons.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#333] text-white hover:bg-indigo-600 transition-all duration-300 shadow-sm"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            <div className="border-t border-gray-200 pt-6 mt-2 pb-6 text-center text-sm text-gray-500">
                © 2025 Mini Coursera Inc. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
