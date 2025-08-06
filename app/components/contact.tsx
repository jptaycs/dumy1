import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ExternalLink } from 'lucide-react';

const ContactFooter = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "jptayco1109@gmail.com";
  const phone = "+63 9765803883";

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

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's connect.</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate or just want to say hi? I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email Card */}
          <div className="group">
            <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} className="text-white" />
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={handleCopyEmail}
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 group/copy"
                    title="Copy email"
                  >
                    {copiedEmail ? (
                      <Check size={16} className="text-green-400" />
                    ) : (
                      <Copy size={16} className="text-gray-400 group-hover/copy:text-white" />
                    )}
                  </button>
                  <button 
                    onClick={handleEmailClick}
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 group/mail"
                    title="Send email"
                  >
                    <ExternalLink size={16} className="text-gray-400 group-hover/mail:text-white" />
                  </button>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400 mb-4">Drop me a line anytime</p>
              <p className="text-white font-mono text-sm bg-gray-800 px-4 py-2 rounded-lg break-all">
                {email}
              </p>
              
              {copiedEmail && (
                <div className="mt-3 text-green-400 text-sm flex items-center">
                  <Check size={14} className="mr-1" />
                  Email copied to clipboard!
                </div>
              )}
            </div>
          </div>

          {/* Phone Card */}
          <div className="group">
            <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone size={24} className="text-white" />
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={handleCopyPhone}
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 group/copy"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <Check size={16} className="text-green-400" />
                    ) : (
                      <Copy size={16} className="text-gray-400 group-hover/copy:text-white" />
                    )}
                  </button>
                  <button 
                    onClick={handlePhoneClick}
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 group/phone"
                    title="Call now"
                  >
                    <ExternalLink size={16} className="text-gray-400 group-hover/phone:text-white" />
                  </button>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-400 mb-4">Let's talk directly</p>
              <p className="text-white font-mono text-sm bg-gray-800 px-4 py-2 rounded-lg">
                {phone}
              </p>
              
              {copiedPhone && (
                <div className="mt-3 text-green-400 text-sm flex items-center">
                  <Check size={14} className="mr-1" />
                  Phone number copied to clipboard!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 border border-red-500/20 rounded-2xl p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-4">Ready to start something amazing?</h3>
            <p className="text-gray-300 mb-6">
              Whether it's a project collaboration, job opportunity, or just a friendly chat about tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleEmailClick}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium hover:scale-105 shadow-lg hover:shadow-red-500/25"
              >
                Send me an email
              </button>
              <button 
                onClick={handlePhoneClick}
                className="bg-transparent border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium hover:scale-105"
              >
                Give me a call
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-red-500 text-xl font-bold">JP</div>
            <div className="text-gray-400 text-sm">
              © 2025 Jerome Patrick Tayco. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;