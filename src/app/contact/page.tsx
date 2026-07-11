import HeaderBanner from "@/components/header-banner";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
  FaGlobe
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import React from 'react';

export const metadata = {
  title: "Contact | AFOP — Favour Adegoke",
  description: "Get in touch with Favour Adegoke. Available via email, phone, WhatsApp, and social media.",
};

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  accent: string;
  light: string;
}

interface ContactGroup {
  title: string;
  groupIcon: React.ReactNode;
  description: string;
  items: ContactItem[];
  accent: string;
  light: string;
}

export default function Contact() {
  const contactGroups: ContactGroup[] = [
    {
      title: "Social Media",
      groupIcon: <FaGlobe />,
      description: "Follow and connect with me",
      accent: "#1e3a8a",
      light: "#dbeafe",
      items: [
        { icon: <FaGithub />, label: "GitHub", value: "@Tomi-Philips", href: "https://github.com/Tomi-Philips", accent: "#1f2937", light: "#f3f4f6" },
        { icon: <FaTwitter />, label: "Twitter / X", value: "@favourAdegoke07", href: "https://x.com/favourAdegoke07", accent: "#1d9bf0", light: "#dbeafe" },
        { icon: <FaLinkedin />, label: "LinkedIn", value: "Favour Adegoke", href: "https://www.linkedin.com/in/adegoke-favour-b629082b0/", accent: "#0a66c2", light: "#dbeafe" },
      ],
    },
    {
      title: "Direct Contact",
      groupIcon: <FaPhone />,
      description: "Call or message me directly",
      accent: "#065f46",
      light: "#d1fae5",
      items: [
        { icon: <FaPhone />, label: "Hotline", value: "+234 916 853 3007", href: "tel:+2349168533007", accent: "#166534", light: "#dcfce7" },
        { icon: <FaWhatsapp />, label: "WhatsApp", value: "+234 813 165 3504", href: "https://wa.me/2348131653504", accent: "#15803d", light: "#dcfce7" },
        { icon: <FaTelegram />, label: "Telegram", value: "+234 813 165 3504", href: "https://t.me/2348131653504", accent: "#0369a1", light: "#e0f2fe" },
      ],
    },
    {
      title: "Email",
      groupIcon: <MdEmail />,
      description: "Send me a direct message",
      accent: "#9f1239",
      light: "#ffe4e6",
      items: [
        { icon: <FaEnvelope />, label: "Gmail", value: "adegokefavour240@gmail.com", href: "mailto:adegokefavour240@gmail.com", accent: "#dc2626", light: "#fee2e2" },
        { icon: <FaEnvelope />, label: "Gmail", value: "adegokefavour83@gmail.com", href: "mailto:adegokefavour83@gmail.com", accent: "#7c3aed", light: "#ede9fe" },
      ],
    },
  ];

  return (
    <>
      <HeaderBanner />
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-white border-b border-gray-100">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #1e3a8a 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-5" style={{ background: "radial-gradient(circle, #1e3a8a, transparent)" }} />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" />
                Typically responds within 24 hours
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                Let&apos;s{" "}
                <span className="relative inline-block">
                  <span className="text-blue-900">Connect</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                    <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed">
                Ready to collaborate, discuss ideas, or just say hello? I&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* ── Intro ── */}
          <section className="mb-12 text-center max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-lg">
              I&apos;m passionate about networking with talented individuals worldwide. Whether you have a project in mind, want to discuss technology, or just want to say hello — I&apos;d love to hear from you!
            </p>
          </section>

          {/* ── Contact Groups ── */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactGroups.map((group, gi) => (
                <div key={gi} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 overflow-hidden">
                  <div className="h-1 w-full" style={{ background: group.accent }} />
                  <div className="p-6">
                    {/* Group header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ background: group.light, color: group.accent }}>
                        {group.groupIcon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{group.title}</h3>
                        <p className="text-xs text-gray-500">{group.description}</p>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      {group.items.map((item, ii) => (
                        <a
                          key={ii}
                          href={item.href}
                          target={item.href.startsWith('http') ? "_blank" : undefined}
                          rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-200 group/link"
                        >
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-white text-sm transition-transform duration-200 group-hover/link:scale-110" style={{ background: item.accent }}>
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                            <p className="text-gray-500 text-xs truncate">{item.value}</p>
                          </div>
                          <svg className="w-4 h-4 text-gray-300 group-hover/link:text-blue-500 transition-colors duration-200 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Response promise ── */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                {[
                  { icon: "⚡", value: "< 24h", label: "Response Time", desc: "Quick and timely replies" },
                  { icon: "🌍", value: "Global", label: "Available Worldwide", desc: "Remote-friendly and open to all" },
                  { icon: "🤝", value: "Always", label: "Open to Collaborate", desc: "Projects, ideas, conversations" },
                ].map((item, i) => (
                  <div key={i} className="p-4">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-2xl font-bold text-blue-900 mb-1">{item.value}</div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{item.label}</div>
                    <div className="text-gray-500 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section>
            <div className="relative overflow-hidden bg-blue-900 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="text-5xl mb-6">💬</div>
                <h2 className="text-3xl font-bold mb-4">Ready to Start a Conversation?</h2>
                <p className="text-blue-200 mb-8 text-lg leading-relaxed">
                  Whether you have a project idea, want to collaborate, or just want to chat about technology — I&apos;m always excited to connect.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="mailto:adegokefavour240@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                  >
                    Send Email
                  </a>
                  <a href="https://wa.me/2348131653504" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-500 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    WhatsApp Me
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}