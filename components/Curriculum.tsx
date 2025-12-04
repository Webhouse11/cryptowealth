import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Shield, BarChart2, Zap, Lock, Globe, Layers, Gift } from 'lucide-react';

const modules = [
  { icon: BookOpen, title: "Crypto Fundamentals", desc: "Understand blockchain, wallets, and the history of money." },
  { icon: Shield, title: "Asset Security & Law", desc: "Protect your wealth from hacks, scams, and legal pitfalls." },
  { icon: Layers, title: "Portfolio Building", desc: "Construct a recession-proof portfolio for long-term growth." },
  { icon: BarChart2, title: "Spot & Futures Trading", desc: "Master technical analysis and risk management strategies." },
  { icon: Zap, title: "Income Pathways", desc: "Staking, farming, and passive income models for 2026." },
  { icon: Globe, title: "Market Analysis", desc: "Read global macro-trends and on-chain data like a pro." },
];

const Curriculum: React.FC = () => {
  return (
    <section className="py-20 bg-navy-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What This Training Offers</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A complete A-Z syllabus designed to take you from novice to expert in 8 weeks.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {modules.map((mod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <mod.icon className="w-6 h-6 text-blue-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{mod.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{mod.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Special Bonus Section */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-900/40 to-navy-900 border border-amber-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Gift className="w-64 h-64 text-amber-500" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left md:w-2/3">
              <div className="inline-block bg-amber-500 text-navy-950 text-xs font-bold px-3 py-1 rounded-full mb-4">
                SPECIAL FOR FIRST 20 STUDENTS
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Top Secret: Money Printing Hacks & NFT Creation
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-amber-500" />
                  <span>Free access to premium trading bots for daily signals.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-amber-500" />
                  <span>"Non-stop money" market agnostic strategies.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-amber-500" />
                  <span><strong>Masterclass:</strong> Create & Sell your own Meme Tokens & NFTs weekly.</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 w-full">
              <button onClick={() => document.getElementById('enrollment')?.scrollIntoView({behavior:'smooth'})} className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-navy-900 font-bold rounded-xl shadow-lg transition-transform hover:scale-105">
                Claim Bonus Slot Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Curriculum;