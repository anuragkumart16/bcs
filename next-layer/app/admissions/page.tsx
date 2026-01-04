
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { CheckCircle, FileText, Calendar, CreditCard } from "lucide-react";

export default function Admissions() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="relative h-[50vh] flex items-center justify-center bg-bcs-navy text-white">
                <div className="absolute inset-0 overflow-hidden">
                    {/* Can verify if we want another generated image here later */}
                    <div className="absolute inset-0 bg-bcs-navy/90"></div>
                </div>
                <div className="relative z-10 text-center container mx-auto px-4 mt-16">
                    <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">Admissions</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">Join a tradition of excellence. Begin your journey at Bishop Cotton School.</p>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-bcs-navy mb-4">How to Apply</h2>
                        <p className="text-gray-600">The admission process is designed to identify boys with potential and character.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

                        {/* Step 1 */}
                        <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center">
                            <div className="w-24 h-24 mx-auto bg-bcs-light-gray rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm font-serif text-3xl font-bold text-bcs-navy">1</div>
                            <h3 className="text-xl font-bold text-bcs-navy mb-4">Registration</h3>
                            <p className="text-gray-600 text-sm mb-6">
                                Complete the online registration form and submit the non-refundable registration fee.
                            </p>
                            <div className="flex justify-center text-bcs-gold">
                                <FileText size={24} />
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center">
                            <div className="w-24 h-24 mx-auto bg-bcs-light-gray rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm font-serif text-3xl font-bold text-bcs-navy">2</div>
                            <h3 className="text-xl font-bold text-bcs-navy mb-4">Entrance Exam</h3>
                            <p className="text-gray-600 text-sm mb-6">
                                Appear for the General Entrance Assessment held at the school campus or designated centers.
                            </p>
                            <div className="flex justify-center text-bcs-gold">
                                <Calendar size={24} />
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center">
                            <div className="w-24 h-24 mx-auto bg-bcs-light-gray rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm font-serif text-3xl font-bold text-bcs-navy">3</div>
                            <h3 className="text-xl font-bold text-bcs-navy mb-4">Observation</h3>
                            <p className="text-gray-600 text-sm mb-6">
                                Successful candidates are invited for an interaction with the Headmaster and final enrollment.
                            </p>
                            <div className="flex justify-center text-bcs-gold">
                                <CheckCircle size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fee Structure Summary */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-serif font-bold text-bcs-navy mb-12 text-center">Fee Structure Overview</h2>

                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-bcs-navy text-white">
                                <tr>
                                    <th className="p-4 font-serif text-lg">Fee Component</th>
                                    <th className="p-4 font-serif text-lg text-right">Amount (INR)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="p-4 font-medium text-gray-700">Registration Fee (One time)</td>
                                    <td className="p-4 text-right text-gray-900 font-bold">₹ 15,000</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-gray-700">Admission Fee (One time)</td>
                                    <td className="p-4 text-right text-gray-900 font-bold">₹ 1,50,000</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-gray-700">Refundable Security Deposit</td>
                                    <td className="p-4 text-right text-gray-900 font-bold">₹ 1,00,000</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-gray-700">Annual School Fees (Approx.)</td>
                                    <td className="p-4 text-right text-gray-900 font-bold">₹ 6,50,000</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="p-4 bg-bcs-light-gray text-xs text-gray-600">
                            * Fees are subject to revision annually. Please download the full prospectus for detailed breakdown.
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="#"
                            className="inline-flex items-center px-8 py-4 bg-bcs-gold text-white font-bold uppercase tracking-wider rounded hover:bg-bcs-navy transition-colors shadow-lg"
                        >
                            <CreditCard className="mr-2" size={20} />
                            Pay Registration Fee
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
