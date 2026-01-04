
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Book, Microscope, Calculator, Globe, Laptop, Palette } from "lucide-react";

export default function Academics() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="relative h-[98vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/sports.png"
                        alt="Holistic Education at BCS"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-bcs-dark-navy/80 mix-blend-multiply"></div>
                </div>
                <div className="container mx-auto px-4 z-10 text-center text-white mt-16">
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-xs md:text-sm tracking-[0.2em] font-medium uppercase mb-6">
                        Academic Excellence
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Cultivating <br />
                        <span className="text-bcs-gold italic">Intellect</span>
                    </h1>
                </div>
            </section>

            {/* Curriculum Overview */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-serif font-bold text-bcs-navy mb-8">The Curriculum</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-12">
                        Bishop Cotton School is affiliated to the Council for the Indian School Certificate Examinations (CISCE). We prepare students for the ICSE (Class 10) and ISC (Class 12) examinations. Our curriculum is robust, challenging, and designed to foster critical thinking and creativity.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-bcs-gold">
                            <h3 className="font-serif font-bold text-xl text-bcs-navy mb-4">Junior School (Classes III - V)</h3>
                            <p className="text-sm text-gray-600">
                                Focuses on foundational literacy, numeracy, and environmental awareness. Learning is activity-based, encouraging curiosity and joy in discovery.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-bcs-navy">
                            <h3 className="font-serif font-bold text-xl text-bcs-navy mb-4">Middle & Senior School</h3>
                            <p className="text-sm text-gray-600">
                                A rigorous academic program that allows students to specialize in Science, Commerce, or Humanities streams in Classes 11 & 12, preparing them for premier universities worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subjects Grid */}
            <section className="py-20 bg-bcs-light-gray">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-bcs-navy">Departments</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <div className="bg-white p-6 rounded shadow-sm text-center hover:-translate-y-1 transition-transform">
                            <Book className="mx-auto text-bcs-navy mb-3" />
                            <span className="font-bold text-sm text-gray-700">English</span>
                        </div>
                        <div className="bg-white p-6 rounded shadow-sm text-center hover:-translate-y-1 transition-transform">
                            <Calculator className="mx-auto text-bcs-navy mb-3" />
                            <span className="font-bold text-sm text-gray-700">Mathematics</span>
                        </div>
                        <div className="bg-white p-6 rounded shadow-sm text-center hover:-translate-y-1 transition-transform">
                            <Microscope className="mx-auto text-bcs-navy mb-3" />
                            <span className="font-bold text-sm text-gray-700">Sciences</span>
                        </div>
                        <div className="bg-white p-6 rounded shadow-sm text-center hover:-translate-y-1 transition-transform">
                            <Globe className="mx-auto text-bcs-navy mb-3" />
                            <span className="font-bold text-sm text-gray-700">Humanities</span>
                        </div>
                        <div className="bg-white p-6 rounded shadow-sm text-center hover:-translate-y-1 transition-transform">
                            <Laptop className="mx-auto text-bcs-navy mb-3" />
                            <span className="font-bold text-sm text-gray-700">Comp. Sc.</span>
                        </div>
                        <div className="bg-white p-6 rounded shadow-sm text-center hover:-translate-y-1 transition-transform">
                            <Palette className="mx-auto text-bcs-navy mb-3" />
                            <span className="font-bold text-sm text-gray-700">Arts</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
