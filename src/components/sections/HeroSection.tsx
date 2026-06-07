/**

 * HeroSection component

 */

import { motion } from "framer-motion";

import { Download, Mail, MapPin, Code2 } from "lucide-react";

import { Button } from "../ui/Button";

import { Badge } from "../ui/Badge";

import { ProfileAvatar } from "../ui/ProfileAvatar";

import { siteConfig } from "../../config";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,

      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },

    visible: {
      opacity: 1,

      y: 0,

      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section
      className="flex flex-col-reverse lg:flex-row items-center justify-between gap-xl lg:min-h-[70vh] relative pt-10 scroll-mt-24"
      id="hero"
    >
      <motion.div
        className="lg:w-3/5 flex flex-col gap-lg z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Badge variant="active">
            <span className="glow-dot metric-pulse" />
            Available for Hire
          </Badge>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-xs">
          <p className="font-label-md text-label-md text-brand-blue tracking-widest uppercase">
            {siteConfig.name}
          </p>

          <h1 className="font-display-lg text-display-lg md:text-[56px] lg:text-[64px] md:leading-[1.1] text-white tracking-tight">
            <span className="text-brand-blue text-glow">Android Developer</span>{" "}
            Building Enterprise Mobile Platforms
          </h1>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3"
          variants={itemVariants}
        >
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Android Developer with 2+ years of experience building enterprise SaaS
            and product applications using Kotlin. Contributed to EFFORT, a
            no-code field operations platform serving 150+ enterprise clients,
            50,000+ users across 10+ countries, processing over 2M+ daily
            activities.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Specialized in WorkManager migrations, offline-first architecture,
            location intelligence systems, Jetpack Compose modernization, and
            production crash & ANR diagnostics.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-2"
          variants={itemVariants}
        >
          {['Kotlin Specialist', 'WorkManager Expert', 'Offline-First Architecture', 'Background Processing', 'Enterprise SaaS', 'Production Stability'].map((kw) => (
            <span
              key={kw}
              className="inline-flex items-center font-label-sm text-label-sm text-brand-blue bg-brand-blue/10 border border-brand-blue/25 rounded-full px-3 py-1 tracking-wide"
            >
              {kw}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="flex items-center gap-2 text-on-surface-variant"
          variants={itemVariants}
        >
          <MapPin size={16} className="text-brand-blue shrink-0" />

          <span className="font-label-sm text-label-sm">
            {siteConfig.location}
          </span>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-md mt-sm"
          variants={itemVariants}
        >
          <a href="/Aravind_Puranam_Resume.pdf" download>
            <Button variant="primary">
              <Download size={18} />
              Download Resume
            </Button>
          </a>

          <Button
            variant="secondary"
            onClick={() => window.open(siteConfig.github, "_blank")}
          >
            <Code2 size={18} />
            GitHub
          </Button>

          <Button
            variant="secondary"
            onClick={() => window.open(siteConfig.linkedin, "_blank")}
          >
            LinkedIn
          </Button>

          <Button
            variant="ghost"
            onClick={scrollToContact}
            aria-label="Scroll to contact section"
          >
            <Mail size={18} aria-hidden="true" />
            Contact
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="lg:w-2/5 flex justify-center lg:justify-end w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <ProfileAvatar size="hero" />
      </motion.div>
    </section>
  );
}
