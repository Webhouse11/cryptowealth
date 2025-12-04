import React, { useState } from 'react';
import { Download, MessageCircle, Loader2 } from 'lucide-react';
import { jsPDF } from "jspdf";

const FooterCTA: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadGuide = () => {
    setIsGenerating(true);
    
    // Allow UI to update before blocking with PDF generation
    setTimeout(() => {
      try {
        const doc = new jsPDF();
        let y = 20;
        const lineHeight = 7;
        const margin = 20;
        const pageWidth = doc.internal.pageSize.width;
        const contentWidth = pageWidth - (margin * 2);

        // Helper functions
        const checkPageBreak = (height: number) => {
          if (y + height > 280) {
            doc.addPage();
            y = 20;
          }
        };

        const addTitle = (text: string) => {
          checkPageBreak(15);
          doc.setFontSize(18);
          doc.setTextColor(0, 51, 153); // Navy Blue
          doc.setFont("helvetica", "bold");
          doc.text(text, margin, y);
          y += 10;
        };

        const addSubtitle = (text: string) => {
          checkPageBreak(10);
          doc.setFontSize(14);
          doc.setTextColor(30, 41, 59); // Slate 800
          doc.setFont("helvetica", "bold");
          doc.text(text, margin, y);
          y += 10;
        };

        const addParagraph = (text: string) => {
          doc.setFontSize(11);
          doc.setTextColor(51, 65, 85); // Slate 700
          doc.setFont("helvetica", "normal");
          const splitText = doc.splitTextToSize(text, contentWidth);
          checkPageBreak(splitText.length * lineHeight + 5);
          doc.text(splitText, margin, y);
          y += (splitText.length * lineHeight) + 5;
        };

        const addBullet = (text: string) => {
          doc.setFontSize(11);
          doc.setTextColor(51, 65, 85);
          const splitText = doc.splitTextToSize(`• ${text}`, contentWidth);
          checkPageBreak(splitText.length * lineHeight + 2);
          doc.text(splitText, margin, y);
          y += (splitText.length * lineHeight) + 2;
        };

        const addSectionSpace = () => {
          y += 5;
        };

        // --- PDF CONTENT START ---

        // Page 1: Header & Bio
        doc.setFontSize(24);
        doc.setTextColor(0, 51, 153);
        doc.setFont("helvetica", "bold");
        doc.text("COURSE GUIDE", pageWidth / 2, y, { align: "center" });
        y += 20;

        addSubtitle("Welcome to My Page — I Am Oluranti Clement");
        addParagraph("Your Trusted Guide in the Global Digital Asset Economy");
        
        addParagraph("My name is Oluranti Clement, a full-time digital asset trader, blockchain educator, business strategist, and multi-industry consultant with over a decade of experience empowering individuals and business owners across Nigeria, Africa, and beyond.");
        
        addParagraph("I have:");
        addBullet("Trained 1,000+ students in digital asset trading, crypto income, and blockchain opportunities");
        addBullet("Built and scaled brands with full-stack digital marketing and sales systems");
        addBullet("Helped SMEs unlock predictable income using data-driven online strategies");
        addBullet("Led multiple tech-focused initiatives for wealth creation, responsible investing, and digital transformation");
        
        addSectionSpace();
        addParagraph("My mission is simple: To help you understand crypto the right way — safely, profitably, and with long-term vision.");

        addSectionSpace();
        doc.setLineWidth(0.5);
        doc.line(margin, y, pageWidth - margin, y);
        y += 10;

        // Page 2 Content
        addTitle("THE COMPLETE CRYPTO MASTERCLASS (2026 Edition)");
        
        addSubtitle("1. Crypto Fundamentals (Beginner Level)");
        addBullet("What cryptocurrency really is");
        addBullet("Why digital assets keep growing globally");
        addBullet("How blockchain works in simple English");
        addBullet("Crypto vs. stocks vs. real estate");
        addBullet("Why many people get rich — and why many still ignore crypto today");
        addBullet("Understanding market cycles (Bull, Bear, Accumulation)");

        addSectionSpace();
        addSubtitle("2. Digital Asset Laws, Safety & Security");
        addBullet("Global & Nigerian crypto regulations");
        addBullet("What CBN allows & prohibits");
        addBullet("How to use exchanges safely");
        addBullet("How to secure your wallet from scams & hacks");
        addBullet("Best practices for beginners");
        addBullet("Red flags to avoid in crypto");

        addSectionSpace();
        addSubtitle("3. Portfolio Building for Long-Term Growth");
        addBullet("How to choose the right coins");
        addBullet("Asset allocation (40/30/20/10 model)");
        addBullet("Building a 2025–2030 wealth portfolio");
        addBullet("Dollar-Cost Averaging (DCA)");
        addBullet("When to buy, hold, and rebalance");

        // Force new page for next section if getting full
        if (y > 200) { doc.addPage(); y = 20; }

        addSectionSpace();
        addSubtitle("4. Practical Spot Trading");
        addBullet("Chart reading basics");
        addBullet("Support & resistance");
        addBullet("Market structure");
        addBullet("Volume analysis");
        addBullet("Entry, exit, stop-loss strategies");

        addSectionSpace();
        addSubtitle("5. Responsible Futures Trading");
        addBullet("Understanding leverage");
        addBullet("Risk management");
        addBullet("How to avoid liquidation");
        addBullet("Beginner-friendly futures blueprint");

        addSectionSpace();
        addSubtitle("6. Blockchain Income Pathways (2026 Edition)");
        addBullet("Airdrops");
        addBullet("Staking");
        addBullet("Validator income");
        addBullet("SocialFi & Web3 micro-earning");
        addBullet("DeFi farming (safe)");
        addBullet("AI–crypto hybrid income");

        doc.addPage(); y = 20;

        addSubtitle("7. Market Analysis");
        addBullet("Technical analysis");
        addBullet("Fundamental analysis");
        addBullet("On-chain analysis");
        addBullet("Sentiment reading & Market timing");

        addSectionSpace();
        addSubtitle("8. Earning Models in 2026");
        addBullet("AI-driven trading");
        addBullet("Real World Asset income");
        addBullet("Tokenized markets & Social tokens");
        addBullet("Smart agent systems");

        addSectionSpace();
        addSubtitle("9. Free Tools for Daily Guidance");
        addBullet("Free scanners");
        addBullet("Free bots");
        addBullet("On-chain dashboards & Indicator tools");

        addSectionSpace();
        addSubtitle("10. Meme Coin Creation");
        addBullet("Token standards & No-code token tools");
        addBullet("Tokenomics & DEX listing");
        addBullet("Community building");

        addSectionSpace();
        addSubtitle("11. Turkey NFTs Creation");
        addBullet("Minting & NFT pricing");
        addBullet("Weekly drop strategy");

        addSectionSpace();
        doc.setDrawColor(200);
        doc.setLineWidth(1);
        doc.rect(margin, y, contentWidth, 40);
        y += 10;
        
        doc.setFontSize(12);
        doc.setTextColor(0, 51, 153);
        doc.setFont("helvetica", "bold");
        doc.text("THE COMPLETE CRYPTO COURSE SUMMARY", pageWidth/2, y, {align: 'center'});
        y += 8;
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "normal");
        doc.text("BEGINNER → Wallet setup, safety, spot trading", margin + 5, y);
        y += 6;
        doc.text("INTERMEDIATE → TA, on-chain tools, staking", margin + 5, y);
        y += 6;
        doc.text("ADVANCED → Futures, algo trading, NFTs, launching tokens", margin + 5, y);

        // Save
        doc.save("Digital_Asset_Executive_Mastery_Guide_2026.pdf");
      } catch (error) {
        console.error("Error generating PDF:", error);
        alert("Sorry, there was an issue generating the PDF. Please try again.");
      } finally {
        setIsGenerating(false);
      }
    }, 100);
  };

  return (
    <footer className="bg-navy-950 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6 text-center">
        
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Digital assets are rewriting global wealth. <br />
            <span className="text-slate-500">You can either watch it happen... or be part of it.</span>
          </h2>
          <p className="text-xl text-blue-400 mb-10">
            Join the next 5,000 empowered individuals in 2026.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
            <button 
                onClick={() => document.getElementById('enrollment')?.scrollIntoView({behavior:'smooth'})} 
                className="w-full md:w-auto px-8 py-4 bg-white text-navy-950 font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-lg"
            >
              Enroll Now
            </button>
            
            <a 
              href="https://wa.link/ynaedl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>

            <button 
                onClick={handleDownloadGuide}
                disabled={isGenerating}
                className="w-full md:w-auto px-8 py-4 bg-transparent border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />} 
              {isGenerating ? "Generating..." : "Download Course Guide"}
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>&copy; 2025 Digital Asset Mastery. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;