
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="relative h-[70vh] bg-bcs-navy flex items-center justify-center">
                <div className="container mx-auto px-4 z-10 text-center text-white mt-16">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-gray-300">We are here to assist you.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-bcs-navy mb-8">Get in Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-bcs-light-gray rounded-full flex items-center justify-center text-bcs-navy mr-6 flex-shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Address</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Bishop Cotton School,<br />
                                            Shimla Bypass, Near Khalini,<br />
                                            Shimla, Himachal Pradesh 171002, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-bcs-light-gray rounded-full flex items-center justify-center text-bcs-navy mr-6 flex-shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Phone</h3>
                                        <p className="text-gray-600 mb-1">+91 177 262 0880 (Main Office)</p>
                                        <p className="text-gray-600">+91 177 262 0881 (Headmaster's Office)</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-bcs-light-gray rounded-full flex items-center justify-center text-bcs-navy mr-6 flex-shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Email</h3>
                                        <p className="text-gray-600 mb-1">secy@bishopcotton.com</p>
                                        <p className="text-gray-600">headmaster@bishopcotton.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-bcs-navy mb-6">Send us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-bcs-gold focus:ring-1 focus:ring-bcs-gold outline-none transition-colors" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-bcs-gold focus:ring-1 focus:ring-bcs-gold outline-none transition-colors" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-bcs-gold focus:ring-1 focus:ring-bcs-gold outline-none transition-colors" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded border border-gray-300 focus:border-bcs-gold focus:ring-1 focus:ring-bcs-gold outline-none transition-colors" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 bg-bcs-navy text-white font-bold uppercase tracking-wider rounded hover:bg-bcs-gold transition-colors flex items-center justify-center">
                                    Send Message <Send size={18} className="ml-2" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[400px] w-full bg-gray-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.716175618536!2d77.1706!3d31.0898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e8e7a00001%3A0x6e8a8a8a8a8a8a8a!2sBishop%20Cotton%20School!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                ></iframe>
            </section>

            <Footer />
        </main>
    );
}
