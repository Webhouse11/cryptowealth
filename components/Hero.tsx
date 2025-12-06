import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToEnroll = () => {
    const element = document.getElementById('enrollment');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy-950">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-sm font-semibold mb-6 tracking-wide">
            EXECUTIVE BATCH 2026
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Digital Assets Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600">Rewriting Wealth</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            The greatest wealth shift of the 21st century is happening now. 
            Don't just watch from the sidelines. Secure your financial future with executive-level mentorship.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToEnroll}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-white font-bold rounded-xl shadow-lg shadow-amber-900/20 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Enroll Now <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="https://wa.link/zjb9kc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              Chat With Mentor
            </a>
          </div>
        </motion.div>
        
        {/* Social Proof Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-slate-400 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-lg">5,000+</span> Students Trained in 2025
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-700"></div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-lg">$100M+</span> Collective Portfolio Growth
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-700"></div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-lg">4.9/5</span> Student Satisfaction
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;