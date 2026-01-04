import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-bcs-dark-navy text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-12 w-12 flex items-center justify-center border border-bcs-gold rounded-full text-bcs-gold">
                                <span className="font-serif font-bold text-2xl">B</span>
                            </div>
                            <div>
                                <h3 className="font-serif font-bold text-xl leading-none">BISHOP COTTON</h3>
                                <span className="text-xs tracking-[0.2em] text-gray-400 uppercase">School, Shimla</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Founded in 1859, Bishop Cotton School is one of the oldest boys' boarding schools in Asia, striving to overcome evil with good.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-bcs-gold hover:text-white transition-all"><Facebook size={16} /></Link>
                            <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-bcs-gold hover:text-white transition-all"><Twitter size={16} /></Link>
                            <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-bcs-gold hover:text-white transition-all"><Instagram size={16} /></Link>
                            <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-bcs-gold hover:text-white transition-all"><Linkedin size={16} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-lg font-bold mb-6 text-bcs-gold">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">Our History</Link></li>
                            <li><Link href="/boarding" className="hover:text-white transition-colors">Boarding Life</Link></li>
                            <li><Link href="/news" className="hover:text-white transition-colors">News & Events</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Academics & Admissions */}
                    <div>
                        <h4 className="font-serif text-lg font-bold mb-6 text-bcs-gold">Admissions</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="/admissions" className="hover:text-white transition-colors">Admission Process</Link></li>
                            <li><Link href="/admissions" className="hover:text-white transition-colors">Fee Structure</Link></li>
                            <li><Link href="/academics" className="hover:text-white transition-colors">Academics</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Request Prospectus</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-serif text-lg font-bold mb-6 text-bcs-gold">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-bcs-gold flex-shrink-0 mt-1" />
                                <span>Shimla Bypass, Near Khalini, Shimla, Himachal Pradesh 171002, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-bcs-gold flex-shrink-0" />
                                <span>+91 177 262 0880</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-bcs-gold flex-shrink-0" />
                                <span>secy@bishopcotton.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Bishop Cotton School. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Use</Link>
                        <Link href="#" className="hover:text-white">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
