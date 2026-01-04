import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero.png"
                    alt="Bishop Cotton School Campus"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bcs-dark-navy/90 via-bcs-navy/40 to-transparent"></div>
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 z-10 text-center text-white pt-20">
                <div className="motion-safe:animate-fade-in-up">
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-xs md:text-sm tracking-[0.2em] font-medium uppercase mb-6">
                        Estd. 1859 • Shimla, India
                    </span>
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                        Overcoming Evil <br />
                        <span className="text-bcs-gold italic">With Good</span>
                    </h1>
                    <p className="font-sans text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Asia's oldest boarding school for boys. A legacy of excellence, character, and holistic education nestled in the Himalayas.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#admissions"
                            className="w-full sm:w-auto px-8 py-4 bg-bcs-gold hover:bg-white hover:text-bcs-navy text-white font-bold uppercase tracking-wider transition-all duration-300 rounded shadow-lg flex items-center justify-center gap-2 group"
                        >
                            Admissions 2026
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white hover:bg-white/10 text-white font-bold uppercase tracking-wider transition-all duration-300 rounded backdrop-blur-sm flex items-center justify-center gap-2">
                            <Play size={18} className="fill-current" />
                            Watch Video
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
