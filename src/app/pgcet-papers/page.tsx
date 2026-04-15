import React from 'react';
import Navbar from '@/components/nav';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PGCET Examination Papers | Arshad Pasha',
  description: 'Access the Karnataka PGCET Examination previous year papers to help students prepare effectively.',
};

export default function PGCETPapers() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900" suppressHydrationWarning>
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16 relative overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-slate-900 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-screen"
            style={{ backgroundImage: `url('/assets/img/pgcet_background.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-blue-900/40 to-slate-950/90 mix-blend-multiply"></div>
          
          {/* Animated Background Particles/Glows */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
          
          {/* Header Section */}
          <div className="mb-12 text-center max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-300 text-sm font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Educational Resources
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-blue-200 drop-shadow-sm font-orbitron tracking-tight">
              PGCET Examination <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Papers</span>
            </h1>
            <p className="text-blue-100/80 text-lg md:text-xl font-light">
              Access the Karnataka PGCET Examination previous year papers. This resource is provided to help students prepare effectively for their upcoming exams.
            </p>
          </div>
          
          {/* Main Content Box */}
          <div className="w-full max-w-5xl rounded-3xl p-[1px] bg-gradient-to-b from-blue-400/30 via-slate-700/50 to-purple-500/20 shadow-[0_0_40px_rgba(14,165,233,0.15)] group hover:shadow-[0_0_60px_rgba(14,165,233,0.2)] transition-shadow duration-700">
            <div className="w-full bg-slate-900/90 backdrop-blur-xl rounded-3xl p-5 md:p-8 flex flex-col items-center h-full relative overflow-hidden">
              
              {/* Internal subtle glow */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-50"></div>
              
              <div className="flex items-center justify-between w-full mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-white flex items-center gap-4">
                  <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full inline-block shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
                  PGCET 2022 Document
                </h2>
                
                <a 
                  href="/assets/pgcet/pgcet-2022.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-blue-600/20 hover:bg-blue-600/40 text-cyan-300 border border-blue-500/30 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  <span>Download</span>
                </a>
              </div>
              
              {/* PDF Viewer Container */}
              <div className="w-full h-[600px] md:h-[800px] rounded-2xl overflow-hidden shadow-inner border border-slate-700/60 bg-slate-800/80 relative">
                
                {/* Fallback Content (shows behind document if loaded or replaces if failing) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-slate-800 z-0">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                    <svg className="w-20 h-20 text-cyan-400/60 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <p className="text-xl font-medium text-blue-100 mb-2">Loading Document...</p>
                  <p className="text-blue-300/60 mb-8 max-w-sm">If the document doesn't load automatically, your browser may not support inline PDFs.</p>
                  <a 
                    href="/assets/pgcet/pgcet-2022.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1 transition-all duration-300 font-medium"
                  >
                    Open PDF Directly
                  </a>
                </div>
                
                {/* The Object tag overlaying top, if loaded success it covers fallback */}
                <object 
                  data="/assets/pgcet/pgcet-2022.pdf" 
                  type="application/pdf" 
                  width="100%" 
                  height="100%"
                  className="relative z-10 w-full h-full border-none pointer-events-auto bg-white/5"
                >
                </object>
              </div>
              
              <div className="mt-8 pt-6 w-full border-t border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-400 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                  Source: Karnataka Examination Authority
                </p>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300">Year: 2022</span>
                  <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300">Format: PDF</span>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
