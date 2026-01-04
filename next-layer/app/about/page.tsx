
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Clock, Award, Users, MapPin } from "lucide-react";

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header Section */}
            <section className="relative h-[98vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/hero.png"
                        alt="Bishop Cotton School History"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-bcs-navy/80 mix-blend-multiply"></div>
                </div>
                <div className="container mx-auto px-4 z-10 text-center text-white mt-16">
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-xs md:text-sm tracking-[0.2em] font-medium uppercase mb-6">
                        Our Heritage
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        A Legacy of <br />
                        <span className="text-bcs-gold italic">Excellence</span>
                    </h1>
                </div>
            </section>

            {/* History Narrative */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="font-serif text-lg leading-relaxed space-y-6 text-gray-700">
                            <h2 className="text-4xl font-bold text-bcs-navy mb-8">Founded in 1859</h2>
                            <p>
                                Bishop Cotton School, Shimla, is one of the oldest boys' boarding schools in Asia. It was founded by <strong>Bishop George Edward Lynch Cotton</strong>, son of an Army Captain, who died leading his Regiment in action.
                            </p>
                            <p>
                                Bishop Cotton was a scholar of Westminster and a graduate of Trinity College, Cambridge. In 1852, he was appointed Headmaster of Marlborough College, and in 1858, he was consecrated as the Bishop of Calcutta.
                            </p>
                            <p>
                                Following the "sepoy mutiny" of 1857, Bishop Cotton personally scouted the Shimla hills for a suitable site to found a public school on the lines of the great British public schools. He chose the site at Jutogh, but it was found unsuitable, and the school moved to its present 35-acre campus at Knollswood, Shimla, in 1868.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-bcs-gold rounded-lg z-0"></div>
                            <img
                                src="/library.png" // Placeholder, maybe use library image as 'historic interior'
                                alt="Historic Library"
                                className="w-full relative z-10 rounded-lg shadow-xl"
                            />
                            <div className="absolute -bottom-10 -right-10 bg-white p-6 shadow-xl rounded-lg z-20 max-w-xs hidden md:block">
                                <p className="font-serif italic text-bcs-navy">"Overcome Evil with Good"</p>
                                <span className="text-xs text-gray-500 uppercase tracking-widest mt-2 block">— School Motto</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Headmaster's Message */}
            <section className="py-20 bg-bcs-light-gray">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <div className="w-24 h-24 mx-auto bg-bcs-navy rounded-full mb-8 flex items-center justify-center text-white">
                        {/* Placeholder for Headmaster Photo */}
                        <Users size={32} />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-bcs-navy mb-8">Headmaster's Message</h2>
                    <blockquote className="text-xl md:text-2xl font-light text-gray-600 mb-8 italic leading-relaxed">
                        "At Bishop Cotton, we do not just teach; we sculpt character. Our boys leave not just with certificates, but with the courage to lead, the compassion to serve, and the wisdom to know the difference."
                    </blockquote>
                    <div className="font-serif font-bold text-lg text-bcs-navy">Mr. Simon Weale</div>
                    <div className="text-sm text-bcs-sage tracking-widest uppercase">Director</div>
                </div>
            </section>

            {/* Timeline Section (Simplified) */}
            <section className="py-20 bg-bcs-navy text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold text-center mb-16 text-bcs-gold">Milestones</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-bcs-gold group-hover:text-bcs-navy transition-all">
                                <Clock size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">1859</h3>
                            <p className="text-gray-400 text-sm">Founded by Bishop George Edward Lynch Cotton.</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-bcs-gold group-hover:text-bcs-navy transition-all">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">1868</h3>
                            <p className="text-gray-400 text-sm">School moves to the current Knollswood South campus.</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-bcs-gold group-hover:text-bcs-navy transition-all">
                                <Award size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">1905</h3>
                            <p className="text-gray-400 text-sm">The Great Fire destroys the main building; rebuilt by 1907.</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-bcs-gold group-hover:text-bcs-navy transition-all">
                                <Users size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Today</h3>
                            <p className="text-gray-400 text-sm">A premier institution with a global alumni network.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
