
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BedDouble, Heart, Coffee, Shield } from "lucide-react";

export default function Boarding() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="relative h-[98vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/boarding.png"
                        alt="Boarding Life"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="container mx-auto px-4 z-10 text-center text-white mt-16">
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-xs md:text-sm tracking-[0.2em] font-medium uppercase mb-6">
                        Pastoral Care
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                        A Home Away <br />
                        <span className="text-bcs-gold italic">From Home</span>
                    </h1>
                </div>
            </section>

            {/* Intro */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-serif font-bold text-bcs-navy mb-6">House System</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-12">
                        The heart of Bishop Cotton School lies in its House system. Every boy belongs to one of the four prestigious houses – Curzon, Ibbetson, Lefroy, or Rivaz. The House is not just a place to sleep; it is a brotherhood where lifelong friendships are forged.
                    </p>
                </div>

                <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="h-40 bg-red-800 rounded-lg flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg relative overflow-hidden group">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                        Curzon
                    </div>
                    <div className="h-40 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg relative overflow-hidden group">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                        Ibbetson
                    </div>
                    <div className="h-40 bg-green-700 rounded-lg flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg relative overflow-hidden group">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                        Lefroy
                    </div>
                    <div className="h-40 bg-blue-800 rounded-lg flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg relative overflow-hidden group">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                        Rivaz
                    </div>
                </div>
            </section>

            {/* Facilities Grid */}
            <section className="py-20 bg-bcs-light-gray">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-bcs-navy mb-6">Life in the Dorms</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our dormitories are designed to be warm and inviting. Under the care of dedicated House Masters and Matrons, boys learn independence, time management, and respect for community living.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-700">
                                    <BedDouble className="text-bcs-gold mr-3" size={20} /> comfortable, heated accommodations.
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Shield className="text-bcs-gold mr-3" size={20} /> 24/7 Security and medical supervision.
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Heart className="text-bcs-gold mr-3" size={20} /> Pastoral care focused on emotional well-being.
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Coffee className="text-bcs-gold mr-3" size={20} /> Nutritious, balanced meals in the central Dining Hall.
                                </li>
                            </ul>
                        </div>
                        <div className="h-80 md:h-96 bg-gray-300 rounded-lg overflow-hidden shadow-xl relative">
                            {/* Fallback to reusing an existing image if this page is viewed before specific assets are ready, or reuse boarding image */}
                            <img src="/boarding.png" className="w-full h-full object-cover" alt="Dormitory Interior" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
