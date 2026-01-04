
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function News() {
    const newsItems = [
        {
            id: 1,
            title: "Inter-School Debating Championship 2025",
            date: "May 15, 2025",
            category: "Academics",
            summary: "BCS debating team secures first position in the regional championship held at St. Edward's.",
        },
        {
            id: 2,
            title: "Annual Sports Day Preparations",
            date: "June 02, 2025",
            category: "Sports",
            summary: "The main field is being prepped for the 166th Annual Sports Day. Parents are invited to attend.",
        },
        {
            id: 3,
            title: "Alumni Reunion Weekend",
            date: "August 10, 2025",
            category: "Events",
            summary: "Old Cottonians from across the globe will gather for a weekend of nostalgia and networking.",
        },
        {
            id: 4,
            title: "Community Service Initiative in Shimla",
            date: "September 05, 2025",
            category: "Community",
            summary: "Class 11 students participated in a cleanliness drive and tree plantation at the Ridge.",
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/news-header.png"
                        alt="School Events"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-bcs-navy/80 mix-blend-multiply"></div>
                </div>
                <div className="container mx-auto px-4 z-10 text-center text-white mt-16">
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-xs md:text-sm tracking-[0.2em] font-medium uppercase mb-6">
                        Updates
                    </span>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">News & Events</h1>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {newsItems.map((item) => (
                            <div key={item.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group border-l-4 border-bcs-gold">
                                <div className="flex items-center text-xs text-gray-500 mb-4 uppercase tracking-widest">
                                    <span className="text-bcs-gold font-bold mr-3">{item.category}</span>
                                    <span className="flex items-center"><Calendar size={12} className="mr-1" /> {item.date}</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-bcs-navy mb-4 group-hover:text-bcs-gold transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mb-6">{item.summary}</p>
                                <Link href="#" className="inline-flex items-center text-sm font-bold text-bcs-navy hover:text-bcs-gold uppercase tracking-wider">
                                    Read Full Story <ChevronRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="px-8 py-3 bg-white border border-bcs-navy text-bcs-navy hover:bg-bcs-navy hover:text-white transition-all uppercase font-bold tracking-wider text-sm rounded">
                            Load More News
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
