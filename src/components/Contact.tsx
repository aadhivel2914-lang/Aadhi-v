import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  MessageSquare,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please write your message.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate sending transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Construct mailto link
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Aadhipradhap,\n\nMy name is ${formData.name} (${formData.email}).\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>08 // DIRECT TRANSMISSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Touch</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
            Have a project, internship opportunity, or question regarding my AI research? Send a transmission below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Badges */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="rounded-2xl p-6 bg-slate-900/60 backdrop-blur-xl border border-cyan-500/30 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800 text-slate-300 hover:text-cyan-300 hover:bg-slate-700 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                </button>
              </div>

              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Official Email
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-lg font-bold font-heading text-white hover:text-cyan-300 transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Location & Status Card */}
            <div className="rounded-2xl p-6 bg-slate-900/60 backdrop-blur-xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Location</span>
                  <span className="text-sm font-semibold text-white">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300">
                  <Sparkles className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Opportunity Status</span>
                  <span className="text-sm font-semibold text-emerald-400">
                    Open for AI & Engineering Roles
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="rounded-2xl p-6 bg-slate-900/40 border border-slate-800/80 backdrop-blur-md">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Professional Networks
              </h4>
              <div className="flex gap-3">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-10 bg-slate-900/60 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative">
              
              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-start gap-3 text-emerald-200 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Message Ready!</strong>
                    <span>Your transmission has been configured. The mail protocol has been initiated with recipient {PERSONAL_INFO.email}.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Ramesh Kumar / Recruiter"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500/80' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@techfirm.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500/80' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. AI Internship Opportunity / Fake Certificate Project Inquiry"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors ${
                      errors.subject ? 'border-red-500/80' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your requirement, job role, or inquiry..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors ${
                      errors.message ? 'border-red-500/80' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 hover:from-cyan-300 hover:to-violet-300 transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
