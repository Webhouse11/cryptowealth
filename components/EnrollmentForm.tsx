import React, { useState } from 'react';
import { EnrollmentFormData } from '../types';
import { Send, Loader2 } from 'lucide-react';

const EnrollmentForm: React.FC = () => {
  const [formData, setFormData] = useState<EnrollmentFormData>({
    fullName: '',
    email: '',
    whatsapp: '',
    country: '',
    knowledgeLevel: 'Beginner',
    paymentMethod: 'Crypto',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
        <section id="enrollment" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6 max-w-2xl text-center">
                <div className="bg-green-500/10 border border-green-500 p-12 rounded-2xl">
                    <h3 className="text-3xl font-bold text-white mb-4">Application Received!</h3>
                    <p className="text-slate-300 mb-6">
                        Welcome to the future, {formData.fullName}. Check your WhatsApp/Email immediately for payment instructions and access details.
                    </p>
                    <a 
                      href="https://wa.link/ynaedl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors"
                    >
                      Check WhatsApp Now
                    </a>
                </div>
            </div>
        </section>
    )
  }

  return (
    <section id="enrollment" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Join the 2026 Executive Class</h2>
            <p className="text-slate-400 mt-2">Fill the form below to begin your journey.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
                <label className="block text-slate-400 text-sm mb-2">Full Name</label>
                <input 
                    required
                    type="text" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                    onChange={e => setFormData({...formData, fullName: e.target.value})}
                />
            </div>
            <div>
                <label className="block text-slate-400 text-sm mb-2">WhatsApp Number</label>
                <input 
                    required
                    type="tel" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                    onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                />
            </div>
          </div>

          <div>
            <label className="block text-slate-400 text-sm mb-2">Email Address</label>
            <input 
                required
                type="email" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="john@example.com"
                onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             <div>
                <label className="block text-slate-400 text-sm mb-2">Country</label>
                <input 
                    required
                    type="text" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="United States"
                    onChange={e => setFormData({...formData, country: e.target.value})}
                />
             </div>
             <div>
                <label className="block text-slate-400 text-sm mb-2">Current Knowledge</label>
                <select 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                    onChange={e => setFormData({...formData, knowledgeLevel: e.target.value as any})}
                >
                    <option value="Beginner">Beginner (New to Crypto)</option>
                    <option value="Intermediate">Intermediate (Have bought before)</option>
                    <option value="Advanced">Advanced (Active Trader)</option>
                </select>
             </div>
          </div>

          <div>
            <label className="block text-slate-400 text-sm mb-2">Preferred Payment Method</label>
            <div className="grid grid-cols-3 gap-3">
                {['Crypto', 'Card', 'Bank Transfer'].map((method) => (
                    <button
                        type="button"
                        key={method}
                        onClick={() => setFormData({...formData, paymentMethod: method as any})}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                            formData.paymentMethod === method 
                            ? 'bg-blue-600 border-blue-500 text-white' 
                            : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'
                        }`}
                    >
                        {method}
                    </button>
                ))}
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting ? <Loader2 className="animate-spin" /> : <>Join the 2026 Executive Class <Send className="w-4 h-4" /></>}
          </button>

        </form>
      </div>
    </section>
  );
};

export default EnrollmentForm;