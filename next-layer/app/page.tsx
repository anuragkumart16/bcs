import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { ArrowRight, BookOpen, Trophy, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Welcome / Heritage Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-bcs-gold/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h2 className="font-serif text-bcs-navy text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Welcome to <br />
                  <span className="text-bcs-gold">Bishop Cotton School</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Bishop Cotton School, Shimla, is one of the oldest boys' boarding schools in Asia, having been founded on 28th July 1859 by Bishop George Edward Lynch Cotton.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We strive to achieve our school motto - <span className="italic font-serif text-bcs-navy font-semibold">'Overcome Evil with Good'</span>. The school has a history of producing some of the finest gentlemen who have gone on to serve the nation and the world with distinction.
                </p>
                <Link href="#" className="inline-flex items-center text-bcs-navy font-bold uppercase tracking-wide hover:text-bcs-gold transition-colors group">
                  Read Our History
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>
            </div>

            {/* Visual Grid */}
            <div className="hidden lg:grid lg:w-1/2 grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden relative group">
                  <div className="absolute inset-0 bg-bcs-navy/20 group-hover:bg-transparent transition-all duration-500"></div>
                  {/* Placeholder for real image */}
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590033821368-7f7f469b1561?q=80&w=800&auto=format&fit=crop')" }}></div>
                </div>
                <div className="h-40 bg-gray-200 rounded-lg overflow-hidden relative group">
                  <div className="absolute inset-0 bg-bcs-navy/20 group-hover:bg-transparent transition-all duration-500"></div>
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop')" }}></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-40 bg-gray-200 rounded-lg overflow-hidden relative group">
                  <div className="absolute inset-0 bg-bcs-navy/20 group-hover:bg-transparent transition-all duration-500"></div>
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop')" }}></div>
                </div>
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden relative group">
                  <div className="absolute inset-0 bg-bcs-navy/20 group-hover:bg-transparent transition-all duration-500"></div>
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop')" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-bcs-navy py-16 text-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
              <span className="text-4xl md:text-5xl font-serif font-bold text-bcs-gold block mb-2">1859</span>
              <span className="text-sm uppercase tracking-widest text-gray-300">Founded</span>
            </div>
            <div className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
              <span className="text-4xl md:text-5xl font-serif font-bold text-bcs-gold block mb-2">35+</span>
              <span className="text-sm uppercase tracking-widest text-gray-300">Acres Campus</span>
            </div>
            <div className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
              <span className="text-4xl md:text-5xl font-serif font-bold text-bcs-gold block mb-2">100%</span>
              <span className="text-sm uppercase tracking-widest text-gray-300">Boarding</span>
            </div>
            <div className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
              <span className="text-4xl md:text-5xl font-serif font-bold text-bcs-gold block mb-2">Global</span>
              <span className="text-sm uppercase tracking-widest text-gray-300">Alumni Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Excellence */}
      <section className="py-20 bg-bcs-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-bcs-gold font-bold uppercase tracking-widest text-sm mb-2 block">Why Choose BCS</span>
            <h2 className="text-4xl font-serif font-bold text-bcs-navy">Pillars of Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Academic */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-bcs-navy/5 text-bcs-navy rounded-full flex items-center justify-center mb-6 group-hover:bg-bcs-navy group-hover:text-white transition-colors">
                <BookOpen size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-bcs-navy mb-4">Academic Rigour</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Following the ICSE and ISC curriculum, we foster intellectual curiosity and critical thinking, preparing boys for top global universities.
              </p>
              <Link href="/academics" className="text-bcs-gold font-bold uppercase text-xs tracking-wider flex items-center">
                Learn More <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>

            {/* Sports */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-bcs-navy/5 text-bcs-navy rounded-full flex items-center justify-center mb-6 group-hover:bg-bcs-navy group-hover:text-white transition-colors">
                <Trophy size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-bcs-navy mb-4">Sporting Spirit</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With extensive facilities for cricket, football, hockey, and swimming, we instill sportsmanship, teamwork, and resilience.
              </p>
              <Link href="/facilities" className="text-bcs-gold font-bold uppercase text-xs tracking-wider flex items-center">
                View Facilities <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>

            {/* Character */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-bcs-navy/5 text-bcs-navy rounded-full flex items-center justify-center mb-6 group-hover:bg-bcs-navy group-hover:text-white transition-colors">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-bcs-navy mb-4">Character Building</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Boarding life at BCS develops independence, empathy, and leadership, shaping boys into responsible global citizens.
              </p>
              <Link href="/boarding" className="text-bcs-gold font-bold uppercase text-xs tracking-wider flex items-center">
                Life at BCS <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-bcs-gold font-bold uppercase tracking-widest text-sm mb-2 block">Updates from the Hill</span>
              <h2 className="text-3xl font-serif font-bold text-bcs-navy">Latest News</h2>
            </div>
            <Link href="/news" className="hidden md:flex items-center text-bcs-navy font-bold uppercase tracking-wide hover:text-bcs-gold transition-colors">
              View All News <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="group cursor-pointer">
              <div className="h-48 bg-gray-200 rounded-lg overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-bcs-navy/10 group-hover:bg-transparent transition-all"></div>
                <img src="/news-header.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Debate" />
              </div>
              <span className="text-xs font-bold text-bcs-gold uppercase tracking-widest mb-2 block">Academics</span>
              <h3 className="font-serif font-bold text-xl text-bcs-navy mb-2 group-hover:text-bcs-gold transition-colors">Inter-School Debating Championship 2025</h3>
              <p className="text-sm text-gray-500">BCS debating team secures first position in the regional championship.</p>
            </div>

            {/* News Item 2 */}
            <div className="group cursor-pointer">
              <div className="h-48 bg-gray-200 rounded-lg overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-bcs-navy/10 group-hover:bg-transparent transition-all"></div>
                <img src="/sports.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Sports" />
              </div>
              <span className="text-xs font-bold text-bcs-gold uppercase tracking-widest mb-2 block">Sports</span>
              <h3 className="font-serif font-bold text-xl text-bcs-navy mb-2 group-hover:text-bcs-gold transition-colors">Annual Sports Day Preparations</h3>
              <p className="text-sm text-gray-500">The main field is being prepped for the 166th Annual Sports Day.</p>
            </div>

            {/* News Item 3 */}
            <div className="group cursor-pointer">
              <div className="h-48 bg-gray-200 rounded-lg overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-bcs-navy/10 group-hover:bg-transparent transition-all"></div>
                <div className="w-full h-full bg-bcs-navy flex items-center justify-center text-white p-6 text-center">
                  <div>
                    <span className="text-4xl font-serif font-bold block mb-2">15</span>
                    <span className="uppercase text-sm tracking-widest">May 2025</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold text-bcs-gold uppercase tracking-widest mb-2 block">Events</span>
              <h3 className="font-serif font-bold text-xl text-bcs-navy mb-2 group-hover:text-bcs-gold transition-colors">Alumni Reunion Weekend</h3>
              <p className="text-sm text-gray-500">Old Cottonians from across the globe gather for a weekend of nostalgia.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
