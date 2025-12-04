import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Play } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories from 2025</h2>
          <p className="text-slate-400">Real results from real people who took action.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-navy-950 p-6 rounded-2xl border border-slate-800"
            >
                <Quote className="text-gold-500 w-8 h-8 mb-4 opacity-50" />
                <p className="text-slate-300 mb-6 italic">
                    "I was skeptical about crypto, thinking it was just gambling. This program taught me the *business* of digital assets. I've built a 6-figure portfolio in 14 months."
                </p>
                <div className="flex items-center gap-3">
                    <img src="https://picsum.photos/100/100?random=1" className="w-10 h-10 rounded-full border border-gold-500" alt="Student" />
                    <div>
                        <h4 className="text-white font-bold text-sm">Sarah Jenkins</h4>
                        <span className="text-xs text-slate-500">Real Estate Agent</span>
                    </div>
                </div>
            </motion.div>

             {/* Review 2 - Audio Transcript Style */}
             <motion.div 
                whileHover={{ y: -5 }}
                className="bg-navy-950 p-6 rounded-2xl border border-slate-800 relative"
            >
                <div className="absolute top-4 right-4 bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded">Voice Note Transcript</div>
                <div className="flex items-center gap-3 mb-4 mt-2">
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-current" />
                    </div>
                    <div className="h-1 bg-slate-800 flex-1 rounded overflow-hidden">
                        <div className="h-full bg-green-500 w-2/3"></div>
                    </div>
                </div>
                <p className="text-slate-300 mb-6 italic">
                    "...just wanted to say thank you coach. The strategy for the Turkey NFT drop worked perfectly. I cleared my enrollment fee in just one week of trading."
                </p>
                <div className="flex items-center gap-3">
                    <img src="https://picsum.photos/100/100?random=2" className="w-10 h-10 rounded-full border border-green-500" alt="Student" />
                    <div>
                        <h4 className="text-white font-bold text-sm">David Okon</h4>
                        <span className="text-xs text-slate-500">Entrepreneur</span>
                    </div>
                </div>
            </motion.div>

             {/* Review 3 */}
             <motion.div 
                whileHover={{ y: -5 }}
                className="bg-navy-950 p-6 rounded-2xl border border-slate-800"
            >
                <Quote className="text-gold-500 w-8 h-8 mb-4 opacity-50" />
                <p className="text-slate-300 mb-6 italic">
                    "The mentorship is what sets this apart. You're not just watching videos; you're getting real-time analysis. The 2026 outlook module is gold."
                </p>
                <div className="flex items-center gap-3">
                    <img src="https://picsum.photos/100/100?random=3" className="w-10 h-10 rounded-full border border-gold-500" alt="Student" />
                    <div>
                        <h4 className="text-white font-bold text-sm">Elena Rodriguez</h4>
                        <span className="text-xs text-slate-500">Finance Analyst</span>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;