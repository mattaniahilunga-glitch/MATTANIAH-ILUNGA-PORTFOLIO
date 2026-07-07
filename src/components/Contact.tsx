import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ContactLead } from "../types";
import { DynamicIcon } from "./DynamicIcon";

interface ContactProps {
  onOpenDashboard: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenDashboard }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Listen to autofill-service custom event from Services page
  useEffect(() => {
    const handleAutofill = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          subject: `Inquiry regarding: ${customEvent.detail}`,
          message: `Hello Mattaniah,\n\nI am interested in booking your "${customEvent.detail}" service. Let's schedule a time to coordinate.`
        }));

        // Focus on name input
        const nameInput = document.getElementById("contact-name");
        if (nameInput) {
          nameInput.focus();
        }
      }
    };

    window.addEventListener("autofill-service", handleAutofill);
    return () => window.removeEventListener("autofill-service", handleAutofill);
  }, []);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = "Full name is required";
    
    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Invalid email format";
    }

    if (!formData.subject.trim()) nextErrors.subject = "Subject is required";
    if (!formData.message.trim()) nextErrors.message = "Message text is required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate an elite server request duration
    setTimeout(() => {
      const newLead: ContactLead = {
        id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toISOString(),
        read: false
      };

      // Retrieve existing leads and save
      const existing = localStorage.getItem("ilunga_man_contact_leads");
      let leadsArray: ContactLead[] = [];
      if (existing) {
        try {
          leadsArray = JSON.parse(existing);
        } catch (err) {
          console.error("Error reading leads", err);
        }
      }

      leadsArray.push(newLead);
      localStorage.setItem("ilunga_man_contact_leads", JSON.stringify(leadsArray));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      // Reset success banner after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 6000);

    }, 1800);
  };

  // Format phone numbers into clean international clickable formats
  const cleanPhone1 = "+260776918455"; // 0776 918 455
  const cleanPhone2 = "+260963606962"; // 0963 606 962

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden dark-grid-bg border-t border-white/5">
      {/* Glow backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white leading-tight">
                Let's Build Something Amazing Together.
              </h2>
              <p className="text-zinc-400 text-sm font-light font-sans leading-relaxed">
                Whether you need a custom e-commerce store, NGO presence, school hub, server migrations, or cybersecurity audits—reach out today for a prompt estimate.
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-blue-600/40 via-white/5 to-transparent" />

            {/* Direct Contact Channels */}
            <div className="space-y-4">
              {/* WhatsApp Channels */}
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-3">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                  <DynamicIcon name="Phone" size={10} className="text-green-500" /> CALL OR WHATSAPP
                </span>
                
                <div className="space-y-2">
                  <a
                    href={`https://wa.me/${cleanPhone1.replace("+", "")}?text=Hello%20Mattaniah,%20I'm%20contacting%20you%20regarding%20a%20website%20development%20project.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-black hover:bg-zinc-900 border border-white/5 hover:border-green-500/20 transition-all group"
                  >
                    <span className="text-xs font-mono text-zinc-300">0776 918 455</span>
                    <span className="text-[10px] bg-green-500/10 text-green-400 border border-green-500/20 rounded px-2 py-0.5 font-mono group-hover:bg-green-500 group-hover:text-white transition-colors flex items-center gap-1">
                      WhatsApp <DynamicIcon name="ArrowUpRight" size={8} />
                    </span>
                  </a>

                  <a
                    href={`https://wa.me/${cleanPhone2.replace("+", "")}?text=Hello%20Mattaniah,%20I'm%20contacting%20you%20regarding%20a%20website%20development%20project.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-black hover:bg-zinc-900 border border-white/5 hover:border-green-500/20 transition-all group"
                  >
                    <span className="text-xs font-mono text-zinc-300">0963 606 962</span>
                    <span className="text-[10px] bg-green-500/10 text-green-400 border border-green-500/20 rounded px-2 py-0.5 font-mono group-hover:bg-green-500 group-hover:text-white transition-colors flex items-center gap-1">
                      WhatsApp <DynamicIcon name="ArrowUpRight" size={8} />
                    </span>
                  </a>
                </div>
              </div>

              {/* Email channel */}
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 flex items-center justify-between hover:border-blue-500/20 transition-all">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                    EMAIL INQUIRIES
                  </span>
                  <a href="mailto:mattaniahilunga@gmail.com" className="text-xs font-mono text-blue-400 hover:underline">
                    mattaniahilunga@gmail.com
                  </a>
                </div>
                <a
                  href="mailto:mattaniahilunga@gmail.com"
                  className="p-2 bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-lg hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
                >
                  <DynamicIcon name="Mail" size={14} />
                </a>
              </div>
            </div>

            {/* Admin Key Lock Visual indicator */}
            <div className="pt-4 flex items-center space-x-2 text-[11px] text-zinc-600 font-mono">
              <DynamicIcon name="ShieldCheck" size={12} className="text-zinc-500" />
              <span>Double-click foot brand name to inspect incoming leads.</span>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden box-glow-strong bg-zinc-950/40">
              
              <h3 className="text-base font-display font-bold text-white tracking-tight mb-6 pb-3 border-b border-white/5">
                Inquiry Intake Form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name Input */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                    Full Name <span className="text-blue-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-black border rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors ${
                      errors.name ? "border-red-500/40" : "border-white/10"
                    }`}
                    placeholder="e.g. Nesta Mukela"
                  />
                  {errors.name && <p className="text-[10px] font-mono text-red-400">{errors.name}</p>}
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                      Email Address <span className="text-blue-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-black border rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors ${
                        errors.email ? "border-red-500/40" : "border-white/10"
                      }`}
                      placeholder="e.g. nested@example.com"
                    />
                    {errors.email && <p className="text-[10px] font-mono text-red-400">{errors.email}</p>}
                  </div>

                  {/* Phone (Optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                      Phone Number <span className="text-zinc-500">(Optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="e.g. +260 963606962"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                    Project Subject <span className="text-blue-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-black border rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors ${
                      errors.subject ? "border-red-500/40" : "border-white/10"
                    }`}
                    placeholder="e.g. E-commerce Website Design"
                  />
                  {errors.subject && <p className="text-[10px] font-mono text-red-400">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                    Project Message <span className="text-blue-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-black border rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors ${
                      errors.message ? "border-red-500/40" : "border-white/10"
                    }`}
                    placeholder="Outline your budget, timelines, or operational ideas..."
                  />
                  {errors.message && <p className="text-[10px] font-mono text-red-400">{errors.message}</p>}
                </div>

                {/* Form Alert Banners */}
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs rounded-xl flex items-center space-x-3"
                  >
                    <DynamicIcon name="Sparkles" size={16} />
                    <div>
                      <p className="font-semibold">Message submitted successfully!</p>
                      <p className="opacity-80">Thank you. Mattaniah will review this lead and respond shortly.</p>
                    </div>
                  </motion.div>
                )}

                {/* Submit button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white text-black hover:bg-zinc-200 font-display font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <DynamicIcon name="RefreshCw" size={14} className="animate-spin" />
                      Securing transmission tunnel...
                    </>
                  ) : (
                    <>
                      Submit Message
                      <DynamicIcon name="Send" size={14} />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
