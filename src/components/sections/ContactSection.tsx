/**
 * ContactSection component
 */
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  ExternalLink,
  Code2,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { useSpotlight } from "../../hooks";
import { siteConfig } from "../../config";

interface ContactMethod {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  ariaLabel: string;
}

// ISSUE 2 FIX: all cards wrapped in motion.a (including email) — already was, now verified
// each card gets explicit ariaLabel for accessibility (ISSUE 6)
const contactMethods: ContactMethod[] = [
  {
    icon: <Mail size={28} aria-hidden="true" />,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    ariaLabel: `Send email to ${siteConfig.email}`,
  },
  {
    icon: <Phone size={28} aria-hidden="true" />,
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    ariaLabel: `Call ${siteConfig.phone}`,
  },
  {
    icon: <ExternalLink size={28} aria-hidden="true" />,
    label: "LinkedIn",
    value: "aravind-puranam",
    href: siteConfig.linkedin,
    external: true,
    ariaLabel: "Visit LinkedIn profile (opens in new tab)",
  },
  {
    icon: <Code2 size={28} aria-hidden="true" />,
    label: "GitHub",
    value: siteConfig.githubUsername,
    href: siteConfig.github,
    external: true,
    ariaLabel: "Visit GitHub profile (opens in new tab)",
  },
  {
    icon: <MapPin size={28} aria-hidden="true" />,
    label: "Location",
    value: siteConfig.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.location)}`,
    external: true,
    ariaLabel: `View ${siteConfig.location} on Google Maps (opens in new tab)`,
  },
];

export function ContactSection() {
  const { onMouseMove } = useSpotlight();

  const handleStartConversation = () => {
    window.location.href = `mailto:${siteConfig.email}?subject=Let's%20Work%20Together`;
  };

  return (
    <section className="section-block py-xl" id="contact">
      <RevealOnScroll>
        <div
          className="contact-cta-panel spotlight-card"
          onMouseMove={onMouseMove}
        >
          <p className="section-eyebrow mb-2">Get in Touch</p>
          <h2 className="section-title mb-4">
            Let&apos;s Build Something Great
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
            I&apos;m open to freelance opportunities, contract work, and
            full-time positions. Reach out if you have a project that needs a
            reliable Android engineer.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={handleStartConversation}
            className="shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]"
            aria-label="Send email to start a conversation"
          >
            <Mail size={20} aria-hidden="true" />
            Start a Conversation
            <ArrowUpRight size={18} aria-hidden="true" />
          </Button>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-md">
        {contactMethods.map((method, index) => (
          <RevealOnScroll key={method.label} delay={index * 0.08}>
           <motion.a
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              aria-label={method.ariaLabel}
              className="block h-full rounded-xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card
                className="flex flex-col items-center gap-4 text-center h-full spotlight-card hover-scale group !p-5"
                onMouseMove={onMouseMove}
              >
                <div className="p-4 rounded-xl bg-brand-blue/10 text-brand-blue border border-brand-blue/15 group-hover:bg-brand-blue/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">
                  {method.icon}
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-white mb-2">
                    {method.label}
                  </h3>
                  <p className="font-body-md text-on-surface-variant group-hover:text-brand-blue transition-colors break-all text-sm">
                    {method.value}
                  </p>
                </div>
              </Card>
            </motion.a>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
