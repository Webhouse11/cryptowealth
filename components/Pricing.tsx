import React, { useState, useEffect } from 'react';
import { Check, Clock } from 'lucide-react';

const Pricing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 59, s: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { h: prev.h, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
        return { h: 23, m: 59, s: 59 }; // Reset loop
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-navy-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-slate-900 border border-gold-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-gold-900/10">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-gold-600 to-amber-600 p-6 text-center">
                <h3 className="text-2xl font-bold text-white tracking-wide">EXECUTIVE TRAINING PROGRAM FEE</h3>
                <p className="text-amber-100 font-medium">Batch 2026 Intake</p>
            </div>

            <div className="p-8 md:p-12 text-center">
                {/* Price */}
                <div className="flex justify-center items-end gap-2 mb-6">
                    <span className="text-slate-500 text-2xl line-through">$500</span>
                    <span className="text-6xl font-extrabold text-white">$130</span>
                    <span className="text-slate-400 font-medium">one-time</span>
                </div>

                {/* Timer */}
                <div className="flex justify-center items-center gap-4 text-amber-500 bg-amber-950/30 py-3 rounded-lg mb-8 max-w-sm mx-auto border border-amber-500/20">
                    <Clock className="w-5 h-5 animate-pulse" />
                    <span className="font-mono font-bold text-lg">
                        {String(timeLeft.h).padStart(2, '0')}:{String(timeLeft.m).padStart(2, '0')}:{String(timeLeft.s).padStart(2, '0')}
                    </span>
                    <span className="text-sm">Discount Ends Soon</span>
                </div>

                {/* Breakdown */}
                <div className="space-y-4 text-left max-w-md mx-auto mb-10">
                    {[
                        "Full 8-Week Executive Training",
                        "Lifetime Community Access",
                        "Daily Trading Signals (Bot Access)",
                        "Personalized Mentorship Calls",
                        "Completion Certificate",
                        "100% Satisfaction Guarantee"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                <Check className="w-3 h-3 text-green-500" />
                            </div>
                            <span className="text-slate-300">{item}</span>
                        </div>
                    ))}
                </div>

                <button 
                    onClick={() => document.getElementById('enrollment')?.scrollIntoView({behavior:'smooth'})}
                    className="w-full py-4 bg-white hover:bg-slate-200 text-slate-900 font-extrabold rounded-xl transition-colors text-lg"
                >
                    SECURE YOUR SPOT NOW
                </button>
                
                <p className="mt-4 text-xs text-slate-500">
                    Secured by 256-bit encryption. 30-Day Money-Back Guarantee.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;