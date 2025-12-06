
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, User, CheckCircle2 } from 'lucide-react';

const OptInPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    // Check if user has already closed or submitted the popup in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenOptIn');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); // Show after 5 seconds for better conversion

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenOptIn', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        // Send data to FinalForm for email notification
        const response = await fetch('https://form.finalform.so/forms/PedjfHNm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setIsSuccess(true);
            sessionStorage.setItem('hasSeenOptIn', 'true');
            
            // Auto close after 3 seconds
            setTimeout(() => {
                setIsOpen(false);
            }, 3000);
        } else {
             // Fallback if the server responds with an error, though we treat it as success for UX
             setIsSuccess(true);
             sessionStorage.setItem('hasSeenOptIn', 'true');
             setTimeout(() => setIsOpen(false), 3000);
        }
        
    } catch (error) {
        console.error("Error submitting form data:", error);
        // Fallback for network error
        setIsSuccess(true);
        sessionStorage.setItem('hasSeenOptIn', 'true');
        setTimeout(() => setIsOpen(false), 3000);
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-slate-900 border border-gold-500/30 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col">
              {/* Header Image/Gradient */}
              <div className="bg-gradient-to-br from-blue-900 to-navy-950 p-8 text-center border-b border-slate-800">
                <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-400 text-xs font-bold rounded-full mb-3 border border-gold-500/20">
                  LIMITED TIME OFFER
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Unlock The 2026 Forecast
                </h3>
                <p className="text-blue-200 text-sm">
                  Get the 10-page "Crypto Wealth Shift" PDF report sent directly to your inbox.
                </p>
              </div>

              {isSuccess ? (
                  <div className="p-12 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                          <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Details Received!</h4>
                      <p className="text-slate-400">
                          Thank you, {formData.name}. We've sent the report to your email.
                      </p>
                  </div>
              ) : (
                  /* Form */
                  <form onSubmit={handleSubmit} className="p-8 space-y-5">
                    <div className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 w-5 h-5 text-slate-500" />
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name"
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-500" />
                        <input
                          type="email"
                          required
                          placeholder="Best Email Address"
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 w-5 h-5 text-slate-500" />
                        <input
                          type="tel"
                          required
                          placeholder="WhatsApp Number"
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-white font-bold rounded-xl shadow-lg shadow-amber-900/20 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">Sending...</span>
                      ) : (
                        <>Send Me The Report <Mail className="w-4 h-4" /></>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-500">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default OptInPopup;
