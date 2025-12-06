
import React from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Curriculum from './components/Curriculum';
import WhyDifferent from './components/WhyDifferent';
import Testimonials from './components/Testimonials';
import WhatsAppPreview from './components/WhatsAppPreview';
import Pricing from './components/Pricing';
import EnrollmentForm from './components/EnrollmentForm';
import FooterCTA from './components/FooterCTA';
import OptInPopup from './components/OptInPopup';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 font-sans selection:bg-gold-500 selection:text-white">
      <OptInPopup />
      <Hero />
      <Intro />
      <Curriculum />
      <WhyDifferent />
      <Testimonials />
      <WhatsAppPreview />
      <Pricing />
      <EnrollmentForm />
      <FooterCTA />
    </div>
  );
};

export default App;
