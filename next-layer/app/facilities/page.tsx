
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BookOpen, Wifi, Stethoscope, Utensils, Trophy, Music } from "lucide-react";

export default function Facilities() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/dining.png"
                        alt="World Class Facilities"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-bcs-navy/70 mix-blend-multiply"></div>
                </div>
                <div className="container mx-auto px-4 z-10 text-center text-white mt-16">
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-xs md:text-sm tracking-[0.2em] font-medium uppercase mb-6">
                        Infrastructure
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        World Class <br />
                        <span className="text-bcs-gold italic">Facilities</span>
                    </h1>
                </div>
            </section>

            {/* Intro */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-serif font-bold text-bcs-navy mb-6">A Campus Built for Holistic Growth</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Spread over 35 acres of pristine pine forests, the Bishop Cotton School campus is a blend of heritage architecture and modern amenities. Every corner is designed to support the physical, intellectual, and emotional growth of our students.
                    </p>
                </div>
            </section>

            {/* Facilities Grid */}
            <section className="py-10 bg-bcs-light-gray">
                <div className="container mx-auto px-4">
                    {/* Section 1: Sports using generated gym/pool images */}
                    <div className="mb-20">
                        <h3 className="text-3xl font-serif font-bold text-bcs-navy mb-12 text-center">Sports Complex</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group overflow-hidden rounded-lg shadow-xl relative h-96">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                <img src="/swimming.png" alt="Heated Swimming Pool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                                    <h4 className="text-2xl font-bold font-serif mb-2">Heated Swimming Pool</h4>
                                    <p className="text-gray-300 text-sm">A state-of-the-art indoor heated pool allowing for year-round aquatic training and competitions.</p>
                                </div>
                            </div>
                            <div className="group overflow-hidden rounded-lg shadow-xl relative h-96">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                <img src="/gym.png" alt="Multi-purpose Gymnasium" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                                    <h4 className="text-2xl font-bold font-serif mb-2">Curzon Gymnasium</h4>
                                    <p className="text-gray-300 text-sm">A modern multi-purpose hall for basketball, badminton, gymnastics, and indoor fitness.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Facilities List */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-all">
                            <BookOpen className="text-bcs-gold mb-4" size={32} />
                            <h4 className="text-xl font-bold text-bcs-navy mb-3">The Anderson Library</h4>
                            <p className="text-gray-600 text-sm">Home to over 20,000 volumes, rare manuscripts, and a digital research section.</p>
                        </div>
                        <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-all">
                            <Wifi className="text-bcs-gold mb-4" size={32} />
                            <h4 className="text-xl font-bold text-bcs-navy mb-3">IT Centre</h4>
                            <p className="text-gray-600 text-sm">High-speed gigabit internet across campus with dedicated computer labs for coding and robotics.</p>
                        </div>
                        <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-all">
                            <Utensils className="text-bcs-gold mb-4" size={32} />
                            <h4 className="text-xl font-bold text-bcs-navy mb-3">Irwin Hall (Dining)</h4>
                            <p className="text-gray-600 text-sm">A historic dining hall where the entire school eats together, fostering community and etiquette.</p>
                        </div>
                        <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-all">
                            <Stethoscope className="text-bcs-gold mb-4" size={32} />
                            <h4 className="text-xl font-bold text-bcs-navy mb-3">Health Centre</h4>
                            <p className="text-gray-600 text-sm">A 24-bed hospital with a resident doctor and dedicated nursing staff for round-the-clock care.</p>
                        </div>
                        <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-all">
                            <Trophy className="text-bcs-gold mb-4" size={32} />
                            <h4 className="text-xl font-bold text-bcs-navy mb-3">Shooting Range</h4>
                            <p className="text-gray-600 text-sm">Professional 10m indoor shooting range for competitive target practice.</p>
                        </div>
                        <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-all">
                            <Music className="text-bcs-gold mb-4" size={32} />
                            <h4 className="text-xl font-bold text-bcs-navy mb-3">Music School</h4>
                            <p className="text-gray-600 text-sm">Dedicated practice rooms for piano, violin, guitar, and the school brass band.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
