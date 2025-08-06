"use client";
import React, { useState } from "react";
import { Download, Mail, Github, Linkedin, Instagram, Twitter, ExternalLink, Sparkles, Phone, Copy, Check, Facebook } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  type Sparkle = { id: number; x: number; y: number; delay: number; scale: number };
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "jptayco1109@gmail.com";
  const phone = "+63 976 580 3883";

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Generate sparkle positions
    const newSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.5,
      scale: 0.5 + Math.random() * 0.5,
    }));
    setSparkles(newSparkles);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTimeout(() => setSparkles([]), 600);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch (err) {
      console.error('Failed to copy phone:', err);
    }
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phone}`;
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/jptaycs/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/jeromepatricktayco/", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/jptayco?s=11", label: "Twitter" },
  ];

  return (
    <div className="relative mt-16 overflow-hidden">
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-pink-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative backdrop-blur-sm  border border-slate-700/50 rounded-2xl p-8 mx-0 shadow-2xl">

        {/* Sparkles */}
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute pointer-events-none"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDelay: `${sparkle.delay}s`,
              transform: `scale(${sparkle.scale})`,
            }}
          >
            <Sparkles className="w-4 h-4 text-red-400 animate-ping" />
          </div>
        ))}

        {/* Header section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-3">
            Let's connect and collaborate
          </h3>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to create something amazing together? Get in touch through your preferred method or download my resume.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Email Card */}
          <div className="group">
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:border-slate-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={20} className="text-white" />
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={handleCopyEmail}
                    className="p-2 bg-slate-700/50 hover:bg-slate-600 rounded-lg transition-all duration-200 group/copy hover:scale-110"
                    title="Copy email"
                  >
                    {copiedEmail ? (
                      <Check size={14} className="text-green-400" />
                    ) : (
                      <Copy size={14} className="text-slate-400 group-hover/copy:text-white" />
                    )}
                  </button>
                  <button 
                    onClick={handleEmailClick}
                    className="p-2 bg-slate-700/50 hover:bg-slate-600 rounded-lg transition-all duration-200 group/mail hover:scale-110"
                    title="Send email"
                  >
                    <ExternalLink size={14} className="text-slate-400 group-hover/mail:text-blue-400" />
                  </button>
                </div>
              </div>
              
              <h4 className="font-semibold text-white mb-1">Email</h4>
              <p className="text-slate-400 text-sm mb-3">Drop me a line anytime</p>
              <p className="text-white font-mono text-xs bg-slate-700/30 px-3 py-2 rounded-lg break-all border border-slate-600/30">
                {email}
              </p>
              
              {copiedEmail && (
                <div className="mt-2 text-green-400 text-xs flex items-center animate-fade-in">
                  <Check size={12} className="mr-1" />
                  Email copied!
                </div>
              )}
            </div>
          </div>

          {/* Phone Card */}
          <div className="group">
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:border-slate-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone size={20} className="text-white" />
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={handleCopyPhone}
                    className="p-2 bg-slate-700/50 hover:bg-slate-600 rounded-lg transition-all duration-200 group/copy hover:scale-110"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <Check size={14} className="text-green-400" />
                    ) : (
                      <Copy size={14} className="text-slate-400 group-hover/copy:text-white" />
                    )}
                  </button>
                  <button 
                    onClick={handlePhoneClick}
                    className="p-2 bg-slate-700/50 hover:bg-slate-600 rounded-lg transition-all duration-200 group/phone hover:scale-110"
                    title="Call now"
                  >
                    <ExternalLink size={14} className="text-slate-400 group-hover/phone:text-green-400" />
                  </button>
                </div>
              </div>
              
              <h4 className="font-semibold text-white mb-1">Phone</h4>
              <p className="text-slate-400 text-sm mb-3">Let's talk directly</p>
              <p className="text-white font-mono text-xs bg-slate-700/30 px-3 py-2 rounded-lg border border-slate-600/30">
                {phone}
              </p>
              
              {copiedPhone && (
                <div className="mt-2 text-green-400 text-xs flex items-center animate-fade-in">
                  <Check size={12} className="mr-1" />
                  Phone copied!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 border border-red-500/20 rounded-xl p-6 backdrop-blur-md mb-8">
          <h4 className="text-xl font-bold text-center mb-3">Ready to start something amazing?</h4>
          <p className="text-slate-300 text-center text-sm mb-6">
            Whether it's a project collaboration, job opportunity, or just a friendly chat about tech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="group relative bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
            <a href="/resume" className="flex items-center gap-2">
              <Download className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'animate-bounce' : ''}`} />
              <span>Download Resume</span>
            </a>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 to-rose-600 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
            </button>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-6">
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              className="group p-3 bg-slate-800/50 hover:bg-slate-700/70 rounded-lg border border-slate-600/50 hover:border-slate-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-slate-700/50 space-y-4 sm:space-y-0">
                    <div className="flex-shrink-0">
            <Link href="/">
              <img src="/jp_logo.svg" alt="Logo" className="h-12 cursor-pointer" />
            </Link>
          </div>
          <div className="text-slate-400 text-sm text-center">
            © 2025 Jerome Patrick Tayco • Built with passion and lots of coffee ☕
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Footer;