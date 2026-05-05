"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { personalInfo } from "@/data/resume";
import { Mail, Linkedin, MapPin, Send, Copy, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// ---------- Validation schema ----------
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(4, "Subject is too short"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormValues = z.infer<typeof schema>;

// ---------- Contact meta ----------
const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    description: "Best way to reach me",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
    hoverBg: "hover:bg-indigo-500/15 hover:border-indigo-400/40",
    copyable: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: personalInfo.linkedinHandle,
    href: personalInfo.linkedin,
    description: "Connect professionally",
    color: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/20",
    hoverBg: "hover:bg-sky-500/15 hover:border-sky-400/40",
    copyable: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: undefined,
    description: "Open to remote & relocation",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
    hoverBg: "hover:bg-amber-500/15",
    copyable: false,
  },
];

// ---------- Copy button ----------
function CopyButton({ value }: Readonly<{ value: string }>) {
  const [copied, setCopied] = useState(false);
  const copy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(value);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      data-cursor-hover
      className="ml-auto flex-shrink-0 w-7 h-7 rounded-md bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
    >
      {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
    </button>
  );
}

// White background with black text — used for all form fields
const inputLight =
  "w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-slate-200 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-200";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setSending(true);
    // Build a mailto link with the form data and open it
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Hi Suresh,\n\n${data.message}\n\n— ${data.name} (${data.email})`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, "_blank");

    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    reset();
    toast.success("Your email client has opened!", {
      description: "Send the pre-filled email to reach Suresh.",
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-indigo-500/4 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            I&apos;m open to backend engineering roles, fintech opportunities, and collaborations.
            Drop me a message and I&apos;ll get back to you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left — contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-3"
          >
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              const inner = (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.09 }}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 group",
                    link.bg,
                    link.hoverBg
                  )}
                >
                  <div
                    className={cn(
                      "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border",
                      link.bg
                    )}
                  >
                    <Icon size={16} className={link.color} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-500 mb-0.5">{link.description}</p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors truncate">
                      {link.value}
                    </p>
                  </div>
                  {link.copyable && <CopyButton value={link.value} />}
                </motion.div>
              );

              return link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  data-cursor-hover
                >
                  {inner}
                </a>
              ) : (
                <div key={link.label}>{inner}</div>
              );
            })}
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card rounded-2xl p-6 md:p-8 space-y-5 relative overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-indigo-500/50 via-violet-500/30 to-transparent" />

              {/* Notice */}
              <div className="flex items-start gap-2 px-3 py-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                <span className="text-indigo-400 mt-0.5 flex-shrink-0">ℹ️</span>
                <p className="text-xs text-indigo-300 leading-relaxed">
                  Please enter your details so that I can get back to you.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    {...register("name")}
                    placeholder="John Doe"
                    className={cn(inputLight, errors.name && "border-red-400 focus:border-red-500 focus:ring-red-500/20")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    {...register("email")}
                    placeholder="you@example.com"
                    className={cn(inputLight, errors.email && "border-red-400 focus:border-red-500 focus:ring-red-500/20")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  {...register("subject")}
                  placeholder="Backend Engineer — Opportunity / Collaboration"
                  className={cn(inputLight, errors.subject && "border-red-400 focus:border-red-500 focus:ring-red-500/20")}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  {...register("message")}
                  rows={5}
                  placeholder="Tell me about the role, project, or how I can help..."
                  className={cn(inputLight, "resize-none", errors.message && "border-red-400 focus:border-red-500 focus:ring-red-500/20")}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={sending}
                data-cursor-hover
                className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-white overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={sending ? {} : { scale: 1.01 }}
                whileTap={sending ? {} : { scale: 0.99 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-300 group-hover:from-indigo-500 group-hover:to-violet-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-white/5 to-transparent" />
                <span className="relative flex items-center gap-2 text-sm">
                  {sending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Opening email client…
                    </>
                  ) : (
                    <>
                      <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>

              <p className="text-xs text-center text-slate-500 dark:text-slate-600">
                This will open your email client with the message pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
