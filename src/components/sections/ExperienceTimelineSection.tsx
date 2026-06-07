/**
 * ExperienceTimelineSection component
 */
import { motion } from "framer-motion";
import { Briefcase, TrendingUp } from "lucide-react";
import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { useTimelineAnimation, useSpotlight } from "../../hooks";

interface ExperienceItem {
  title: string;
  company: string;
  period?: string;
  description: string;
  highlights: string[];
  metrics?: string[];
  isActive?: boolean;
  isEnterprise?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    title: "Associate Application Developer",
    company: "Spoors Technology Solutions",
    period: "May 2025 – Present · EFFORT Platform",
    description:
      "Contributing to EFFORT, a no-code field operations SaaS platform serving 150+ enterprise clients, 50,000+ users across 10+ countries, processing over 2M+ daily activities.",

    highlights: [
      "Diagnosed and resolved 100+ live production crashes and ANRs within SLA timelines using Firebase Crashlytics and Android Studio Profiler.",
      "Migrated 12+ legacy JobIntentService implementations to WorkManager across background sync, location tracking, and offline upload pipelines.",
      "Architected offline-first synchronization infrastructure using Room Database with metadata-driven schema updates.",
      "Engineered GPS tracking workflows using Fused Location Provider for real-time employee activity tracking.",
      "Delivered complex UI components using Jetpack Compose and ViewModels, including intricate expandable layout transitions and animations for Target vs. Achievement dashboards.",
      "Designed and validated an OCR proof-of-concept for business card, PAN card, and cheque extraction using Spring Boot and Kotlin.",
    ],

    metrics: [
      "150+ Enterprise Clients",
      "50,000+ Users",
      "10+ Countries",
      "2M+ Daily Activities",
      "12+ WorkManager Migrations",
      "100+ Crashes Resolved",
    ],

    isActive: true,
    isEnterprise: true,
  },

  {
    title: "Android Developer",
    company: "Monosage",
    period: "Sep 2023 – May 2025",
    description:
      "Delivered full Android product development across Social Media, E-Commerce, and CRM domains using Kotlin, MVVM, Firebase, and REST APIs.",

    highlights: [
      "Developed a social media application featuring real-time group chat, Firebase activity feeds, and a custom video compression pipeline using native Media APIs and Kotlin Coroutines.",
      "Implemented an e-commerce platform with product catalog, cart management, payment integration, and order tracking using Retrofit.",
      "Designed a CRM module with geolocation-based attendance tracking and real-time activity feeds.",
    ],
  },
];

export function ExperienceTimelineSection() {
  const { containerRef, fillPercentage } = useTimelineAnimation();
  const { onMouseMove } = useSpotlight();

  return (
    <section
      className="section-block timeline-container relative"
      id="experience"
      ref={containerRef}
    >
      <RevealOnScroll>
        <SectionHeader eyebrow="Career" title="Professional Experience" />
      </RevealOnScroll>

      <div className="relative pl-10 md:pl-12">
        <div className="timeline-line">
          <motion.div
            className="timeline-fill"
            style={{ height: `${fillPercentage}%` }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <RevealOnScroll key={experience.company} delay={index * 0.1}>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div
                  className={`absolute -left-[41px] md:-left-[49px] top-6 w-4 h-4 rounded-full border-4 border-brand-dark z-10 ${
                    experience.isActive
                      ? "bg-brand-blue shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                      : "bg-surface-variant"
                  }`}
                  animate={
                    experience.isActive
                      ? {
                          boxShadow: [
                            "0 0 10px rgba(59,130,246,0.6)",
                            "0 0 20px rgba(59,130,246,1)",
                            "0 0 10px rgba(59,130,246,0.6)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <Card
                  className={`p-6 md:p-8 spotlight-card hover-scale ${
                    experience.isEnterprise ? "enterprise-card" : ""
                  }`}
                  onMouseMove={onMouseMove}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue shrink-0 border border-brand-blue/15 hidden sm:flex">
                      <Briefcase size={24} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-headline-md text-headline-md text-white">
                          {experience.title}
                        </h3>

                        {experience.isEnterprise && (
                          <span className="enterprise-badge">
                            Enterprise SaaS
                          </span>
                        )}
                      </div>

                      <p className="text-brand-blue font-label-md">
                        {experience.company}
                        {experience.period && (
                          <span className="text-on-surface-variant">
                            {" · "}
                            {experience.period}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  <p className="text-on-surface-variant font-body-md max-w-4xl leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {experience.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-on-surface-variant text-sm leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {experience.metrics && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {experience.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-white/90 bg-brand-blue/15 border border-brand-blue/20 rounded-full px-3 py-1.5 hover:border-brand-blue/40 hover:bg-brand-blue/30 transition-colors"
                        >
                          <TrendingUp size={12} className="text-brand-blue" />
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}

                </Card>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
