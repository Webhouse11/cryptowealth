import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const features = [
  "Executive-Level Curriculum",
  "Direct Personalized Mentorship",
  "Lifetime Access to Materials",
  "Real 2024-2025 Case Studies",
  "Professional Trading Tools",
  "Weekly Live Check-ins",
  "Certification of Completion",
  "Access to Elite Alpha Community"
];

const WhyDifferent: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <img 
            src="https://picsum.photos/800/800" 
            alt="Mentorship Session" 
            className="rounded-2xl shadow-2xl shadow-blue-900/20 grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Not Just A Course. <br />
            <span className="text-blue-400">A Wealth Ecosystem.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                <span className="text-slate-200 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-blue-900/20 border border-blue-800 rounded-xl">
            <p className="text-blue-200 italic">
              "We don't just teach you how to buy crypto. We teach you how to think like a fund manager and build sustained wealth."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;