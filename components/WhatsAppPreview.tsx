import React from 'react';
import { Phone, Video, MoreVertical, MessageSquare } from 'lucide-react';

const WhatsAppPreview: React.FC = () => {
  const calls = [
    { type: 'video', name: 'Mentor (Executive Class)', time: 'Yesterday, 8:45 PM', status: 'Incoming', duration: '45:20' },
    { type: 'voice', name: 'Mentor (Executive Class)', time: 'Today, 10:30 AM', status: 'Outgoing', duration: '12:05' },
    { type: 'voice', name: 'Crypto Alpha Group', time: 'Today, 2:15 PM', status: 'Incoming', duration: 'Group Call' },
  ];

  return (
    <section id="whatsapp-section" className="py-20 bg-navy-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Direct Access to <br /><span className="text-green-500">Expert Guidance</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Unlike pre-recorded courses where you are left alone, our Executive Program includes direct access. Get your questions answered, analyze charts together, and navigate the market with a guide.
            </p>
            <a 
              href="https://wa.link/ynaedl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-900/30"
            >
              <MessageSquare className="w-5 h-5" />
              Chat With The Mentor Now
            </a>
          </div>

          <div className="md:w-1/2 flex justify-center">
            {/* Phone Mockup */}
            <div className="w-80 bg-slate-900 border-8 border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>
              
              {/* Header */}
              <div className="bg-slate-800 p-6 pt-10 flex justify-between items-center text-white">
                <span className="font-semibold text-lg">Calls</span>
                <div className="flex gap-4">
                    <Video className="w-5 h-5" />
                    <Phone className="w-5 h-5" />
                </div>
              </div>

              {/* List */}
              <div className="bg-slate-900 h-96 p-2 space-y-2">
                {calls.map((call, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                            {call.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                            <h4 className="text-white font-medium text-sm">{call.name}</h4>
                            <div className="flex items-center gap-1 text-slate-500 text-xs">
                                {call.type === 'video' ? <Video className="w-3 h-3" /> : <Phone className="w-3 h-3" />}
                                <span>{call.status}</span>
                            </div>
                        </div>
                        <div className="text-right">
                             <span className="text-green-500 text-xs">{call.time.split(',')[0]}</span>
                        </div>
                    </div>
                ))}
                 <div className="mt-4 p-4 bg-slate-800 rounded-xl border border-slate-700">
                    <p className="text-xs text-slate-400 text-center">
                        "The weekly calls changed my entire trading strategy. Worth every penny."
                    </p>
                 </div>
              </div>
              
              {/* Bottom Nav Mockup */}
              <div className="absolute bottom-0 w-full bg-slate-800 h-16 flex justify-around items-center text-slate-500">
                 <div className="w-12 h-1 bg-slate-500 rounded-full mb-2"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatsAppPreview;