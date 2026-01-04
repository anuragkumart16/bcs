"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
// function cn is defined below

// Simple utility for class merging
function cn(...inputs: (string | undefined | null | false)[]) {
    return inputs.filter(Boolean).join(" ");
}

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About BCS", href: "/about" },
        { name: "Admissions", href: "/admissions" },
        { name: "Boarding", href: "/boarding" },
        { name: "Academics", href: "/academics" },
        { name: "News", href: "/news" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed w-full z-50 transition-all duration-300">
            {/* Top Bar */}
            <div className="bg-bcs-navy text-white text-xs py-2 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <a href="tel:+911234567890" className="flex items-center hover:text-bcs-gold transition-colors">
                            <Phone size={14} className="mr-2" />
                            +91 177 262 0880
                        </a>
                        <a href="mailto:info@bishopcottonshimla.com" className="flex items-center hover:text-bcs-gold transition-colors">
                            <Mail size={14} className="mr-2" />
                            secy@bishopcotton.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-300">Follow us:</span>
                        <div className="flex space-x-3">
                            <Link href="#" className="hover:text-bcs-gold transition-colors"><Facebook size={14} /></Link>
                            <Link href="#" className="hover:text-bcs-gold transition-colors"><Twitter size={14} /></Link>
                            <Link href="#" className="hover:text-bcs-gold transition-colors"><Instagram size={14} /></Link>
                            <Link href="#" className="hover:text-bcs-gold transition-colors"><Linkedin size={14} /></Link>
                        </div>
                        <div className="h-4 w-px bg-white/20 mx-2"></div>
                        <Link href="#" className="hover:text-bcs-gold transition-colors uppercase font-medium tracking-wider">
                            Alumni
                        </Link>
                        <Link href="#" className="hover:text-bcs-gold transition-colors uppercase font-medium tracking-wider">
                            Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div
                className={cn(
                    "bg-white transition-all duration-300 border-b border-gray-100",
                    isScrolled ? "py-2 shadow-md" : "py-4 md:py-6"
                )}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center group">
                        <div className="bg-bcs-navy text-bcs-gold p-2 rounded-sm mr-3">
                            {/* Simplified Crest Placeholder */}
                            <div className="h-8 w-8 md:h-10 md:w-10 flex items-center justify-center border border-bcs-gold rounded-full">
                                <span className="font-serif font-bold text-lg md:text-xl">B</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif font-bold text-bcs-navy text-lg md:text-2xl leading-tight group-hover:text-bcs-gold transition-colors">
                                BISHOP COTTON SCHOOL
                            </span>
                            <span className="text-[10px] md:text-xs text-bcs-sage tracking-[0.2em] font-medium uppercase text-justify">
                                Shimla • Est. 1859
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-bcs-navy hover:text-bcs-gold transition-colors uppercase tracking-wide relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bcs-gold transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                        <Link
                            href="#apply"
                            className="bg-bcs-gold text-white px-6 py-2.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-bcs-navy transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Apply Now
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-bcs-navy p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100 py-4 flex flex-col animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-6 py-3 text-bcs-navy font-medium hover:bg-gray-50 hover:text-bcs-gold border-l-4 border-transparent hover:border-bcs-gold transition-all"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="p-6">
                        <Link
                            href="#apply"
                            className="block w-full text-center bg-bcs-gold text-white px-6 py-3 rounded font-bold uppercase tracking-wider hover:bg-bcs-navy transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Apply To BCS
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
