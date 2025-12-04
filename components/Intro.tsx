import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';

const Intro: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A New Global <span className="text-blue-400">Wealth Frontier</span>
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              From ordinary families rising from financial hardship to young professionals building empires from their laptops, digital assets have leveled the playing field. Businesses are integrating blockchain, and early adopters are securing generational wealth.
            </p>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 mb-8">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="text-red-500 w-5 h-5" />
                Why are you still on the sidelines?
              </h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></span>
                  Fear of market volatility and losing money.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></span>
                  Overwhelmed by "technical" jargon and complex charts.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></span>
                  Lack of a proven, step-by-step roadmap.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-30"></div>
            <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="text-blue-400 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The Executive Solution</h3>
              <p className="text-slate-300 mb-6">
                This isn't a YouTube tutorial. The <strong>Executive Digital Asset Mastery Program</strong> is a comprehensive ecosystem designed for serious individuals who want to master the art of crypto investing, trading, and asset management in 2026.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 p-4 rounded-xl">
                  <TrendingUp className="text-green-400 w-6 h-6 mb-2" />
                  <div className="text-white font-semibold text-sm">Strategic Growth</div>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl">
                  <ShieldCheck className="text-gold-400 w-6 h-6 mb-2" />
                  <div className="text-white font-semibold text-sm">Asset Security</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Intro;