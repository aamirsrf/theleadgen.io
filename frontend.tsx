import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Mail,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Star,
  Menu,
  X as XIcon,
  CheckCircle2,
  Send,
  Loader2,
} from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[#0a0a0f]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">theleadgen.io</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="gold-gradient text-white font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Get Started
          </a>
        </div>
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <XIcon className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#141420] border-t border-border px-6 pb-4 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block text-sm font-medium text-gray-400 hover:text-white py-3"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-2 gold-gradient text-white font-semibold px-6 py-2.5 rounded-lg text-sm text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
      <div className="h-[3px] gold-gradient" />
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="animate-fade-up max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-dark">
              Premium Lead Generation for{" "}
              <span className="text-gold">Insurance Companies</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Get qualified, verified leads delivered straight to your CRM.
              Every lead is filtered through a custom qualification form and
              confirmed with OTP verification, so your team gets real prospects
              with accurate contact information.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 gold-gradient text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Your First Leads
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 border-2 border-gold text-gold font-semibold px-8 py-4 rounded-lg hover:bg-gold hover:text-white transition-all"
              >
                See How It Works
              </a>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Trusted by leading insurance agencies nationwide
            </p>
        </div>
      </div>
    </section>
  );
}

function Advantage() {
  const features = [
    {
      icon: <Mail className="h-6 w-6 text-gold" />,
      title: "Custom Qualification Form",
      description:
        "You set the criteria, and we build the form to filter leads based on what your team is looking for and send it to your CRM.",
    },
    {
      icon: <Shield className="h-6 w-6 text-gold" />,
      title: "OTP Verification",
      description:
        "Every lead is verified through one-time password confirmation. Guarantee authenticity and reduce fraud by 100%.",
    },
    {
      icon: <Zap className="h-6 w-6 text-gold" />,
      title: "Dedicated Pipeline",
      description:
        "Qualified leads delivered straight to your CRM. Real-time integration, zero manual work, maximum efficiency.",
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark">
          The theleadgen.io Advantage
        </h2>
        <p className="mt-4 text-muted-foreground">
          Why top insurance agencies choose us
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-secondary border border-border rounded-2xl p-8 hover:shadow-lg hover:shadow-gold/5 transition-shadow text-left"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-light flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-dark mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Activate",
      description: "Launch your insurance lead campaign in minutes",
    },
    {
      num: 2,
      title: "Qualify",
      description: "Prospects complete our qualification form",
    },
    {
      num: 3,
      title: "Verify",
      description: "OTP confirmation ensures real contacts",
    },
    {
      num: 4,
      title: "Deliver",
      description: "Leads sent directly to your CRM instantly",
    },
  ];

  return (
    <section className="py-24 bg-cream-dark" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark">
          How It Works
        </h2>
        <p className="mt-4 text-muted-foreground">
          Four simple steps to qualified leads
        </p>
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  {s.num}
                </div>
                <h3 className="font-serif text-lg font-bold text-dark mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-3 w-6 h-0.5 bg-gold" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const rows = [
    { feature: "Lead Exclusivity", pf: "100% Exclusive", vendor: "Shared with 3–5 buyers" },
    { feature: "Lead Quality", pf: "Pre-qualified via quiz flow", vendor: "Generic form fills" },
    { feature: "Delivery Speed", pf: "Real-time to CRM", vendor: "Delayed spreadsheets" },
    { feature: "Phone Verification", pf: "OTP / PIN verified", vendor: "Unverified numbers" },
    { feature: "Compliance", pf: "TrustedForm & Jornaya support", vendor: "Opaque sourcing" },
    { feature: "Pricing Model", pf: "Pay per qualified lead", vendor: "Retainers & setup fees" },
  ];

  return (
    <section className="py-24 bg-muted" id="why-choose-us">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark">
            Why Teams Pick{" "}
            <span className="text-gold">theleadgen.io</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            See how we are different from old lead sellers.
          </p>
        </div>
        <div className="bg-card rounded-2xl border border-border overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="bg-white/10">
                <th className="p-3 md:p-5 text-left font-semibold text-sm md:text-base text-dark"></th>
                <th className="p-3 md:p-5 text-center font-semibold text-gold text-sm md:text-base">theleadgen.io</th>
                <th className="p-3 md:p-5 text-center font-semibold text-sm md:text-base text-muted-foreground">Typical Vendor</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={i !== rows.length - 1 ? "border-b border-border" : ""}>
                  <td className="py-6 px-3 md:py-12 md:px-6 font-medium text-dark text-sm md:text-base">{row.feature}</td>
                  <td className="py-6 px-3 md:py-12 md:px-6 text-center">
                    <span className="inline-flex items-center justify-center gap-1 md:gap-2">
                      <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                      <span className="text-gold text-xs md:text-sm">{row.pf}</span>
                    </span>
                  </td>
                  <td className="py-6 px-3 md:py-12 md:px-6 text-center">
                    <span className="inline-flex items-center justify-center gap-1 md:gap-2">
                      <XIcon className="h-4 w-4 text-gray-500 shrink-0" />
                      <span className="text-gray-500 text-xs md:text-sm">{row.vendor}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      text: "theleadgen.io transformed our lead generation process. We've seen a 250% increase in qualified leads and our sales team couldn't be happier.",
      name: "James Mitchell",
      role: "CEO, Summit Insurance Partners",
    },
    {
      text: "The OTP verification is a game-changer. We know every lead is real and ready to engage. Our conversion rates have skyrocketed.",
      name: "Sarah Chen",
      role: "VP of Sales, Premier Agency Group",
    },
    {
      text: "Best investment we've made. The automation alone saves us 20 hours per week, and the lead quality is exceptional.",
      name: "Michael Rodriguez",
      role: "Founder, Midwest Insurance Solutions",
    },
    {
      text: "We switched from a big-name vendor and immediately saw better results. The leads are exclusive and actually pick up the phone.",
      name: "David Park",
      role: "Director, Pacific Coast Insurance",
    },
    {
      text: "Finally, a lead gen partner that delivers what they promise. Our close rate went from 8% to 22% in the first quarter.",
      name: "Amanda Foster",
      role: "Sales Manager, Shield Financial Group",
    },
  ];

  // Duplicate for seamless infinite scroll
  const allReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="text-center px-6 mb-16">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark">
          Trusted by Leading Insurance Agencies
        </h2>
        <p className="mt-4 text-muted-foreground">
          See what our clients have to say
        </p>
      </div>
      <div className="marquee-container">
        <div className="marquee-track">
          {allReviews.map((r, idx) => (
            <div
              key={`${r.name}-${idx}`}
              className="marquee-card bg-card border border-border rounded-2xl p-8 text-left"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed mb-6">
                "{r.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-dark">{r.name}</p>
                <p className="text-sm text-gold">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How do you qualify leads?",
      a: "We use a quiz to weed out bad leads. We also check the phone number with a code so you know it is real.",
    },
    {
      q: "How do I receive the leads?",
      a: "Leads go to your CRM or email right away. We work with most CRMs.",
    },
    {
      q: "Are the leads just for me?",
      a: "Yes. Every lead is yours only. We do not sell it to anyone else.",
    },
    {
      q: "Can I choose my lead criteria?",
      a: "Yes. You set the criteria, and we build the form to filter leads based on what your team is looking for and send it to your CRM.",
    },
    {
      q: "What if the lead is fake?",
      a: "Fake or duplicate leads are swapped for free. We do OTP and check data to stop this.",
    },
    {
      q: "Is the lead form TCPA-compliant?",
      a: "Yes. Every form includes TCPA consent language that prospects must agree to before submitting. This confirms they understand who may contact them and how they may be contacted for follow-up.",
    },
  ];

  return (
    <section className="py-24 bg-card" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Everything you need to know about our lead generation service
        </p>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-dark">{faq.q}</span>
                <svg
                  className="h-5 w-5 shrink-0 text-muted-foreground"
                  style={{
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              )}
              <div className="border-b border-border" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntakeForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    insuranceType: "",
    monthlyVolume: "",
    targetStates: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const subject = encodeURIComponent(
      `Lead Request from ${formData.fullName} — ${formData.companyName}`
    );
    const body = encodeURIComponent(
      `New Lead Intake Request\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `Name: ${formData.fullName}\n` +
      `Company: ${formData.companyName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Insurance Type: ${formData.insuranceType}\n` +
      `Monthly Volume: ${formData.monthlyVolume}\n` +
      `Target States: ${formData.targetStates || "Not specified"}\n\n` +
      `Additional Notes:\n${formData.message || "None"}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&to=aamir@crestalisgroup.com&su=${subject}&body=${body}`,
      "_blank"
    );

    setStatus("sent");
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      insuranceType: "",
      monthlyVolume: "",
      targetStates: "",
      message: "",
    });
  };

  if (status === "sent") {
    return (
      <section className="py-24 bg-cream-dark" id="contact">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="h-10 w-10 text-gold" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-dark">
            Thank You!
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We've received your request. Our team will reach out within 24 hours
            to discuss your lead generation needs.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 text-gold underline underline-offset-4 hover:opacity-80"
          >
            Submit another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-cream-dark" id="contact">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark">
            Get Started With{" "}
            <span className="text-gold">Your Leads</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Fill out the form below and we'll build a custom lead pipeline for
            your agency.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-6 md:p-10 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Smith"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-dark placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                Company Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                placeholder="ABC Insurance Agency"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-dark placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@abcinsurance.com"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-dark placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-dark placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                Insurance Type <span className="text-red-400">*</span>
              </label>
              <select
                name="insuranceType"
                required
                value={formData.insuranceType}
                onChange={handleChange}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              >
                <option value="" disabled>Select type...</option>
                <option value="auto">Auto Insurance</option>
                <option value="home">Home Insurance</option>
                <option value="life">Life Insurance</option>
                <option value="health">Health Insurance</option>
                <option value="medicare">Medicare</option>
                <option value="commercial">Commercial Insurance</option>
                <option value="final-expense">Final Expense</option>
                <option value="multiple">Multiple Lines</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                Monthly Lead Volume <span className="text-red-400">*</span>
              </label>
              <select
                name="monthlyVolume"
                required
                value={formData.monthlyVolume}
                onChange={handleChange}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              >
                <option value="" disabled>How many leads/month?</option>
                <option value="50-100">50 – 100</option>
                <option value="100-250">100 – 250</option>
                <option value="250-500">250 – 500</option>
                <option value="500-1000">500 – 1,000</option>
                <option value="1000+">1,000+</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-dark mb-2">
              Target States / Regions
            </label>
            <input
              type="text"
              name="targetStates"
              value={formData.targetStates}
              onChange={handleChange}
              placeholder="e.g. California, Texas, Nationwide"
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-dark placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark mb-2">
              Anything else we should know?
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your ideal lead, budget, CRM, or any questions..."
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-dark placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full gold-gradient text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg flex items-center justify-center gap-3 disabled:opacity-60"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Request My Leads
              </>
            )}
          </button>
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Please try again or email us at{" "}
              <a href="https://mail.google.com/mail/?view=cm&to=aamir@crestalisgroup.com" className="underline">
                aamir@crestalisgroup.com
              </a>
            </p>
          )}
          <p className="text-center text-xs text-muted-foreground">
            We'll respond within 24 hours. No spam, no obligation.
          </p>
        </form>
      </div>
    </section>
  );
}


function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Advantage />
      <Testimonials />
      <HowItWorks />
      <WhyChooseUs />
      <FAQ />
      <IntakeForm />
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
